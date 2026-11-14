import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Davi Rios — Full Stack Software Engineer",
  description:
    "Portfólio de Davi Rios: produtos full stack, APIs, React, Node.js, Java, PostgreSQL, AWS e infraestrutura como código.",
  openGraph: {
    title: "Davi Rios — Full Stack Software Engineer",
    description: "Produtos digitais da interface à infraestrutura.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
