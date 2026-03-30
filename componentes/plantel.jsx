import jugadores from "@/data/jugadores.json"
import Image from "next/image"

export default function Plantel() {
  return (
    
    <section className="flex flex-wrap justify-center gap-3"> 
        {[...jugadores].reverse().map(jugador => (
            <div key={jugador.id} className="group relative border rounded-3xl flex flex-col p-4 items-center  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-56"> 
                <Image src={jugador.imagen} alt={jugador.nombre} width={100} height={125} />
                <h3>{jugador.nombre}</h3>
                <p>{jugador.posicion}</p>

                  <div
            className="absolute inset-0 bg-black/75 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm">
              Nacionalidad {jugador.nacionalidad}
            </p>
            <p className="text-sm">
              {jugador.edad} años
            </p>
          </div>

            </div>
        ))}
    </section>
  
  );
}