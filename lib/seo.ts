/**
 * SEO utilities for the portfolio website
 */

export const seoConfig = {
  siteName: "Devinda Dilshan Portfolio",
  siteUrl: "https://devinda-dilshan.dev", 
  author: "Devinda Dilshan",
  defaultTitle: "Devinda Dilshan - Software Engineer & Computer Science Student",
  defaultDescription: "Computer Science & Engineering undergraduate at University of Moratuwa. Skilled in Full-Stack Development, Machine Learning, and modern web technologies.",
  social: {
    linkedin: "https://linkedin.com/in/devinda-dilshan", 
    github: "https://github.com/devinda0", 
    email: "devindadilshan0@gmail.com" 
  }
};

export const skills = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Machine Learning",
  "Full-Stack Development",
  "Software Engineering",
  "Data Structures",
  "Algorithms",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
  "TensorFlow",
  "AWS",
  "Linux"
];

export const generatePageTitle = (title?: string): string => {
  return title ? `${title} | ${seoConfig.author}` : seoConfig.defaultTitle;
};

export const generatePageDescription = (description?: string): string => {
  return description || seoConfig.defaultDescription;
};

export const generateOpenGraphImage = (title?: string): string => {
  // You can create dynamic OG images or use a default one
  return `${seoConfig.siteUrl}/my-full.jpeg`;
};

/**
 * Generate structured data for breadcrumbs
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
