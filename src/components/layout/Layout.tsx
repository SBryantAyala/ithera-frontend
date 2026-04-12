import React, { ReactNode } from 'react';
import { Navbar } from './navbar/Navbar'; 
import { Footer } from './footer/Footer'; 

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    {/* Usando el Background oficial #F4F6F8 del proyecto para el contenedor principal */}
    <div className="flex flex-col min-h-screen bg-[#F4F6F8] font-sans">
      <Navbar />
      
      <main className="flex-grow flex flex-col relative">
        {children}
      </main>

      <Footer />
    </div>
  );
};