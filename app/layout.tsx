import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Next.js CRUD",
  description: "CRUD Assignment",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

