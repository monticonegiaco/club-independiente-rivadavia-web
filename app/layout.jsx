import NavBar from "@/componentes/navbar"
import Footer from "@/componentes/footer"
import Header from "@/componentes/header"
import "@/estilos/globals.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "CSIR",
  description: "Club Sportivo Independiente Rivadavia",
}

export default function RootLayout({children}){
  return(
  <html lang="es-ar">
    <body className={poppins.className}>
      <div>
      <Header></Header>
      <main>
      <NavBar></NavBar>
      </main>
      {children}
      
      <Footer></Footer>
      </div>
    </body>

  </html>
  )
}