import React from "react";
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
    <nav className="nav">
      <div className="nav-region">
        <a href="mailto:michael@puckett.contact">Email</a>
        <a href="https://www.linkedin.com/in/michaelcpuckett" target="_blank">
          LinkedIn
        </a>
        <a href="https://www.github.com/michaelcpuckett" target="_blank">
          Github
        </a>
      </div>
      <div className="nav-region">
        <a href="michael_puckett_resume.pdf">Résumé</a>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1 className="h1">
        <span className="h1-name">{data.name}</span>
        <span className="h1-title">{data.title}</span>
      </h1>
      <p>{data.description}</p>
    </header>
  );
}

function SkillsSection() {
  return (
    <section aria-labelledby="section-header-skills">
      <h2 id="section-header-skills">Skills</h2>
      <ul
        role="list"
        className="no-bullet"
        aria-labelledby="section-header-skills"
      >
        {data.skills.map((item) => (
          <li key={item.id} className="card">
            <h3 id={item.id}>{item.heading}</h3>
            {item.contentHtml}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section aria-labelledby="section-header-experience">
      <h2 id="section-header-experience">Experience</h2>
      <ol
        role="list"
        className="no-bullet"
        aria-labelledby="section-header-experience"
      >
        {data.experience.map((item) => (
          <li key={item.id} className="card">
            <div className="card__header">
              <div className="card__heading">
                <h3 id={item.id}>{item.heading}</h3>
                <p className="detail">{item.detail}</p>
              </div>
              <Dates startDate={item.startDate} endDate={item.endDate} />
            </div>
            <ul aria-labelledby={item.id}>{item.listItemsHtml}</ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function EducationSection() {
  return (
    <section aria-labelledby="section-header-education">
      <h2 id="section-header-education">Education</h2>
      <ol
        role="list"
        className="no-bullet"
        aria-labelledby="section-header-education"
      >
        {data.education.map((item) => (
          <li key={item.id} className="card">
            <div className="card__header">
              <div className="card__heading">
                <h3 id={item.id}>{item.heading}</h3>
                <p className="detail">{item.detail}</p>
              </div>
              <Dates startDate={item.startDate} endDate={item.endDate} />
            </div>
            <ul aria-labelledby={item.id}>{item.listItemsHtml}</ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Dates({ startDate, endDate }) {
  return (
    <div className="dates">
      <time dateTime={startDate}>{startDate}</time>
      <span className="pre" aria-hidden="true">
        {" "}
        -{" "}
      </span>
      <span className="visually-hidden">through</span>
      <time dateTime={endDate}>{endDate}</time>
    </div>
  );
}
