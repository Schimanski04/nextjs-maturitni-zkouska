"use client";

import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { ColorSchemeScript, MantineProvider, Container } from "@mantine/core";
import { theme } from "../theme";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        {/* <link
          rel="shortcut icon"
          href="/pslib-logo-icon.svg"
          type="image/x-icon"
        /> */}
        <meta name="description" content="Next.js app" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Navbar />
          <main>
            <Container>
              {children}
              {/* <ScrollToTopButton /> */}
            </Container>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
