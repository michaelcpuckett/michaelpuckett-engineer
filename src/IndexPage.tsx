import slugify from "react-slugify";
import data from "./data";
import { getScripts } from "./scripts";
import { getStyles } from "./styles";

export function IndexPage() {
  return (
    <Html>
      <Head />
      <Body>
        <Nav />
        <Header />
        <Main>
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
        </Main>
      </Body>
    </Html>
  );
}

function Html({ children }: React.PropsWithChildren) {
  return <html lang="en">{children}</html>;
}

function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <title>
        {data.name + " - " + data.jobTitle + " | " + data.additionalTitle}
      </title>
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
      <script dangerouslySetInnerHTML={{ __html: getScripts() }} />
    </head>
  );
}

function Body({ children }: React.PropsWithChildren) {
  return (
    <body>
      <div className="container" itemScope itemType="http://schema.org/Person">
        {children}
      </div>
    </body>
  );
}

function Main({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}

function Nav() {
  return (
    <nav>
      <div className="nav__region">
        <a href={"mailto:" + data.email}>Email</a>
        {data.links.map((link) => (
          <a itemProp="sameAs" key={link.href} href={link.href} target="_blank">
            {link.text}
          </a>
        ))}
      </div>
      <div
        className="nav__region"
        itemProp="potentialAction"
        itemScope
        itemType="http://schema.org/ReadAction"
      >
        <a
          href="michael_puckett_resume.pdf"
          target="_blank"
          itemProp="object"
          itemScope
          itemType="http://schema.org/DigitalDocument"
        >
          <span itemProp="name">Résumé</span>
          <meta
            itemProp="url"
            content="https://michaelpuckett.engineer/michael_puckett_resume.pdf"
          />
        </a>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header role="banner">
      <h1>
        <span className="h1__name" itemProp="name">
          {data.name}
        </span>
        <span className="visually-hidden"> &mdash; </span>
        <span className="h1__title">
          <span itemProp="jobTitle">{data.jobTitle}</span> |{" "}
          <span>{data.additionalTitle}</span>
        </span>
      </h1>
      <p itemProp="description">{data.description}</p>
      <div hidden data-print-only>
        <div itemProp="url">https://michaelpuckett.engineer</div>
        <div itemProp="email">michael -at- puckett.contact</div>
        <div itemProp="telephone">615-209-1380</div>
        <div
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">9709 Mary Dell Lane</span>
          <span itemProp="addressLocality">Louisville</span>
          <span itemProp="addressRegion">KY</span>
          <span itemProp="postalCode">40291</span>
        </div>
      </div>
      <img
        hidden
        itemProp="image"
        alt="Headshot photo of Michael Puckett"
        src="https://michaelpuckett.engineer/michael_puckett_avatar.png"
      />
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
              <h3 itemProp="knowsAbout" id={id}>
                {item.heading}
              </h3>
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
            <card-item
              key={id}
              aria-labelledby={id}
              itemProp="memberOf"
              itemScope
              itemType="http://schema.org/Organization"
            >
              <meta itemProp="name" content={item.heading} />
              <div
                style={{ display: "contents" }}
                itemProp="member"
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                <div className="card__header">
                  <div className="card__heading">
                    <h3 id={id} aria-owns={id + " " + id + "-detail"}>
                      {item.heading}
                    </h3>
                    <p
                      itemProp="roleName"
                      className="card__detail"
                      id={id + "-detail"}
                    >
                      {item.detail}
                    </p>
                  </div>
                  <Dates startDate={item.startDate} endDate={item.endDate} />
                </div>
                <div itemProp="description">{item.contentHtml}</div>
              </div>
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
            <card-item
              key={id}
              aria-labelledby={id}
              itemProp="alumniOf"
              itemScope
              itemType="http://schema.org/CollegeOrUniversity"
            >
              <meta itemProp="name" content={item.heading} />
              <link itemProp="sameAs" href={item.url} />
              <div
                style={{ display: "contents" }}
                itemProp="member"
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                <div className="card__header">
                  <div className="card__heading">
                    <h3 id={id} aria-owns={id + " " + id + "-detail"}>
                      {item.heading}
                    </h3>
                    <p
                      className="card__detail"
                      id={id + "-detail"}
                      itemProp="roleName"
                    >
                      {item.detail}
                    </p>
                  </div>
                  <Dates startDate={item.startDate} endDate={item.endDate} />
                </div>
                <div itemProp="description">{item.contentHtml}</div>
              </div>
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

  type DateParts = {
    isPresent: boolean;
    shortMonth: string;
    longMonth: string;
    numericMonth: string;
    year: string;
  };

  const startDateParts: DateParts = {
    isPresent: false,
    shortMonth:
      shortMonthFormatter
        .formatToParts(new Date(startDate))
        .find((part) => part.type === "month")?.value ?? "",
    longMonth:
      longMonthFormatter
        .formatToParts(new Date(startDate))
        .find((part) => part.type === "month")?.value ?? "",
    numericMonth:
      numericMonthFormatter
        .formatToParts(new Date(startDate))
        .find((part) => part.type === "month")?.value ?? "",
    year:
      numericYearFormatter
        .formatToParts(new Date(startDate))
        .find((part) => part.type === "year")?.value ?? "",
  };

  const endDateParts: DateParts = {
    isPresent,
    ...(isPresent
      ? {
          shortMonth: "",
          longMonth: "",
          numericMonth: "",
          year: "",
        }
      : {
          shortMonth:
            shortMonthFormatter
              .formatToParts(new Date(endDate))
              .find((part) => part.type === "month")?.value ?? "",
          longMonth:
            longMonthFormatter
              .formatToParts(new Date(endDate))
              .find((part) => part.type === "month")?.value ?? "",
          numericMonth:
            numericMonthFormatter
              .formatToParts(new Date(endDate))
              .find((part) => part.type === "month")?.value ?? "",
          year:
            numericYearFormatter
              .formatToParts(new Date(endDate))
              .find((part) => part.type === "year")?.value ?? "",
        }),
  };

  const getDisplayFormat = ({ isPresent, shortMonth, year }: DateParts) => {
    return (
      <>
        <span className="dates__date__month" aria-hidden="true">
          {isPresent ? "Present" : shortMonth}
        </span>
        {isPresent ? (
          <></>
        ) : (
          <>
            <span className="dates__date__year" aria-hidden="true">
              {" "}
              {year}
            </span>
          </>
        )}
      </>
    );
  };

  const getMachineFormat = ({ isPresent, numericMonth, year }: DateParts) => {
    return isPresent ? "" : `${year}-${numericMonth}`;
  };

  const getAriaFormat = ({ isPresent, longMonth, year }: DateParts) => {
    return (
      <span className="visually-hidden">
        {isPresent ? "Present" : `${longMonth} ${year}`}
      </span>
    );
  };

  const startDateDisplay = getDisplayFormat(startDateParts);
  const endDateDisplay = getDisplayFormat(endDateParts);

  const startDateMachine = getMachineFormat(startDateParts);
  const endDateMachine = getMachineFormat(endDateParts);

  const startDateAria = getAriaFormat(startDateParts);
  const endDateAria = getAriaFormat(endDateParts);

  return (
    <p className="dates">
      <span className="visually-hidden">Started in</span>
      <time
        className="dates__date"
        dateTime={startDateMachine}
        itemProp="startDate"
      >
        {startDateDisplay}
        {startDateAria}
      </time>
      <span aria-hidden="true" className="dates__through">
        {" "}
        &ndash;{" "}
      </span>
      {isPresent ? (
        <>
          <span className="visually-hidden"> and currently working here</span>
          <span className="dates__date" aria-hidden="true" itemProp="endDate">
            {endDateDisplay}
          </span>
        </>
      ) : (
        <>
          <span className="visually-hidden"> and ended in </span>
          <time
            className="dates__date"
            dateTime={endDateMachine}
            itemProp="endDate"
          >
            {endDateDisplay}
            {endDateAria}
          </time>
        </>
      )}
    </p>
  );
}
