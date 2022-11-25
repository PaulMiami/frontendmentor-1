import "./globals.css";
import React from "react";

import { Be_Vietnam_Pro } from "@next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${beVietnamPro.variable} font-sans`}>{children}</body>
    </html>
  );
}
