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
  metadataBase: new URL("https://zainbharde.com"),
  openGraph: {
    title: "Zain Bharde",
    description: siteDescription,
    url: "https://zainbharde.com",
    siteName: "Zain Bharde",
    images: [
      {
        url: "/images/Zain_PFP.jpg",
        alt: "Zain Bharde - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Bharde",
    description: siteDescription,
    images: ["/images/Zain_PFP.jpg"],
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
