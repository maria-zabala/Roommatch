import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RoomMatchLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {

      provider.setCustomParameters({
  prompt: "select_account",
});

const result = await signInWithPopup(auth, provider);

      console.log(result.user);

      navigate("/home");

    } catch (error) {

      console.log(error);

      alert("Error al iniciar sesión");

    }
  };
  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = {};

    // Validar correo
    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Correo no válido";
    }

    // Validar contraseña
    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password =
        "La contraseña debe tener mínimo 6 caracteres";
    }

    setErrors(newErrors);

    // Si NO hay errores
    if (Object.keys(newErrors).length === 0) {
      navigate("/home");
    }
  };
  return (
    <div className="min-h-screen bg-[#F7F8FC] flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="relative bg-white p-10 flex flex-col justify-between">
          <div>
            {/* Logo principal */}
            <img
              src="/logo-roommatch.png"
              alt="RoomMatch Logo"
              className="w-56 mb-10"
            />

            {/* Texto principal */}
            <h1 className="text-[56px] font-bold leading-tight text-[#0B1B3F]">
              Encuentra tu <br />
              <span className="text-[#F59E0B]">lugar ideal</span>
            </h1>

            <p className="text-gray-500 text-lg mt-6 max-w-md leading-relaxed">
              Conecta con roomies increíbles y encuentra viviendas que
              se adapten a ti.
            </p>

            {/* Imagen de roomies */}
            <div className="mt-8">
              <img
                src="/roomies-illustration.png"
                alt="Roomies Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Caja naranja inferior */}
          <div className="mt-10 bg-[#F59E0B] text-white rounded-tl-[90px] rounded-br-[90px] p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold leading-relaxed">
                Busca habitaciones y apartamentos
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed">
                Conecta con roomies compatibles
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed">
                Vive nuevas experiencias de forma segura
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-xl">

            {/* Encabezado */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#FFF7ED] border border-orange-100 flex items-center justify-center mb-6">
                <img
                  src="/mini-logo.png"
                  alt="Mini Logo"
                  className="w-20"
                />
              </div>

              <h2 className="text-5xl font-bold mb-4 leading-tight">
                <span className="text-[#F59E0B]">¡Bienvenido</span>{' '}
                <span className="text-[#0B3D91]">de nuevo!</span>
              </h2>

              <p className="text-gray-500 text-lg">
                Inicia sesión para continuar en RoomMatch
              </p>
            </div>

            {/* Botón Google */}
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 rounded-2xl py-4 text-lg font-medium hover:bg-gray-50 transition mb-8"
            >
              Continuar con Google
            </button>

            {/* Separador */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-400 text-lg">o</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Formulario */}
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full border rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 ${errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-[#F59E0B]"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full border rounded-2xl px-5 py-4 text-lg outline-none focus:ring-2 ${errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-[#F59E0B]"
                    }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Recordarme
                </label>

                <button
                  type="button"
                  className="text-[#0B3D91] hover:underline font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Botón principal */}
              <button
                type="submit"
                className="w-full bg-[#F59E0B] hover:bg-[#e48d07] text-white font-bold text-xl py-4 rounded-2xl transition mt-2"
              >
                Iniciar sesión
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-lg mt-8 text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link
                to="/register"
                className="text-[#0B3D91] font-semibold hover:underline"
              >
                Crear cuenta
              </Link>
              
            
            </p>

          </div>
        </div>
      </div>
   </div >
  )
}
