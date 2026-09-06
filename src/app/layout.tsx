import { Metadata } from "next";
import { Anton, Geist, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Raumay Aggarwal"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${geist.variable} ${montserrat.variable} ${openSans.variable}`}
    >
      <body className="bg-[#edeae4] text-[#1a1a1a] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}