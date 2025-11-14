import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import CartProvider from "@/contexts/CartContext";

export const metadata = {
  title: "Bani Phone",
  description: "store to find your favourite phone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}