import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/provider";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mqtt Platform",
  description: "Mqtt Platform by Nakuya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <Provider>
        <body className={`${inter.className} flex h-full w-full`}>
          <Navigation />
          {children}
        </body>
      </Provider>
    </html>
  );
}
