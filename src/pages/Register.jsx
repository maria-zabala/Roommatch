import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Cuenta creada correctamente");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center px-6 py-8">

      <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl p-10">

        {/* LOGO */}
        <div className="text-center mb-8">

          <img
            src="/logo-roommatch.png"
            alt="RoomMatch"
            className="w-52 mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold text-[#0B1B3F]">
            Crear cuenta
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Regístrate para comenzar a encontrar roomies ideales.
          </p>

        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          {/* NOMBRE */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Nombre completo
            </label>

            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* CORREO */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Correo electrónico
            </label>

            <input
              type="email"
              name="correo"
              placeholder="ejemplo@correo.com"
              value={formData.correo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Contraseña
            </label>

            <input
              type="password"
              name="password"
              placeholder="Tu contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* BOTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-xl font-bold transition"
          >
            Crear cuenta
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center mt-8 text-gray-600 text-lg">
          ¿Ya tienes cuenta?{" "}

          <Link
            to="/"
            className="text-[#0B3D91] font-semibold hover:underline"
          >
            Iniciar sesión
          </Link>

        </p>

      </div>

    </div>
  );
}