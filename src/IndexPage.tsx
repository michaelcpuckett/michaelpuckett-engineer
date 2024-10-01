import slugify from "react-slugify";
import data from "./data";
import { getScripts } from "./scripts";
import { getStyles } from "./styles";

export function IndexPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{data.name + " - " + data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
        <script dangerouslySetInnerHTML={{ __html: getScripts() }} />
      </head>
      <body>
        <div className="container">
          <Nav />
          <Header />
          <main>
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
          </main>
        </div>
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav>
      <div className="nav__region">
        <a href={"mailto:" + data.email}>Email</a>
        {data.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank">
            {link.text}
          </a>
        ))}
      </div>
      <div className="nav__region">
        <a href="michael_puckett_resume.pdf" target="_blank">
          Résumé
        </a>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>
        <span className="h1__name">{data.name}</span>
        <span hidden>-</span>
        <span className="h1__title">{data.title}</span>
      </h1>
      <p>{data.description}</p>
    </header>
  );
}

function SkillsSection() {
  return (
    <section aria-labelledby="section-header-skills">
      <h2 aria-labelledby="section-header-skills">
        <a id="skills" href="#skills" aria-label="Skills section">
          <section-marker />
        </a>
        <span id="section-header-skills">Skills</span>
      </h2>
      <card-list aria-labelledby="section-header-skills">
        {data.skills.map((item) => {
          const id = slugify(item.heading);

          return (
            <card-item key={id} aria-labelledby={id}>
              <h3 id={id}>{item.heading}</h3>
              {item.contentHtml}
            </card-item>
          );
        })}
      </card-list>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section aria-labelledby="section-header-experience">
      <h2 aria-labelledby="section-header-experience">
        <a id="experience" href="#experience" aria-label="Experience section">
          <section-marker />
        </a>
        <span id="section-header-experience">Experience</span>
      </h2>
      <card-list aria-labelledby="section-header-experience">
        {data.experience.map((item) => {
          const id = slugify(item.heading);

          return (
            <card-item key={id} aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id}>{item.heading}</h3>
                  <p className="card__detail">{item.detail}</p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              {item.contentHtml}
            </card-item>
          );
        })}
      </card-list>
    </section>
  );
}

function EducationSection() {
  return (
    <section aria-labelledby="section-header-education">
      <h2 aria-labelledby="section-header-education">
        <a id="education" href="#education" aria-label="Education section">
          <section-marker />
        </a>
        <span id="section-header-education">Education</span>
      </h2>
      <card-list aria-labelledby="section-header-education">
        {data.education.map((item) => {
          const id = slugify(item.heading);

          return (
            <card-item key={id} aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id}>{item.heading}</h3>
                  <p className="card__detail">{item.detail}</p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              {item.contentHtml}
            </card-item>
          );
        })}
      </card-list>
    </section>
  );
}

function Dates({ startDate, endDate }) {
  const isPresent = endDate === "Present";

  const shortMonthFormatter = Intl.DateTimeFormat("en-US", {
    month: "short",
  });

  const longMonthFormatter = Intl.DateTimeFormat("en-US", {
    month: "long",
  });

  const numericMonthFormatter = Intl.DateTimeFormat("en-US", {
    month: "2-digit",
  });

  const numericYearFormatter = Intl.DateTimeFormat("en-US", {
    year: "numeric",
  });

  const startDateParts = [
    shortMonthFormatter
      .formatToParts(new Date(startDate))
      .find((part) => part.type === "month")?.value ?? "",
    longMonthFormatter
      .formatToParts(new Date(startDate))
      .find((part) => part.type === "month")?.value ?? "",
    numericMonthFormatter
      .formatToParts(new Date(startDate))
      .find((part) => part.type === "month")?.value ?? "",
    numericYearFormatter
      .formatToParts(new Date(startDate))
      .find((part) => part.type === "year")?.value ?? "",
  ];

  const endDateParts = isPresent
    ? ["Present", "Present", "", ""]
    : [
        shortMonthFormatter
          .formatToParts(new Date(endDate))
          .find((part) => part.type === "month")?.value ?? "",
        longMonthFormatter
          .formatToParts(new Date(endDate))
          .find((part) => part.type === "month")?.value ?? "",
        numericMonthFormatter
          .formatToParts(new Date(endDate))
          .find((part) => part.type === "month")?.value ?? "",
        numericYearFormatter
          .formatToParts(new Date(endDate))
          .find((part) => part.type === "year")?.value ?? "",
      ];

  const getDisplayFormat = ([shortMonth, longMonth, _, year]: string[]) => {
    return (
      <span aria-hidden="true">
        <span className="dates__date__month" aria-hidden="true">
          {shortMonth}
        </span>
        <span className="visually-hidden">{longMonth}</span>{" "}
        <span className="dates__date__year">{year}</span>
      </span>
    );
  };

  const getMachineFormat = ([_, __, numericalMonth, year]: string[]) => {
    return `${year}-${numericalMonth}`;
  };

  const getAriaFormat = ([_, longMonth, __, year]: string[]) => {
    return `${longMonth}${year ? `, ${year}` : ""}`;
  };

  const startDateDisplay = getDisplayFormat(startDateParts);
  const endDateDisplay = isPresent ? (
    <span className="dates__date__month">Present</span>
  ) : (
    getDisplayFormat(endDateParts)
  );

  const startDateMachine = getMachineFormat(startDateParts);
  const endDateMachine = getMachineFormat(endDateParts);

  const startDateAria = getAriaFormat(startDateParts);
  const endDateAria = getAriaFormat(endDateParts);

  return (
    <div className="dates" role="group" aria-label="Start and End Dates">
      <time
        className="dates__date"
        dateTime={startDateMachine}
        aria-label={startDateAria}
      >
        {startDateDisplay}
      </time>
      <span className="dates__through" aria-hidden="true" hidden>
        <>&ndash;</>
      </span>
      <span className="visually-hidden">{" through "}</span>
      <time
        className="dates__date"
        dateTime={endDateMachine}
        aria-label={endDateAria}
      >
        {endDateDisplay}
      </time>
    </div>
  );
}
