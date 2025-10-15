import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./fonts/fonts";
import { config } from "@/config";

export const metadata = config.metadata;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
