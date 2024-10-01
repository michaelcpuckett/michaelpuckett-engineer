import slugify from "react-slugify";
import data from "./data";
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
        <link rel="manifest" href="manifest.json" />
        <style dangerouslySetInnerHTML={{ __html: getStyles() }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              class AriaHiddenHtmlElement extends HTMLElement {
                connectedCallback() {
                  this.ariaHidden = true;
                }
              }

              const listMarkerStyleSheet = new CSSStyleSheet();
              listMarkerStyleSheet.replaceSync(\`:host::before { content: "•"; }\`);

              class ListMarkerHtmlElement extends AriaHiddenHtmlElement {
                constructor() {
                  super();
                  this.attachShadow({ mode: "open" }).adoptedStyleSheets.push(listMarkerStyleSheet);
                }
              }

              window.customElements.define("list-marker", ListMarkerHtmlElement);

              class SectionMarkerHtmlElement extends AriaHiddenHtmlElement {}

              window.customElements.define("section-marker", SectionMarkerHtmlElement);

              class ListItemHtmlElement extends HTMLElement {
                connectedCallback() {
                  this.prepend(window.document.createElement('list-marker'));
                  this.role = "listitem";
                }
              }

              window.customElements.define("list-item", ListItemHtmlElement);

              class UnorderedListHtmlElement extends HTMLElement {
                connectedCallback() {
                  this.role = "list";
                }
              }

              window.customElements.define("unordered-list", UnorderedListHtmlElement);
            `,
          }}
        />
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
      <h2 id="section-header-skills">
        <a id="skills" href="#skills" title="Skills section">
          <section-marker />
        </a>
        Skills
      </h2>
      <unordered-list aria-labelledby="section-header-skills">
        {data.skills.map((item) => {
          const id = slugify(item.heading);

          return (
            <li key={id} className="card" aria-labelledby={id}>
              <h3 id={id}>{item.heading}</h3>
              {item.contentHtml}
            </li>
          );
        })}
      </unordered-list>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section aria-labelledby="section-header-experience">
      <h2 id="section-header-experience">
        <a id="experience" href="#experience" title="Experience section">
          <section-marker />
        </a>
        Experience
      </h2>
      <ol role="list" aria-labelledby="section-header-experience">
        {data.experience.map((item) => {
          const id = slugify(item.heading);

          return (
            <li key={id} className="card" aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id}>{item.heading}</h3>
                  <p className="card__detail">{item.detail}</p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              <unordered-list>{item.listItemsHtml}</unordered-list>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function EducationSection() {
  return (
    <section aria-labelledby="section-header-education">
      <h2 id="section-header-education">
        <a id="education" href="#education" title="Education section">
          <section-marker />
        </a>
        Education
      </h2>
      <ol role="list" aria-labelledby="section-header-education">
        {data.education.map((item) => {
          const id = slugify(item.heading);

          return (
            <li key={id} className="card" aria-labelledby={id}>
              <div className="card__header">
                <div className="card__heading">
                  <h3 id={id}>{item.heading}</h3>
                  <p className="card__detail">{item.detail}</p>
                </div>
                <Dates startDate={item.startDate} endDate={item.endDate} />
              </div>
              <unordered-list>{item.listItemsHtml}</unordered-list>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Dates({ startDate, endDate }) {
  const isPresent = endDate === "Present";

  const dateFormatter = Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  });

  const startDateParts = dateFormatter.formatToParts(new Date(startDate));
  const endDateParts = dateFormatter.formatToParts(
    isPresent ? new Date() : new Date(endDate)
  );

  const getDisplayFormat = (parts: Intl.DateTimeFormatPart[]) => {
    const month = parts.find((part) => part.type === "month");
    const year = parts.find((part) => part.type === "year");

    if (!month || !year) {
      return <></>;
    }

    return (
      <>
        <span className="dates__date__month">{month.value}</span>{" "}
        <span className="dates__date__year">{year.value}</span>
      </>
    );
  };

  const getMachineFormat = (parts: Intl.DateTimeFormatPart[]) => {
    const month = parts.find((part) => part.type === "month");
    const year = parts.find((part) => part.type === "year");

    if (!month || !year) {
      return "";
    }

    return `${year.value}-${month.value}`;
  };

  const startDateDisplay = getDisplayFormat(startDateParts);
  const endDateDisplay = isPresent ? (
    <span className="dates__date__month">Present</span>
  ) : (
    getDisplayFormat(endDateParts)
  );

  const startDateMachine = getMachineFormat(startDateParts);
  const endDateMachine = getMachineFormat(endDateParts);

  return (
    <div className="dates">
      <time className="dates__date" dateTime={startDateMachine}>
        {startDateDisplay}
      </time>
      <span className="dates__through" aria-hidden="true" hidden>
        <>&ndash;</>
      </span>
      <span className="visually-hidden">{" through "}</span>
      <time className="dates__date" dateTime={endDateMachine}>
        {endDateDisplay}
      </time>
    </div>
  );
}
