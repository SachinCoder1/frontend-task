import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Provider } from "react-redux";
import store from "@/store";
import { ReduxProvider } from "@/components/providers/redux-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radiant",
  description: "Radiant is Awesome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <div className="w-full h-full">
              <nav>
                <div className="border-b py-2 px-4">
                  <Navbar />
                </div>
              </nav>
              {children}
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
