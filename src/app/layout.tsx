import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),

  title: "Sarthak Sarangi",
  authors: {
    name: "Sarthak Sarangi",
  },

  description: "Sarthak Sarangi Developer Portfolio",
  openGraph: {
    title: "Sarthak Sarangi",
    description: "Sarthak Sarangi Developer Portfolio",
    url: "http://localhost:3000/",
    siteName: "Sarthak Sarangi",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Sarthak", "Sarthak Sarangi", "Developer", "Developer Hire"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
