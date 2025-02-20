'use client'
import "./globals.css";import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toasts globally
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
       
      >
        

              
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeButton />
           <Provider store={store} >
              {children}
            </Provider>  
           
        
      </body>
    </html>
  );
}
