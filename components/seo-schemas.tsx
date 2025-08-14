interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  linkedin?: string;
  github?: string;
  university: string;
  skills: string[];
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  email,
  linkedin,
  github,
  university,
  skills
}: PersonSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": image,
    "url": url,
    "sameAs": [
      linkedin,
      github,
    ].filter(Boolean),
    "email": email,
    "alumniOf": {
      "@type": "University",
      "name": university,
      "url": "https://uom.lk/"
    },
    "knowsAbout": skills,
    "workLocation": {
      "@type": "Place",
      "name": "Sri Lanka"
    },
    "nationality": {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface WebsiteSchemaProps {
  name: string;
  description: string;
  url: string;
  author: string;
}

export function WebsiteSchema({ name, description, url, author }: WebsiteSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": author
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person", 
      "name": author
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface PortfolioSchemaProps {
  name: string;
  description: string;
  url: string;
  author: string;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    url?: string;
  }>;
}

export function PortfolioSchema({ name, description, url, author, skills, projects }: PortfolioSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": name,
    "description": description,
    "url": url,
    "author": {
      "@type": "Person",
      "name": author,
      "knowsAbout": skills
    },
    "about": skills.map(skill => ({
      "@type": "Thing",
      "name": skill
    })),
    "hasPart": projects.map(project => ({
      "@type": "SoftwareApplication",
      "name": project.name,
      "description": project.description,
      "applicationCategory": "Web Application",
      "programmingLanguage": project.technologies,
      "url": project.url,
      "author": {
        "@type": "Person", 
        "name": author
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
