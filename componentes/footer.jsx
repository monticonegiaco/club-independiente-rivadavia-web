import Link from "next/link"
import Image from "next/image"


export default function Footer(){
    return( <footer>
        <div className="flex p-10 border-t-3 m-10" >
            <div>
                <h3 className="text-2xl">Club Sportivo Independiente Rivadavia</h3>
                
                <p>Av. Boulogne Sur Mer 688, M5500 Mendoza, Argentina</p>

                <p>Teléfono.: 0291 123-45678</p>

                <p className="font-bold">Desde 1913</p>
            </div>
            <div className="ml-20">
                <h3 className="text-2xl">Acceso</h3>
                <ul>
                    <li className="hover:underline"><Link href={"/"}>Inicio</Link></li>
                    <li className="hover:underline"><Link href={"/nosotros"}>Nosotros</Link></li>
                    <li className="hover:underline"><Link href={"/novedades"}>Novedades</Link></li>
                    <li className="hover:underline"><Link href={"/contacto"}>Contacto</Link></li>
                </ul>
            </div>
        </div>
    </footer>)
}