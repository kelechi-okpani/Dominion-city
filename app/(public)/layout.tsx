import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dominion City Abuja | Raising Leaders, Transforming Society",
    template: "%s | Dominion City Abuja"
  },
  description: "Experience the Gudu Atmosphere. Join us at Dominion City Abuja (Gudu HQ) for life-transforming worship, leadership development, and authentic community.",
  keywords: ["Church in Abuja", "Dominion City Gudu", "David Ogbueli", "Christian Leadership", "Worship Abuja", "Gudu Atmosphere"],
  openGraph: {
    title: "Dominion City Abuja",
    description: "Raising Leaders that Transform Society.",
    url: "https://dcabuja.org", // Update to your actual domain
    siteName: "Dominion City Abuja",
    images: [
      {
        url: "/og-image.jpg", // Create a nice image of the sanctuary for social sharing
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominion City Abuja",
    description: "Experience the Gudu Atmosphere.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {/* 2. Main content area */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
