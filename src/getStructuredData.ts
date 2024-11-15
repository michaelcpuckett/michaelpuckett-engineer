import data from "./data";

const jsonLd: any = {
  "@context": {
    "@vocab": "http://schema.org/",
  },
  "@type": "Person",
};

jsonLd.name = {
  "@language": "en",
  "@value": data.name,
};

jsonLd.description = {
  "@language": "en",
  "@value": data.description,
};

jsonLd.url = {
  "@language": "en",
  "@value": "https://michaelpuckett.engineer",
};

jsonLd.sameAs = data.links.map((link) => link.href);

jsonLd.email = {
  "@language": "en",
  "@value": data.email,
};

jsonLd.telephone = {
  "@language": "en",
  "@value": "615-209-1380",
};

jsonLd.image = {
  "@type": "ImageObject",
  contentUrl: "https://michaelpuckett.engineer/michael_puckett_avatar.png",
  encodingFormat: "image/png",
};

jsonLd.jobTitle = {
  "@language": "en",
  "@value": data.jobTitle,
};

jsonLd.knowsAbout = data.skills.map((topic) => ({
  "@language": "en",
  "@value": topic.heading,
}));

jsonLd.memberOf = data.experience.map((experience) => ({
  "@type": "Organization",
  name: {
    "@language": "en",
    "@value": experience.heading,
  },
  sameAs: {
    "@language": "en",
    "@value": experience.url,
  },
  member: {
    "@type": "https://schema.org/OrganizationRole",
    "https://schema.org/roleName": {
      "@language": "en",
      "@value": experience.detail,
    },
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
  name: {
    "@language": "en",
    "@value": education.heading,
  },
  sameAs: {
    "@language": "en",
    "@value": education.url,
  },
}));

jsonLd.potentialAction = {
  "@type": "ReadAction",
  object: {
    "@type": "DigitalDocument",
    name: {
      "@language": "en",
      "@value": "Résumé",
    },
    url: {
      "@language": "en",
      "@value": "https://michaelpuckett.engineer/michael_puckett_resume.pdf",
    },
  },
};

export default jsonLd;
