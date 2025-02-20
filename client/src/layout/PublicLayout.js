
'use client';
import React from "react";
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import { useRouter } from 'next/navigation';
import Footer from "./Footer";
import { NavbarDemo } from "./Navbar";
export default function PublicLayout({ children }) {

  return (
          <Provider store={store}>
      
                <div className="flex flex-col min-h-screen justify-between">
                            <NavbarDemo/>
                            {children}
                            <Footer/>
                           
                </div>
        
          </Provider>
  );
}




