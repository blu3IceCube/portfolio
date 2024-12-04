import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Snehil Shrivastava - Portfolio",
  description: "A portfolio showcasing my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${calistoga.variable}
          font-sans antialiased bg-gray-900 text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
