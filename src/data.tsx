export default {
  name: "Michael Puckett",
  jobTitle: "Software Engineer",
  additionalTitle: "x-Google, x-Apple",
  description:
    "Creative technologist with extensive experience building accessible, user-friendly digital products and tools.",
  email: "michael@puckett.contact",
  links: [
    {
      href: "https://linkedin.com/in/michaelcpuckett",
      text: "LinkedIn",
    },
    {
      href: "https://github.com/michaelcpuckett",
      text: "Github",
    },
  ],
  skills: [
    {
      heading: "TypeScript",
      contentHtml: (
        <>
          <p>
            I leverage TypeScript to build robust, type-safe, and maintainable
            codebases. Its static typing, generics, and advanced type system
            allow me to architect applications that scale predictably and reduce
            runtime errors.
          </p>
          <p>
            I'm highly experienced with modern JavaScript (ESNext) and how
            TypeScript interacts with the underlying web platform, including the
            DOM and native APIs.
          </p>
        </>
      ),
    },
    {
      heading: "React",
      contentHtml: (
        <>
          <p>
            I specialize in building scalable, performant user interfaces with
            React. I follow best practices around component design, hooks, state
            management, and rendering optimization.
          </p>
          <p>
            My deep understanding of React’s architecture enables me to create
            clean, reusable, and maintainable UI components for complex
            applications.
          </p>
        </>
      ),
    },
    {
      heading: "Next.js",
      contentHtml: (
        <>
          <p>
            I build full-stack, production-ready applications using Next.js,
            taking advantage of features like App Router, server components, API
            routes, and first-class performance optimizations.
          </p>
          <p>
            With expertise across SSR, SSG, ISR, routing, caching, and
            deployment patterns, I craft highly performant and SEO-optimized web
            experiences.
          </p>
        </>
      ),
    },
    {
      heading: "AI Integration & Applied Machine Learning",
      contentHtml: (
        <>
          <p>
            I have delivered AI-powered features such as intelligent
            suggestions, personalized recommendations, and dynamic content
            generation. My work includes applying large language models (LLMs),
            vector embeddings, and recommendation pipelines to create adaptive,
            user-centered experiences.
          </p>
        </>
      ),
    },
    {
      heading: "Design System Engineering",
      contentHtml: (
        <>
          <p>
            I have built and maintained design systems for large organizations,
            collaborating closely with designers to deliver reusable,
            accessible, and scalable component libraries.
          </p>
          <p>
            My background in graphic design enables me to bridge design intent
            with engineering execution, producing clean, maintainable code.
          </p>
        </>
      ),
    },
    {
      heading: "Web Accessibility",
      contentHtml: (
        <>
          <p>
            I have a strong command of the Web Content Accessibility Guidelines
            (WCAG) and extensive hands-on experience with assistive technologies
            such as screen readers and voice recognition. I have contributed to
            projects requiring strict compliance, passing both internal
            standards and external audits, including cases with legal oversight.
          </p>
        </>
      ),
    },
  ],
  experience: [
    {
      heading: "Self-Employed (S-Corp)",
      detail: "Freelance Software Engineer",
      startDate: "January 2024",
      endDate: "Present",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Engineering scalable, high-performance applications for startups,
            including native mobile apps with React Native and web apps using
            React, Next.js, and TypeScript.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Integrating AI-driven capabilities including intelligent
            suggestions, personalized recommendations, and dynamic content
            generation, leveraging embeddings and large language models.
          </li>
        </ul>
      ),
      tags: ["React", "React Native", "Next.js", "TypeScript", "AI/ML"],
    },
    /*{
      heading: "Code Louisville",
      detail: "Volunteer Mentor",
      url: "https://code-you.org",
      startDate: "October 2023",
      endDate: "August 2025",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Teaching adult students the basics of client-side web development,
            including HTML, CSS, and JavaScript.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Creating presentations, assignments, and quizzes to help educate
            students.
          </li>
        </ul>
      ),
      tags: ["Mentorship"],
    },*/
    {
      heading: "Google",
      detail: "UX Engineer",
      url: "https://google.com",
      startDate: "May 2021",
      endDate: "December 2023",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Developed production web interfaces with clean, efficient, and
            maintainable TypeScript code, optimizing for performance and
            scalability.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Subject Matter Expert (SME) for accessibility compliance,
            championing inclusive design principles and ensuring that UIs met or
            exceeded WCAG standards.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Played a pivotal role in multiple successful launches, including the
            belonging.google domain, the pride.google domain, and the annual
            Year in Search experience.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Architected coding scaffolds to simplify the creation of new
            projects.
          </li>
        </ul>
      ),
      tags: ["TypeScript"],
    },
    {
      heading: "LiveSchool",
      url: "https://whyliveschool.com",
      detail: "UI Architect",
      startDate: "August 2018",
      endDate: "May 2021",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Leveraged Vue 2 to build features for LiveSchool's suite of web
            applications and web-based mobile apps, ensuring a seamless user
            experience across platforms.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Utilized Firebase for authentication and real-time changes that
            reflected immediately across open tabs and devices.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Collaborated closely with designers and stakeholders to craft
            architectural artifacts, including detailed documentation, diagrams,
            and timelines, ensuring alignment with project goals and
            requirements.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Debugged existing performance issues and implemented
            performance-friendly components, including an infinite scroll view
            that recycled DOM elements.
          </li>
        </ul>
      ),
      tags: ["JavaScript", "Vue"],
    },
    {
      heading: "Humana",
      url: "https://humana.com",
      detail: "Web Developer",
      startDate: "December 2016",
      endDate: "July 2018",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Built a library of accessible Vue 2 components for one of the
            nation’s largest health insurance companies.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Responsible for evaluating React and other frameworks, leading to
            the decision to go with Vue 2.
          </li>
        </ul>
      ),
      tags: ["JavaScript", "Vue"],
    },
    {
      heading: "Apple",
      url: "https://apple.com",
      detail: "UI Engineer",
      startDate: "October 2013",
      endDate: "June 2016",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Built interfaces to support product launches and transactions on
            Apple.com.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Led a successful project to harmonize competing corporate design
            systems and implemented a unified styling library.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Prepared coding guidelines for use by large engineering teams.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Directed offshore teams to implement tools and libraries that
            improved engineer efficiency.
          </li>
        </ul>
      ),
      tags: ["JavaScript"],
    },
    {
      heading: "CNN",
      url: "https://cnn.com",
      detail: "Web Developer",
      startDate: "April 2013",
      endDate: "October 2013",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Helped to re-platform CNN.com from Java to Node.js, improving
            feature velocity and resulting in more ergonomic and maintainable
            code.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Created a responsive styling library for many possible page layouts.
          </li>
        </ul>
      ),
      tags: ["JavaScript", "Node.js"],
    },
    {
      heading: "iostudio",
      url: "https://iostudio.com",
      detail: "Web Developer",
      startDate: "January 2012",
      endDate: "March 2013",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Built client marketing websites and web apps for clients in an
            advertising agency environment.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Implemented the first responsive redesign of NationalGuard.com.
          </li>
        </ul>
      ),
      tags: ["JavaScript"],
    },
    {
      heading: "Fruit of the Loom",
      url: "https://fruit.com",
      detail: "Web Developer",
      startDate: "October 2011",
      endDate: "January 2012",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>Designed and developed
            a relaunch of Jerzees.com.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Helped maintain all Fruit of the Loom websites, including Fruit.com.
          </li>
        </ul>
      ),
      tags: ["JavaScript"],
    },
    {
      heading: "Communication Components",
      url: "https://2-com.net",
      detail: "Designer/Developer",
      startDate: "March 2010",
      endDate: "October 2011",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Helped build a web app that generated print marketing materials for
            small businesses, using JavaScript and XML technologies.
          </li>
        </ul>
      ),
      tags: ["JavaScript"],
    },
  ],
  education: [
    {
      heading: "Western Kentucky University",
      url: "https://wku.edu",
      detail: <>B.A., Interactive Advertising & Graphic Design</>,
      startDate: "August 2005",
      endDate: "December 2009",
      contentHtml: (
        <ul role="list">
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Coursework included Digital Illustration, Motion Graphics,
            Typography, Creative Strategy, Journalism, Copywriting, and PR.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Interned at Imagewest, WKU's design studio, as a web developer.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Interned for the municipal website for the City of Bowling Green, as
            a web developer.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>
            Interned at the College Heights Herald, WKU's newspaper, as a print
            designer.
          </li>
          <li>
            <list-marker aria-hidden="true"></list-marker>Graduated Summa Cum
            Laude (3.9 GPA).
          </li>
        </ul>
      ),
      tags: ["JavaScript"],
    },
  ],
};
