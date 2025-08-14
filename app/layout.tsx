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
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  openGraph: {
    title: "AI Resume Scorer – Get Instant Feedback",
    description:
      "Upload your resume, get a score, and actionable AI feedback instantly.",
    url: "https://yourdomain.com",
    siteName: "AI Resume Scorer",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Resume Scorer Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Scorer – Instant Resume Feedback",
    description:
      "Improve your resume with AI scoring and actionable tips in seconds.",
    images: ["https://yourdomain.com/og-image.png"],
    creator: "@yourtwitter",
  },
  metadataBase: new URL("https://yourdomain.com"),
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
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "AI Resume Scorer",
              url: "https://yourdomain.com",
              description:
                "Upload your resume and get instant AI-powered feedback and scores.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
