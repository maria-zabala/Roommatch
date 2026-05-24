import Navbar from "../components/Navbar";
import { FiMessageSquare } from "react-icons/fi";

export default function Mensajes() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <Navbar />

      <div className="p-10">

        {/* TITULO */}
        <div className="flex items-center gap-3 mb-6">

          <FiMessageSquare className="text-4xl text-orange-500" />

          <h1 className="text-4xl font-bold text-[#0B1B3F]">
            Mensajes
          </h1>

        </div>

        {/* CONTENEDOR */}
        <div className="bg-white rounded-[30px] shadow-sm overflow-hidden grid grid-cols-[320px_1fr] h-[550px]">

          {/* PANEL IZQUIERDO */}
          <div className="border-r flex flex-col items-center justify-center text-center px-6">

            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-5">

              <FiMessageSquare className="text-orange-500 text-4xl" />

            </div>

            <p className="text-gray-500 text-xl">
              No tienes conversaciones
            </p>

          </div>

          {/* PANEL DERECHO */}
          <div className="flex flex-col items-center justify-center">

            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-5">

              <FiMessageSquare className="text-orange-500 text-5xl" />

            </div>

            <p className="text-gray-500 text-2xl">
              Selecciona una conversación
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}