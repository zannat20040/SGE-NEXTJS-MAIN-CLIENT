"use client"; // This makes this component client-side

import { usePathname } from "next/navigation"; // Use client-side hook for pathname
import Navbar2 from "@/_components/shared/Navbar/Navbar"; // Example navbar
import Footer from "@/_components/shared/Footer/Footer/Footer"; // Example footer
import Chats from "@/_components/Chats/Chats"; // Example chat component
import { MyContextProvider } from "../_components/Context/MyContextProvider";
import Providers from "../_components/QueryClientProvider/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayoutComponent({ children }) {
  const pathname = usePathname(); // Make sure to get the pathname

  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <Providers>
      <MyContextProvider>
        <div>
          {!isAdminRoute && <Navbar2 />}
          <ToastContainer />
          <div className={`${!isAdminRoute && "pb-10"}`}>
            {children}
            {/* <Chats /> */}
            {!isAdminRoute && <Chats />}
          </div>
          
          {!isAdminRoute && <Chats />}
          {!isAdminRoute && <Footer />}
        </div>
      </MyContextProvider>
    </Providers>
  );
}
