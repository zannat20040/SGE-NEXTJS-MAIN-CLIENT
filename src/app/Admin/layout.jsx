import React from "react";
import { MyContextProvider } from "../../_components/Context/MyContextProvider";
import Providers from "../../_components/QueryClientProvider/Providers";

export default function AboutLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased">
        <Providers>
          <MyContextProvider>
            {/* <ToastContainer /> */}
            {/* <AboutNavbar /> */}
            <div className="pb-10">
              {children}
              <Chats />
            </div>
            {/* <AboutFooter /> */}
          </MyContextProvider>
        </Providers>
      </body>
    </html>
  );
}
