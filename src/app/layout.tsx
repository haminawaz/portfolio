import type { Metadata } from "next";
import "../styles/globals.css";
import AosInit from "../components/AosInit";

export const metadata: Metadata = {
  title: "Hamid Nawaz",
  description:
    "Professional full-stack developer portfolio showcasing projects and expertise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
