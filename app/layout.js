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
     <body>
     <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="overlay" /> {/* Questo sarà il tuo overlay */}
      </div>

      {/* Header */}
      <Header />
      
      {/* Contenuto */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>

     </body>
     
     
    </html>
  );
}
