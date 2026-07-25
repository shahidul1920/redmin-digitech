import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Redmun Digitech — Enterprise Management Platform",
  description:
    "Enterprise management platform built for growing businesses. Specialized digital solutions for e-commerce, shipping, restaurants, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
