import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Utilities/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Anime List by Kenz",
  description: "palpale uhuy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-gelap`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
