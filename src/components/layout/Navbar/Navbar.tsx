import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 px-6 py-4 bg-transparent text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Ithera */}
        <Link to="/" className="flex items-center gap-2">
          {/* Reemplaza con el logo final */}
          <span className="text-[#1E6FD9] text-2xl">✈️</span>
          <span className="font-bold text-xl tracking-wide">ITHERA</span>
        </Link>

        {/* Links de navegación (Desktop) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="#destinos" className="hover:text-[#1E6FD9] transition-colors">Destinos</Link>
          <Link to="#como-funciona" className="hover:text-[#1E6FD9] transition-colors">Cómo funciona</Link>
          <Link to="#precios" className="hover:text-[#1E6FD9] transition-colors">Precios</Link>
        </div>

        {/* Botones de Auth */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-[#1E6FD9] transition-colors">
            Iniciar sesión
          </Link>
          <Link 
            to="/register" 
            className="px-5 py-2 bg-[#1E6FD9] hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
          >
            Crear cuenta
          </Link>
        </div>
        
      </div>
    </nav>
  );
};