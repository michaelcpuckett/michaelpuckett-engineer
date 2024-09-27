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

              window.customElements.define("section-marker", AriaHiddenHtmlElement);
              window.customElements.define("list-marker", AriaHiddenHtmlElement);
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
      <ul role="list" aria-labelledby="section-header-skills">
        {data.skills.map((item) => {
          const id = slugify(item.heading);

          return (
            <li key={id} className="card" aria-labelledby={id}>
              <h3 id={id}>{item.heading}</h3>
              {item.contentHtml}
            </li>
          );
        })}
      </ul>
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
              <ul>{item.listItemsHtml}</ul>
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
              <ul>{item.listItemsHtml}</ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Dates({ startDate, endDate }) {
  return (
    <div className="dates">
      <time dateTime={startDate}>{startDate}</time>
      <span className="dates__through" aria-hidden="true" hidden>
        {" - "}
      </span>
      <span className="visually-hidden"> through </span>
      <time dateTime={endDate}>{endDate}</time>
    </div>
  );
}
