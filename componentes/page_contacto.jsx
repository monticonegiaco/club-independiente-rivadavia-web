"use client";
import { useState } from "react";

export default function Page_contacto(){
    const [mensajes, setMensajes] = useState([]);

      const [nombre, setNombre] = useState("");
      const [email, setEmail] = useState("");
      const [mensaje, setMensaje] = useState("");

const handleSubmit = (evento) => {
  evento.preventDefault();

  const nuevoMensaje = {
    nombre: nombre,
    email: email,
    mensaje: mensaje
  };

  setMensajes([...mensajes, nuevoMensaje]);

  console.log("ultimo mensaje", nuevoMensaje);
  console.log("el arreglo", [...mensajes, nuevoMensaje]);
  
  setNombre("");
  setEmail("");
  setMensaje("");
};


    return(<div >
            <h2 className="flex justify-center titulo">Contacto</h2>              
            <p className="text-center">Para consultas, sugerencias o cualquier tipo de comunicación, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte y responder a tus inquietudes.</p>
            <div className="mt-4 flex w-full justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-3/4">
                <h3 className="text-2xl">Envianos un mensaje</h3>
                <div className=" flex flex-col w-5/6 ">
                    <label htmlFor="Nombre">Nombre</label>
                    
                    <input type="text" placeholder="Nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)} className="bg-white text-[#001547]" required />
                </div>
                <div className=" flex flex-col w-5/6 ">
                    <label htmlFor="E-mail">E-mail</label>
                    <input type="email" placeholder="E-mail" value={email} onChange={(evento) => setEmail(evento.target.value)} className="bg-white text-[#001547]" required />
                </div>
                <div className="flex flex-col mt-6  w-5/6">
                    <label htmlFor="Mensaje">Mensaje</label>
                    <textarea name="mensaje" placeholder="Mensaje" value={mensaje} onChange={(evento)=> setMensaje(evento.target.value)} className="bg-white text-[#001547] w-full" required></textarea>
                </div>
                <button type="submit" className="mt-4 px-4 py-2 rounded bg-blue-500 hover:bg-blue-700  transition transform active:scale-95 active:bg-blue-600 ">Enviar</button>    

            </form>
            <div className="mt-8 ml-20 w-1/2 border-l-2 border-fitted pl-6">
                <h3 className="text-2xl mb-4">Otras vias de contacto</h3>
                <p className="mb-2">Correo electrónico: <a href="mailto:monticonegiaco@gmail.com">monticonegiaco@gmail.com</a></p>
                <p className="mb-2">Teléfono: +54 291 123-45678</p>
                <a href="https://www.facebook.com/CSIRoficial" target="_blank" className="block text-blue-500 hover:underline mb-2">Facebook</a>
                <a href="https://www.instagram.com/csir.oficial" target="_blank" className="block text-blue-500 hover:underline mb-2">Instagram</a>

            </div>
        </div>            
        </div>)}