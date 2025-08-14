/**
 * SEO utilities for the portfolio website
 */

export const seoConfig = {
  siteName: "Devinda Dilshan Portfolio",
  siteUrl: "https://your-portfolio-domain.com", // Replace with your actual domain
  author: "Devinda Dilshan",
  defaultTitle: "Devinda Dilshan - Software Engineer & Computer Science Student",
  defaultDescription: "Computer Science & Engineering undergraduate at University of Moratuwa. Skilled in Full-Stack Development, Machine Learning, and modern web technologies.",
  social: {
    twitter: "@your_twitter_handle", // Replace with your Twitter handle
    linkedin: "https://linkedin.com/in/your-profile", // Replace with your LinkedIn
    github: "https://github.com/your-username", // Replace with your GitHub
    email: "your.email@example.com" // Replace with your email
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
