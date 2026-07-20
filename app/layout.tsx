import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteDescription =
  "Software Engineer at The Home Depot, passionate about building software and tinkering with AI tools.";

export const metadata: Metadata = {
  title: "Zain Bharde",
  description: siteDescription,
  metadataBase: new URL("https://damilareoo.xyz"),
  icons: {
    icon: "/images/favicon.jpeg",
    shortcut: "/images/favicon.jpeg",
    apple: "/images/favicon.jpeg",
  },
  openGraph: {
    title: "Zain Bharde – Software Engineer",
    description: siteDescription,
    url: "https://damilareoo.xyz",
    siteName: "Zain Bharde",
    images: [
      {
        url: "/images/000.png",
        width: 1200,
        height: 630,
        alt: "Zain Bharde - Software Engineer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Bharde – Software Engineer",
    description: siteDescription,
    images: ["/images/000.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/favicon.jpeg" sizes="any" />

        <meta
          property="og:image"
          content="https://damilareoo.xyz/images/000.png"
        />
        <meta
          property="og:image:url"
          content="https://damilareoo.xyz/images/000.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://damilareoo.xyz/images/000.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Zain Bharde - Software Engineer"
        />
        <meta property="og:image:type" content="image/png" />

        <meta
          name="twitter:image"
          content="https://damilareoo.xyz/images/000.png"
        />
        <meta
          name="twitter:image:alt"
          content="Zain Bharde - Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://damilareoo.xyz" />
        <meta
          property="og:title"
          content="Zain Bharde – Software Engineer"
        />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content="Zain Bharde" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Zain Bharde" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
