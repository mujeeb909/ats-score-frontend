// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Global SEO metadata
export const metadata: Metadata = {
  title: "AI Resume Scorer – Improve Your Resume with AI Feedback",
  description:
    "Upload your resume and get instant AI-powered feedback, scores, and tips to improve your chances of landing your dream job.",
  keywords: [
    "resume scorer",
    "AI resume feedback",
    "CV analyzer",
    "job application tips",
    "career improvement",
  ],
  authors: [{ name: "Your Name", url: "https://www.ats-score.com" }],
  openGraph: {
    title: "AI Resume Scorer – Get Instant Feedback",
    description:
      "Upload your resume, get a score, and actionable AI feedback instantly.",
    url: "https://www.ats-score.com",
    siteName: "AI Resume Scorer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Scorer – Instant Resume Feedback",
    description:
      "Improve your resume with AI scoring and actionable tips in seconds.",
    creator: "@yourtwitter",
  },
  metadataBase: new URL("https://www.ats-score.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Extra SEO tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.ats-score.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-adsense-account" content="ca-pub-7871478624158126"></meta>
        <link rel="alternate" href="https://www.ats-score.com" hrefLang="en" />
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
        <meta
          property="og:image"
          content="https://www.ats-score.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.ats-score.com/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "AI Resume Scorer",
              url: "https://www.ats-score.com",
              description:
                "Upload your resume and get instant AI-powered feedback and scores.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
            }),
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7871478624158126"
     crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
