import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Syntax Logistics — Professional Truck Dispatch & Logistics",
  description:
    "Syntax Logistics is a premium truck dispatch company helping owner-operators and small fleets maximize loads, revenue, and efficiency across all 48 states.",
  keywords:
    "truck dispatch, freight dispatch, trucking logistics, owner operator, FTL, LTL, freight broker",
  openGraph: {
    title: "Syntax Logistics — Professional Truck Dispatch & Logistics",
    description:
      "Join 500+ drivers who trust Syntax Logistics for dispatch, load finding, rate negotiation and more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
