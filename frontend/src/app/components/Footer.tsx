import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-32 pb-8">
      <div className="mx-10 border-b pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Columna TVC Shop */}
        <div >
          <h3 className="text-primary font-bold text-3xl">TVC SHOP</h3>
          <p className="text-gray-500 mt-4 text-xs leading-5">
            Contamos con todos los electrodomésticos e inmobiliaria para que tu casa se convierta en tu hogar.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://x.com/televicentrohn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary text-xs">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/televicentrohon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/televicentro_hn/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary text-xs border border-gray-300">
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Columna Compañía */}
        <div>
          <h3 className="text-primary tracking-widest text-sm">COMPAÑÍA</h3>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Solicitudes</a></li>
            <li><a href="#">Trabajos</a></li>
            <li><a href="#">Conócenos</a></li>
          </ul>
        </div>

        {/* Columna Ayuda */}
        <div>
          <h3 className="text-primary tracking-widest text-sm">AYUDA</h3>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#">Soporte</a></li>
            <li><a href="#">Detalles de Envíos</a></li>
            <li><a href="#">Términos & Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>

        {/* Columna FAQ */}
        <div>
          <h3 className="text-primary tracking-widest text-sm">FAQ</h3>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#">Cuenta</a></li>
            <li><a href="#">Manejo de Envíos</a></li>
            <li><a href="#">Órdenes</a></li>
            <li><a href="#">Pagos</a></li>
          </ul>
        </div>

        {/* Columna Nuestros Sitios */}
        <div>
          <h3 className="text-primary tracking-widest text-sm">NUESTROS SITIOS</h3>
          <ul className="mt-4 space-y-2 text-gray-500 text-sm">
            <li><a href="#">TUNOTA</a></li>
            <li><a href="#">DEPORTES TVC</a></li>
            <li><a href="#">HRN</a></li>
            <li><a href="#">TVC</a></li>
          </ul>
        </div>
      </div>

      <div className="py-4 mx-10 flex flex-col sm:flex-row sm:justify-between items-center">
        <p className="text-gray-500 text-xs text-center sm:text-left">TVC SHOP © 2024, Todos los Derechos Reservados</p>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <div className="w-12 h-8 p-1 bg-white rounded-md flex items-center justify-center">
            <Image src="/assets/visa.png" alt="Visa" width={30} height={20} />
          </div>
          <div className="w-12 h-8 p-1 bg-white rounded-md flex items-center justify-center">
            <Image src="/assets/mastercard.png" alt="Mastercard" width={30} height={20} />
          </div>
          <div className="w-12 h-8 p-1 bg-white rounded-md flex items-center justify-center">
            <Image src="/assets/paypal.png" alt="Paypal" width={30} height={20} />
          </div>
          <div className="w-12 h-8 p-1 bg-white rounded-md flex items-center justify-center">
            <Image src="/assets/applepay.png" alt="Apple Pay" width={30} height={20} />
          </div>
          <div className="w-12 h-8 p-1 bg-white rounded-md flex items-center justify-center">
            <Image src="/assets/googlepay.png" alt="Google Pay" width={30} height={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
