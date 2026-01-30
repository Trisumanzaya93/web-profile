import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tri Sumanzaya — Software Engineer Developer",
  description:
    "Software Engineer with 3+ years of experience building digital banking solutions.",

  openGraph: {
    title: "Tri Sumanzaya — Software Engineer",
    description:
      "Building and scaling digital banking solutions with a focus on reliability and user experience.",
    url: "https://sumanzaya.com",
    siteName: "Tri Sumanzaya",
    images: [
      {
        url: "https://sumanzaya.com/og.png",
        width: 1200,
        height: 630,
        alt: "Tri Sumanzaya — Software Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tri Sumanzaya — Software Engineer",
    description:
      "Software Engineer focused on digital banking solutions and scalable products.",
    images: ["https://sumanzaya.com/og.png"],
  },
  alternates: {
    canonical: "https://sumanzaya.com",
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
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tri Sumanzaya",
              url: "https://sumanzaya.com",
              jobTitle: "Software Engineer Developer",
              knowsAbout: [
                "Front-End Development",
                "Mobile Development",
                "Back-End Development",
              ],
              sameAs: [
                "https://www.linkedin.com/in/trisumanzaya",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black h-screen w-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
