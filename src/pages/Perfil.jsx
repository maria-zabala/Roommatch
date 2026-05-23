import Navbar from "../components/Navbar";
import { FiUser } from "react-icons/fi";

export default function Perfil() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Navbar />

      <div className="p-10">

        <div className="flex items-center gap-3 mb-6">
          <FiUser className="text-4xl text-orange-500" />

          <h1 className="text-4xl font-bold text-[#0B1B3F]">
            Perfil
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-600 text-lg">
            Aquí podrás visualizar y editar tu información personal.
          </p>
        </div>

      </div>
    </div>
  );
}