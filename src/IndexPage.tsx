import React from "react";
import data from "./data";
import styles from "./styles";

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
        <style dangerouslySetInnerHTML={{ __html: styles }} />
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
      <ul role="list" className="no-bullet">
        {data.skills.map((skill) => (
          <li key={skill.headingLabel} className="card">
            <Heading label={skill.headingLabel}>{skill.headingHtml}</Heading>
            {skill.contentHtml}
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
      <ol role="list" className="no-bullet">
        {data.experience.map((experience) => (
          <li key={experience.headingLabel} className="card">
            <Heading label={experience.headingLabel}>
              {experience.headingHtml}
            </Heading>
            <Dates
              startDate={experience.startDate}
              endDate={experience.endDate}
            />
            {experience.contentHtml}
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
      <ol role="list" className="no-bullet">
        {data.education.map((education) => (
          <li key={education.headingLabel} className="card">
            <Heading label={education.headingLabel}>
              {education.headingHtml}
            </Heading>
            <Dates
              startDate={education.startDate}
              endDate={education.endDate}
            />
            {education.contentHtml}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Heading({ label, children }) {
  return (
    <h3 aria-label={label}>
      <span aria-hidden="true">{children}</span>
    </h3>
  );
}

function Dates({ startDate, endDate }) {
  return (
    <div className="dates">
      <time dateTime={startDate}>{startDate}</time>
      <span aria-hidden="true"> — </span>
      <span className="visually-hidden">through</span>
      <time dateTime={endDate}>{endDate}</time>
    </div>
  );
}
