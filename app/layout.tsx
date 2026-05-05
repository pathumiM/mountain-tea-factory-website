import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
 
const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mountain Tea Factory",
  description: "An informational website showcasing the heritage, handmade tea production, and product range of Mountain Tea Factory in Deniyaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ font.className} antialiased`}>
         <ResponsiveNav/>
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
