import type { Metadata } from "next";
import "../styles/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
