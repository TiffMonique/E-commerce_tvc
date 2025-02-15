'use client'
import localFont from "next/font/local";
import { ToastContainer } from 'react-toastify';

import "../styles/globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Header />
          <main className="">
            <ToastContainer
              limit={2}
              position="bottom-right"
              hideProgressBar={true}
              draggable
            />
            {children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
