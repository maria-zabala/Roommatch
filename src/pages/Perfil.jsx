import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  FiEdit,
  FiPlus,
  FiCamera,
  FiLogOut,
} from "react-icons/fi";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5F5F5] min-h-screen">

     
      <Navbar />

      
      <div className="bg-orange-500 h-[180px] w-full"></div>

      
      <div className="max-w-6xl mx-auto px-8 -mt-24">

        
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-white">
            Mi Perfil
          </h1>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white text-lg font-medium hover:opacity-80 transition"
          >

            <FiLogOut className="text-xl" />
 
            Salir

          </button>



        </div>

        {/* CARD PERFIL */}
        <div className="bg-white rounded-[30px] shadow-md p-10 flex items-center justify-between">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-8">

            {/* FOTO */}
            <div className="relative">

              <div className="w-36 h-36 rounded-full bg-orange-500 flex items-center justify-center text-white text-6xl font-bold">
                M
              </div>

              <button className="absolute bottom-1 right-1 bg-white p-3 rounded-full shadow-lg">
                <FiCamera className="text-orange-500 text-xl" />
              </button>

            </div>

            {/* INFO */}
            <div>

              <h2 className="text-4xl font-bold text-[#0B1B3F]">
                Maria Lucia Zabala Cruz
              </h2>

              <p className="text-gray-500 text-2xl mt-2">
                maria.zabala796@pascualbravo.edu.co
              </p>

            </div>

          </div>

          {/* BOTON */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition">
            Editar Perfil
          </button>

        </div>

        {/* PUBLICACIONES */}
        <div className="flex justify-between items-center mt-12 mb-6">

          <h2 className="text-4xl font-bold text-[#0B1B3F]">
            Mis Publicaciones
          </h2>

          <button className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold flex items-center gap-3 transition">
            <FiPlus />
            Nueva Publicación
          </button>

        </div>

        {/* CARD VACIA */}
        <div className="bg-white rounded-[30px] shadow-md p-20 flex flex-col items-center justify-center">

          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">

            <FiPlus className="text-orange-500 text-4xl" />

          </div>

          <p className="text-gray-400 text-3xl mt-8">
            Aún no tienes publicaciones
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl text-2xl font-semibold transition">
            Crear mi primera publicación
          </button>

        </div>

      </div>

    </div>
  );
}