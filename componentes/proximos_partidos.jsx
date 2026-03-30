import partidos from "../data/partidos.json"

export default function ProximosPartidos() {

    function Sede (partido) {if (partido.sede === "En Casa") {
                        return(<p className="font-extrabold text-xl">{partido.sede}</p>)}
                        else { return(<p>{partido.sede}</p>)}
                    
                    }        

    return (
        <section className="flex flex-col justify-center  gap-3"> 
            {partidos.map(partido => (
                <div key={partido.id} className="border rounded-[20px] flex flex-col inset-shadow-sm/100
                shadow-sm shadow-black items-center"> 
                    <h3 className="text-xl">{partido.rival}</h3>
                    <p>{partido.fecha}</p>
                     {Sede(partido)}          
                    
                </div>
            ))}
        </section>
    );
}