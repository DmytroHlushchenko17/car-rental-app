import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RentDrive | Premium Car Rental Service",
  description:
    "Find the perfect car for your next journey. Wide selection of premium vehicles at the best prices with instant booking and 24/7 support.",
  keywords: [
    "car rental",
    "rent a car",
    "premium cars",
    "booking",
    "RentDrive",
  ],
  openGraph: {
    title: "RentDrive | Premium Car Rental Service",
    description:
      "Book your dream car today. High-quality service and best rental prices.",
    type: "website",
    locale: "en_US",
    siteName: "RentDrive",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentDrive | Premium Car Rental Service",
    description: "Book your dream car today.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
