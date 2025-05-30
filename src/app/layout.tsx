import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zach Ault - Software Engineer",
  description: "Zach Ault is a software engineer based in Ohio, specializing in clean, maintainable code and software best practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
