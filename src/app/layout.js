// app/layout.tsx (or .js)
import './globals.css';
import { Exo_2, Roboto_Condensed, Lexend, Orbitron } from 'next/font/google';
import ModernNavbarWrapper from './NavbarWrapper'; // client wrapper

const exo2 = Exo_2({ variable: '--font-exo2', subsets: ['latin'] });
const robotoCondensed = Roboto_Condensed({ variable: '--font-roboto-condensed', subsets: ['latin'] });
const lexend = Lexend({ variable: '--font-lexend', subsets: ['latin'] });
const orbitron = Orbitron({ variable: '--font-orbitron', subsets: ['latin'] });

export const metadata = {
  title: 'Crypto Dashboard',
  description: 'Stay updated on the latest crypto market data',
  // add more meta tags here if you want
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${exo2.variable} ${robotoCondensed.variable} ${lexend.variable} ${orbitron.variable} antialiased overflow-x-hidden`}
      >
        <ModernNavbarWrapper />
        {children}
      </body>
    </html>
  );
}
