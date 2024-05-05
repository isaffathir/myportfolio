import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/bottomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ilmal Sabda Fathir | Aesthetics portfolio website",
  description: "Aesthetics portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full bg-[#1e1e2e]">
          <div className="pt-[8rem]">
            <div className="fixed top-0 w-full h-24 justify-center items-center bg-[#1e1e2e]/50 backdrop-filter backdrop-blur-sm">
              <Navbar />
            </div>
            <div className="md:hidden lg:hidden xl:hidden fixed bottom-0 w-full h-24 justify-center items-center bg-[#1e1e2e]/50 backdrop-filter backdrop-blur-sm">
              <BottomNavbar />
            </div>
            <div className="flex justify-center">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
