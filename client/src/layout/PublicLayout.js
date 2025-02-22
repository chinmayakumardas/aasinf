

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
    <Provider store={store} >
        <NavbarDemo />
        <div ref={scrollRef} data-scroll data-scroll-speed="2" data-scroll-container >
      <div className="flex flex-col min-h-screen justify-between">

        <main className="pt-[100px]" >{children}</main>
        <Footer />
        </div>
      </div>
    </Provider>
  );
}

