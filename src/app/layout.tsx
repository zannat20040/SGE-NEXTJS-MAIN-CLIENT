import "./globals.css";
import { Metadata } from "next"; // Import for Metadata
import RootLayoutComponent from "./RootLayoutComponent";

// Export metadata (title, description, etc.)
export const metadata: Metadata = {
  title: "Shabuj Global Education",
  description: "Generated by create next app",
};

// Root layout component for server-side
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <RootLayoutComponent>{children}</RootLayoutComponent>
      </body>
    </html>
  );
}
