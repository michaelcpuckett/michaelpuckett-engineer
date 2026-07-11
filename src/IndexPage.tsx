import React from "react";
import slugify from "react-slugify";
import data from "./data";
import jsonLd from "./getStructuredData";

export function IndexPage() {
  return (
    <>
      <Head />
      <Body>
        <Nav />
        <Header />
        <Main>
          <ExperienceSection />
          <EducationSection />
        </Main>
        <StructuredData />
      </Body>
    </>
  );
}

function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>
        {data.name + " - " + data.jobTitle + " | " + data.additionalTitle}
      </title>
      <meta name="description" content={data.description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <link
        rel="preload"
        href="hanken.ttf"
        as="font"
        type="font/ttf"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="hanken--bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="hanken--light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin=""
      />
      <link href="favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="favicon.ico" rel="icon" type="image/x-icon" sizes="96x96" />
      <link href="icon.png" rel="icon" type="image/png" sizes="144x144" />
    </>
  );
}

function Body({ children }: React.PropsWithChildren) {
  return (
    <body>
      <div className="site-background" aria-hidden="true">
        <span className="site-background__blob site-background__blob--one"></span>
        <span className="site-background__blob site-background__blob--two"></span>
        <span className="site-background__blob site-background__blob--three"></span>
      </div>
      <div className="container">{children}</div>
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
    <header role="banner">
      <h1>
        <span className="h1__name">{data.name}</span>
      </h1>
      <p>
        I'm a <strong>creative technologist</strong> with extensive experience
        building user-friendly digital products and tools.
      </p>
      <img
        hidden
        alt="Headshot photo of Michael Puckett"
        src="https://michaelpuckett.engineer/michael_puckett_avatar.png"
      />
    </header>
  );
}

function ExperienceSection() {
  return (
    <section aria-labelledby="section-header-experience">
      <h2 id="section-header-experience">Experience</h2>
      <ul className="card-list" role="list">
        {data.experience.map((item) => {
          const id = slugify(item.heading);

          return (
            <li className="card-item" key={id} aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id} aria-owns={id + " " + id + "-detail"}>
                    {item.heading}
                  </h3>
                  <p className="card__detail" id={id + "-detail"}>
                    {item.detail}
                  </p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              {item.contentHtml}
              <h4 className="visually-hidden">Technologies Used</h4>
              <ul className="tags" role="list">
                {item.tags.map((tag) => (
                  <li key={tag} className="tag" data-tag={tag.toLowerCase()}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function EducationSection() {
  return (
    <section aria-labelledby="section-header-education">
      <h2 id="section-header-education">Education</h2>
      <ul className="card-list" role="list">
        {data.education.map((item) => {
          const id = slugify(item.heading);

          return (
            <li className="card-item" key={id} aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id} aria-owns={id + " " + id + "-detail"}>
                    {item.heading}
                  </h3>
                  <p className="card__detail" id={id + "-detail"}>
                    {item.detail}
                  </p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              {item.contentHtml}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Dates({ startDate, endDate }: { startDate: string; endDate: string }) {
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
        <span className="dates__date__month">
          {isPresent ? "Present" : shortMonth}
        </span>
        {isPresent ? null : <span className="dates__date__year"> {year}</span>}
      </>
    );
  };

  const getMachineFormat = ({ isPresent, numericMonth, year }: DateParts) => {
    return isPresent ? "" : `${year}-${numericMonth}`;
  };

  const startDateDisplay = getDisplayFormat(startDateParts);
  const endDateDisplay = getDisplayFormat(endDateParts);

  const startDateMachine = getMachineFormat(startDateParts);
  const endDateMachine = getMachineFormat(endDateParts);

  return (
    <p className="dates">
      <time className="dates__date" dateTime={startDateMachine}>
        {startDateDisplay}
      </time>
      <span className="dates__through"> &ndash; </span>
      {isPresent ? (
        <span className="dates__date">{endDateDisplay}</span>
      ) : (
        <time className="dates__date" dateTime={endDateMachine}>
          {endDateDisplay}
        </time>
      )}
    </p>
  );
}

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
