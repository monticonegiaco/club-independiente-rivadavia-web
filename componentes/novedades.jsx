import novedades from "../data/novedades.json";
import Image from "next/image";

function OrdenarNovedades({ novedad }) {
  if (novedad.id % 2 == 0) {
    return (
      <div className="flex flex-row w-full h-32 bg-[#dadde658]">
        <div className="w-46 h-auto relative ">
            <Image src={novedad.imagen} alt={novedad.titulo} fill className="object-cover" /> 
        </div>
        <div className="p-2">
            <h3 className="text-xl font-bold">{novedad.titulo}</h3>
            <p className="text-xs ">{novedad.fecha}</p>
            <p className="h-14 overflow-auto">{novedad.descripcion}</p>
            
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row  w-full h-32"> 
        <div className="p-2">
            <h3 className="text-xl font-bold">{novedad.titulo}</h3>
            <p className="text-xs">{novedad.fecha}</p>
            <p className=" h-14 overflow-auto">{novedad.descripcion}</p>
                      
        </div>
        <div className="w-36 h-auto relative "> 
            <Image src={novedad.imagen} alt={novedad.titulo} fill className="object-cover"  /> 
        </div>
      </div>
    );
  }
}

export default function Novedades() {
  return (
    <section className="flex flex-col gap-3">
      {novedades.map((novedad) => (
        <div
          key={novedad.id}
          className="border items-center"
        >
          <OrdenarNovedades novedad={novedad} />
        </div>
      ))}
    </section>
  );
}