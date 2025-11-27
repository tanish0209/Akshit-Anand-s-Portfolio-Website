import { Neuton } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingSocialBar from "../components/FloatingBar";

const neuton = Neuton({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Akshit Anand",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${neuton.className} antialiased`}>
        <Navbar />
        <FloatingSocialBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
