'use client';
import { store } from '../store';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import localFont from 'next/font/local';
import '../styles/globals.css';
import { Provider } from 'react-redux';

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

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <section>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <main className="ml-64 w-full p-4">
                {children}
              </main>
            </div>
          </section>
        </Provider>
      </body>
    </html>
  );
}
