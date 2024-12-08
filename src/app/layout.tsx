"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar2 from "@/_components/shared/Navbar/Navbar";
import Footer from "@/_components/shared/Footer/Footer/Footer";
import Providers from "@/_components/QueryClientProvider/Providers";
import Chats from "@/_components/Chats/Chats";
import { ToastContainer } from "react-toastify";
import { MyContextProvider } from "@/_components/Context/MyContextProvider";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  return (
    <html lang="en" data-theme="light">
      <body className={` antialiased`}>
        <Providers>
          <MyContextProvider>
            <ToastContainer />
            {!isAdminRoute && <Navbar2 />}
            {/* <Navbar2 /> */}
            <div className="pb-10">
              {children}
              <Chats />
            </div>
            {!isAdminRoute && <Footer />}
            {/* <Footer /> */}
          </MyContextProvider>
        </Providers>
      </body>
    </html>
  );
}
