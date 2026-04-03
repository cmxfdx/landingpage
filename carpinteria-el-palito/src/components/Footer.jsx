import React from 'react';
import { Phone, MapPin, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-5 text-emerald-400">Contacto</h3>
          <p className="flex items-center justify-center md:justify-start mb-3 text-lg opacity-90">
            <MapPin className="w-6 h-6 mr-3 text-emerald-300" />
            C/ Avaroa esquina Benemeritos, Yacuiba, Bolivia
          </p>
          <p className="flex items-center justify-center md:justify-start mb-3 text-lg opacity-90">
            <Phone className="w-6 h-6 mr-3 text-emerald-300" />
            +591 68902103
          </p>
          <p className="flex items-center justify-center md:justify-start text-lg opacity-90">
            <MessageSquare className="w-6 h-6 mr-3 text-emerald-300" />
            info@elpalito.com
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-5 text-emerald-400">Síguenos</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-emerald-400 transition duration-300 transform hover:scale-110">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-emerald-400 transition duration-300 transform hover:scale-110">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-white hover:text-emerald-400 transition duration-300 transform hover:scale-110">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <h3 className="text-2xl font-semibold mb-5 text-emerald-400">Legal</h3>
          <ul>
            <li className="mb-3"><a href="#" className="hover:text-emerald-400 transition duration-300 text-lg opacity-90">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition duration-300 text-lg opacity-90">Aviso Legal</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-700">
        <p className="text-md opacity-80">&copy; {new Date().getFullYear()} Carpintería El Palito. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;