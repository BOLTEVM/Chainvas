import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ToastProvider } from "@/components/shared/ToastProvider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Chainvas | The Ultimate Creative Suite",
  description: "Text, Photo, and Video editor powered by BOLTEVM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Providers>
          <ToastProvider>
            <Navbar />
            <div className="pt-20 min-h-screen flex flex-col relative w-full overflow-hidden">
              {children}
            </div>
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
