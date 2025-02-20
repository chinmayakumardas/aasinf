
// 'use client';
// import React from "react";
// import Link from 'next/link';
// import { Provider } from 'react-redux';
// import store from "@/redux/store";
// import { useRouter } from 'next/navigation';
// import Footer from "./Footer";
// import { NavbarDemo } from "./Navbar";
// export default function PublicLayout({ children }) {

//   return (
//           <Provider store={store}>
      
//                 <div className="flex flex-col min-h-screen justify-between">
//                             <NavbarDemo/>
//                             {children}
//                             <Footer/>
                           
//                 </div>
        
//           </Provider>
//   );
// }



"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Footer from "./Footer";
import { NavbarDemo } from "./Navbar";
import { useLocomotiveScroll } from "@/hooks/LocomotiveScroll";

export default function PublicLayout({ children }) {
  const scrollRef = useLocomotiveScroll();

  return (
    <Provider store={store}>
      <div ref={scrollRef} data-scroll data-scroll-speed="2" data-scroll-container className="flex flex-col min-h-screen justify-between">
        <NavbarDemo />
        <main >{children}</main>
        <Footer />
      </div>
    </Provider>
  );
}

