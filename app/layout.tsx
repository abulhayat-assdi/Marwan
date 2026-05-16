import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from 'next/font/google';
import "./globals.css";
import { CartProvider } from "@/src/context/CartContext";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "MARWAN | Premium Archive",
  description: "A high-end, polished e-commerce frontend built with Next.js, Tailwind CSS, and Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <body className="antialiased bg-luxury-black text-white font-sans">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
