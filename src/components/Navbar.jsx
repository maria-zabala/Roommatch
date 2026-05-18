import {
  FiHeart,
  FiMessageSquare,
  FiUser,
  FiSearch,
  FiMapPin,
  FiHome,
  FiUsers,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="bg-white border-b">

      {/* NAVBAR SUPERIOR */}
      <div className="flex items-center justify-between px-14 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
            <FiHome className="text-white text-xl" />
          </div>

          <h1 className="text-2xl font-bold text-orange-500">
            ROOMMATCH
          </h1>

        </div>

        {/* MENU */}
        <div className="flex items-center gap-10 text-[18px] text-gray-700">

          <button className="flex items-center gap-2 bg-orange-50 text-orange-500 px-5 py-3 rounded-2xl">
            <FiHome />
            Inicio
          </button>

          <button className="flex items-center gap-2 hover:text-orange-500 transition">
            <FiHeart />
            Favoritos
          </button>

          <button className="flex items-center gap-2 hover:text-orange-500 transition">
            <FiMessageSquare />
            Mensajes
          </button>

          <button className="flex items-center gap-2 hover:text-orange-500 transition">
            <FiUser />
            Perfil
          </button>

        </div>

        {/* BOTON */}
        <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-sm hover:bg-orange-600 transition">
          + Publicar
        </button>

      </div>

      {/* FILTRO */}
      <div className="px-14 py-4 flex items-center gap-4">

        <button className="flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-full text-lg shadow-sm">


          <FiUsers className="text-lg" />
          Roomie
        </button>

      </div>

      {/* BUSCADOR */}
      <div className="px-14 pb-5 flex gap-4">

        <div className="flex items-center flex-1 border rounded-2xl px-5 py-4 bg-white shadow-sm">

          <FiSearch className="text-gray-400 text-xl mr-3" />

          <input
            type="text"
            placeholder="Buscar por nombre o descripción..."
            className="w-full outline-none text-lg"
          />

        </div>

        <button className="flex items-center gap-2 border rounded-2xl px-6 text-lg bg-white shadow-sm text-gray-600">

          <FiMapPin className="text-orange-500" />

          Todas las zonas

        </button>

      </div>

    </div>
  );
}