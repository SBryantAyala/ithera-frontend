import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo';

const footerLinks = {
  Producto:  ['Explorar', 'Cómo funciona', 'Precios', 'Testimonios'],
  Compañía:  ['Acerca de', 'Blog', 'Carreras', 'Contacto'],
  Legal:     ['Privacidad', 'Términos', 'Cookies', 'Soporte'],
};

export const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/10 py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo variant="white" height={40} />
            </div>
            <p className="font-body text-white/40 text-xs leading-relaxed mb-4">
              Planifica viajes grupales sin complicaciones.
            </p>
            <div className="flex gap-3">
              {['ig', 'tw', 'in', 'yt'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social}
                >
                  <span className="font-body text-white/60 text-[9px] uppercase">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="font-heading font-semibold text-white text-xs uppercase tracking-wider mb-4">{col}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {/* Convertimos el texto a minúsculas y sin espacios para simular rutas reales */}
                    <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="font-body text-white/40 text-xs hover:text-white/70 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-white/25 text-xs text-center">
            © {new Date().getFullYear()} Ithera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};