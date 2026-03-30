import Link from "next/link";

export default function NavBar(){
    return(<nav className="mb-6">
        
            <ul className="flex flex-wrap  gap-1 items-center justify-center w-fit shadow-lg shadow-blue-800  rounded-full p-1 m-auto">
                <li className="border-2 rounded-l-full p-1 sombra-navbar"><Link href={"/"}>Inicio</Link></li> 
                <li className="border-2 p-1 sombra-navbar"><Link href={"/nosotros"}>Nosotros</Link> </li>
                <li className="border-2 p-1 sombra-navbar"><Link href={"/novedades"}>Novedades</Link> </li>
                <li className="border-2 rounded-r-full p-1 sombra-navbar"><Link href={"/contacto"}>Contacto</Link> </li>
            </ul>
        
    </nav>)
}