import Image from "next/image";
import ProximosPartidos from "@/componentes/proximos_partidos";

export default function InicioPagina(){
  return (<div>
            <div className=" w-full h-64  mb-8 rounded-xl overflow-hidden"> 

              <Image src={"/cancha-foto-area.jpeg"}
              width={1200} height={700}   alt="foto area de cancha" className="object-cover"
              />
            </div>
              <div className="flex p-3 " >
                <div className="w-5/7 h-fit m-2">
                  <p>Conocido como Azul del Parque, Lepra mendocina o por su acrónimo CSIR, institución deportiva de la ciudad de Mendoza, cuya principal actividad es el fútbol profesional.</p>
                  <p>Fue fundado oficialmente el 24 de enero de 1913 bajo el nombre de Club Atlético Independiente. Desde 2024, participa en la Primera División.</p>
                  <p>Disputa sus encuentros de local en el Estadio Bautista Gargantini. Dicho estadio posee una capacidad para 24 000 espectadores, convirtiéndose en el segundo estadio de fútbol de mayor capacidad en Mendoza.</p>
                </div>
                <aside  className="w-2/7 m-2">
                  <h3 className="flex justify-center mb-4">Proximos partidos</h3>
                  <div className="overflow-y-auto h-50">
                  {/* */} <ProximosPartidos ></ProximosPartidos>
                  </div>
                 </aside>
                </div>
          </div>
  )  
} 