import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@components/Nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fox Hues",
  description: "NextJS AI Image Generation App MidJourney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg_gradient">
        <Nav />
        {children}
        </div>
        </body>
    </html>
  );
}
