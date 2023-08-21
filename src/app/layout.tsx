import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horeca Solution",
  description: "Horeca Solution: Jouw schakel naar perfecte samenwerkingen. Wij bemiddelen tussen horecazaken, catering en evenementen, en getalenteerd personeel. Ervaar vakkundigheid, passie en flexibiliteit in elke culinaire creatie. Jouw betrouwbare partner voor naadloze verbindingen.",
  icons: {
    icon: "https://example.com/favicon.ico",
    apple: "https://example.com/apple-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
