import data from "./data";

const jsonLd: Record<string, unknown> = {
  "@context": {
    "@vocab": "http://schema.org/",
  },
  "@type": "Person",
};

jsonLd.name = data.name;

jsonLd.description = data.description;

jsonLd.url = "https://michaelpuckett.engineer";

jsonLd.sameAs = data.links.map((link) => link.href);

jsonLd.email = data.email;

jsonLd.telephone = "615-209-1380";

jsonLd.image = {
  "@type": "ImageObject",
  contentUrl: "https://michaelpuckett.engineer/michael_puckett_avatar.png",
  encodingFormat: "image/png",
};

jsonLd.jobTitle = data.jobTitle;

jsonLd.knowsAbout = data.skills.map((topic) => topic.heading);

jsonLd.memberOf = data.experience.map((experience) => ({
  "@type": "Organization",
  name: experience.heading,
  sameAs: experience.url,
  member: {
    "@type": "https://schema.org/OrganizationRole",
    "https://schema.org/roleName": experience.detail,
    "https://schema.org/startDate": {
      "@type": "http://www.w3.org/2001/XMLSchema#gYearMonth",
      "@value": experience.startDate,
    },
    "https://schema.org/endDate": {
      "@type": "http://www.w3.org/2001/XMLSchema#gYearMonth",
      "@value": experience.endDate,
    },
  },
}));

jsonLd.alumniOf = data.education.map((education) => ({
  "@type": "CollegeOrUniversity",
  name: education.heading,
  sameAs: education.url,
}));

jsonLd.potentialAction = {
  "@type": "ReadAction",
  object: {
    "@type": "DigitalDocument",
    name: "Résumé",
    url: "https://michaelpuckett.engineer/michael_puckett_resume.pdf",
  },
};

export default jsonLd;
