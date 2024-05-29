import { Inter } from "next/font/google";
import "./globals.css";
import CustomProvider from "./redux/CustomProvider";
import NavBar from "@/components/NavBar/NavBar";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <NavBar />
          {children}
        </CustomProvider>
      </body>
    </html>
  );
}
