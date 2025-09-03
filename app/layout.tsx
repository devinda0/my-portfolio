import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PersonSchema, WebsiteSchema } from "@/components/seo-schemas"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devinda-dilshan.dev'), // Replace with your actual domain
  title: {
    default: "Devinda Dilshan - Computer Science & Engineering Student",
    template: "%s | Devinda Dilshan"
  },
  description: "Computer Science & Engineering undergraduate at University of Moratuwa. Experienced in Full-Stack Development, Machine Learning, React, Node.js, Python, and modern web technologies. Available for internships and projects.",
  keywords: [
    "Devinda Dilshan",
    "Software Engineer",
    "Full-Stack Developer", 
    "Computer Science Student",
    "Machine Learning Engineer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "University of Moratuwa",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Software Engineering",
    "Algorithm Development",
    "Data Structures",
    "Portfolio",
    "Sri Lanka Developer"
  ],
  authors: [{ name: "Devinda Dilshan", url: "https://devinda-dilshan.dev" }],
  creator: "Devinda Dilshan",
  publisher: "Devinda Dilshan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devinda-dilshan.dev',
    title: 'Devinda Dilshan - Software Engineer & Computer Science Student',
    description: 'Computer Science & Engineering undergraduate at University of Moratuwa. Skilled in Full-Stack Development, Machine Learning, and modern web technologies.',
    siteName: 'Devinda Dilshan Portfolio',
    images: [
      {
        url: '/my-full.jpeg',
        width: 1200,
        height: 630,
        alt: 'Devinda Dilshan - Software Engineer',
        type: 'image/jpeg',
      },
      {
        url: '/my-circle.png',
        width: 400,
        height: 400,
        alt: 'Devinda Dilshan Profile Picture',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devinda Dilshan - Software Engineer & Computer Science Student',
    description: 'Computer Science & Engineering undergraduate at University of Moratuwa. Skilled in Full-Stack Development, Machine Learning, and modern web technologies.',
    images: ['/my-full.jpeg'],
    creator: '@devindadilshan', // Add your Twitter handle if you have one
    site: '@devindadilshan',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://devinda-dilshan.dev',
  },
  category: 'technology',
  other: {
    'google-site-verification': 'your-google-verification-code', // Duplicate for better compatibility
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <PersonSchema
          name="Devinda Dilshan"
          jobTitle="Software Engineer & Computer Science Student"
          description="Computer Science & Engineering undergraduate at University of Moratuwa. Skilled in Full-Stack Development, Machine Learning, and modern web technologies."
          image="https://devinda-dilshan.dev/my-circle.png"
          url="https://devinda-dilshan.dev"
          email="devindadilshan0@gmail.com"
          linkedin="https://linkedin.com/in/devinda-dilshan"
          github="https://github.com/devinda0"
          university="University of Moratuwa"
          skills={[
            "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
            "Python", "Machine Learning", "Full-Stack Development",
            "Software Engineering", "Data Structures", "Algorithms"
          ]}
        />
        <WebsiteSchema
          name="Devinda Dilshan - Portfolio"
          description="Professional portfolio showcasing software engineering projects and skills"
          url="https://devinda-dilshan.dev"
          author="Devinda Dilshan"
        />
        <link rel="canonical" href="https://devinda-dilshan.dev" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Devinda Dilshan" />
        <meta name="application-name" content="Devinda Dilshan Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans">
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
