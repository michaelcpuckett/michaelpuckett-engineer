import React from "react";

export default {
  name: "Michael Puckett",
  title: "UX Engineer",
  description:
    "Creative technologist with extensive experience building for the web platform. Focused on crafting accessible, user-friendly digital products and tools.",
  skills: [
    {
      id: "js-ts",
      heading: (
        <>
          JavaScript/
          <wbr />
          TypeScript
        </>
      ),
      contentHtml: (
        <>
          <p>
            I have an advanced understanding of ES/JavaScript, along with
            TypeScript.
          </p>
          <p>
            I am highly efficient working with React, Lit, Vue, Svelte, and
            similar reactive MVC frameworks. I also have a solid understanding
            of the DOM and other native web APIs.
          </p>
        </>
      ),
    },
    {
      id: "a11y",
      heading: "Accessibility",
      contentHtml: (
        <>
          <p>
            I am a strong advocate for accessibility and have a deep
            understanding of the Web Content Accessibility Guidelines (WCAG). I
            have experience working with screen readers, voice recognition, and
            other assistive technologies.
          </p>
          <p>
            I have worked on websites subject to legal action on the grounds of
            inaccessibility. The code I wrote needed to pass internal standards
            and external audits.
          </p>
          <p>
            I believe that any set of accessibility guidelines stems from a
            universal right to information.
          </p>
        </>
      ),
    },
    {
      id: "design-systems",
      heading: "Design System Engineering",
      contentHtml: (
        <>
          <p>
            I have experience building and maintaining design systems for large
            organizations. I have worked with designers to create reusable
            components that are accessible and easy to use.
          </p>
          <p>
            My educational background in graphic design allows me to collaborate
            closely with designers and translate their intent into code.
          </p>
        </>
      ),
    },
  ],
  experience: [
    {
      id: "google",
      heading: "Google",
      detail: "UX Engineer",
      startDate: "May 2021",
      endDate: "December 2023",
      listItemsHtml: (
        <>
          <li>
            Developed production web interfaces with clean, efficient, and
            maintainable TypeScript code, optimizing for performance and
            scalability.
          </li>
          <li>
            Subject Matter Expert (SME) for accessibility compliance,
            championing inclusive design principles and ensuring that UIs met or
            exceeded WCAG standards.
          </li>
          <li>
            Played a pivotal role in the successful launch of the
            belonging.google domain.
          </li>
          <li>
            Architected coding scaffolds to simplify the creation of new
            projects.
          </li>
        </>
      ),
    },
    {
      id: "liveschool",
      heading: "LiveSchool",
      detail: "UI Architect",
      startDate: "August 2018",
      endDate: "May 2021",
      listItemsHtml: (
        <>
          <li>
            Collaborated closely with designers and stakeholders to craft
            architectural artifacts, including detailed documentation, diagrams,
            and timelines, ensuring alignment with project goals and
            requirements.
          </li>
          <li>
            Leveraged Vue 2 to build features for both web applications and
            web-based mobile apps, ensuring seamless user experiences across
            platforms.
          </li>
          <li>
            Debugged existing performance issues and implemented
            performance-friendly components, including an infinite scroll view
            that recycled DOM elements.
          </li>
          <li>
            Integrated Firebase for authentication and real-time changes that
            reflected immediately across open tabs and devices.
          </li>
        </>
      ),
    },
    {
      id: "humana",
      heading: "Humana",
      detail: "Web Developer",
      startDate: "December 2016",
      endDate: "July 2018",
      listItemsHtml: (
        <>
          <li>
            Built a library of accessible Vue 2 components for one of the
            nation’s largest health insurance companies.
          </li>
          <li>
            Responsible for evaluating React and other frameworks, leading to
            the decision to go with Vue 2.
          </li>
        </>
      ),
    },
    {
      id: "apple",
      heading: "Apple",
      detail: "UI Engineer",
      startDate: "October 2013",
      endDate: "June 2016",
      listItemsHtml: (
        <>
          <li>
            Built interfaces to support product launches and transactions on
            Apple.com.
          </li>
          <li>
            Led a successful project to harmonize competing corporate design
            systems and implemented a unified SCSS library.
          </li>
          <li>
            Prepared coding guidelines for use by large engineering teams.
          </li>
          <li>
            Directed offshore teams to implement core tools and libraries.
          </li>
        </>
      ),
    },
    {
      id: "cnn",
      heading: "CNN",
      detail: "Web Developer",
      startDate: "April 2013",
      endDate: "October 2013",
      listItemsHtml: (
        <>
          <li>
            Helped to re-platform CNN.com from Java to Node.js, improving
            feature velocity and resulting in more ergonomic and maintainable
            code.
          </li>
          <li>
            Created a responsive SCSS library for many possible page layouts.
          </li>
        </>
      ),
    },
    {
      id: "iostudio",
      heading: "iostudio",
      detail: "Web Developer",
      startDate: "January 2012",
      endDate: "March 2013",
      listItemsHtml: (
        <>
          <li>
            Built client marketing websites and web apps for clients in an
            advertising agency environment.
          </li>
          <li>
            Implemented the first responsive redesign of NationalGuard.com.
          </li>
        </>
      ),
    },
    {
      id: "fruit",
      heading: "Fruit of the Loom",
      detail: "Web Developer",
      startDate: "October 2011",
      endDate: "January 2012",
      listItemsHtml: (
        <>
          <li>Designed and developed a relaunch of Jerzees.com.</li>
          <li>
            Helped maintain all Fruit of the Loom websites, including Fruit.com.
          </li>
        </>
      ),
    },
    {
      id: "communication-components",
      heading: "Communication Components",
      detail: "Web Developer",
      startDate: "March 2010",
      endDate: "October 2011",
      listItemsHtml: (
        <>
          <li>
            Helped build a web app that generated print marketing materials for
            small businesses, using JavaScript and XML technologies.
          </li>
        </>
      ),
    },
  ],
  education: [
    {
      id: "wku",
      heading: "Western Kentucky University",
      detail: "Bachelor of Arts, Interactive Advertising & Graphic Design",
      startDate: "2005",
      endDate: "2009",
      listItemsHtml: (
        <>
          <li>
            Interned as a web developer at Imagewest, WKU's design studio.
          </li>
          <li>
            Interned as a web developer for the municipal website for the City
            of Bowling Green.
          </li>
          <li>
            Interned as a print designer at the College Heights Herald, WKU's
            newspaper.
          </li>
          <li>
            Coursework included Digital Illustration, Motion Graphics,
            Typography, Creative Strategy, Journalism, Copywriting, and PR.
          </li>
          <li>Graduated Summa Cum Laude, 3.9 GPA.</li>
        </>
      ),
    },
  ],
};
