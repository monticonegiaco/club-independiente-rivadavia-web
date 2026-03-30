import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(<header>
        <div className="flex items-center justify-center pb-6 -mt-4 ">
            <Link href={"/"} className="justify-center" ><Image src="/escudo.avif" alt="Logo del club" width={175} height={100} /></Link>
            <h1 className="text-4xl font-bold ">Club Sportivo Independiente Rivadavia</h1>
        </div>
    </header>)
} 