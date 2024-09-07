import Header from "../components/header";
import "./globals.css";
import Footer from "../components/footer";


export const metadata = {
  title: "FWUG",
  description: "The real fwug",
};

export default function RootLayout({ children }) {
  return (
    <html>
     
      <body className="">
        <Header/>
        
        <div className="backdrop-blur-[400px]">
        {children}
        </div>
        <Footer/>
      </body>
     
    </html>
  );
}
