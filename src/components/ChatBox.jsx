import { useState } from "react";
import {
  FiMessageCircle,
  FiSend,
  FiX,
  FiHome,
} from "react-icons/fi";

export default function ChatBox() {

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const handleChat = () => {

    if (!message.trim()) return;

    let botResponse = "";

    const text = message.toLowerCase();

    if (text.includes("hola")) {
      botResponse =
        "Hola 👋 Soy RoomMatch IA. Estoy aquí para ayudarte a encontrar roomies y propiedades.";
    }

    else if (
      text.includes("estudiante") ||
      text.includes("universidad")
    ) {
      botResponse =
        "Hay roomies estudiantes cerca de universidades 🎓";
    }

    else if (
      text.includes("medellin") ||
      text.includes("medellín")
    ) {
      botResponse =
        "Tenemos roomies disponibles en Medellín 🏡";
    }

    else if (
      text.includes("economicas") ||
      text.includes("económicas") ||
      text.includes("barato")
    ) {
      botResponse =
        "Las zonas más económicas son Belén, Robledo y Laureles 💰";
    }

    else if (
      text.includes("mascotas") ||
      text.includes("perros") ||
      text.includes("gatos")
    ) {
      botResponse =
        "Sí 🐶 Tenemos opciones pet friendly disponibles.";
    }

    else {
      botResponse =
        "Estamos buscando roomies compatibles para ti ✨";
    }

    setMessages([
      ...messages,
      {
        type: "user",
        text: message,
      },
      {
        type: "bot",
        text: botResponse,
      },
    ]);

    setMessage("");
  };

  return (
    <>

      {/* BOTÓN FLOTANTE */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white z-50"
      >

        {open ? (
          <FiX className="text-3xl" />
        ) : (
          <FiMessageCircle className="text-3xl" />
        )}

      </button>

      {/* CHAT */}
      {open && (

        <div className="fixed bottom-28 right-6 w-[350px] bg-white rounded-[30px] shadow-2xl overflow-hidden z-50 border">

          {/* HEADER */}
          <div className="bg-orange-500 p-5 flex items-center gap-4">

            <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center">
              <FiHome className="text-white text-2xl" />
            </div>

            <div>
              <h2 className="text-white text-xl font-bold">
                RoomMatch IA
              </h2>

              <p className="text-orange-100 text-sm">
                Siempre disponible
              </p>
            </div>

          </div>

          {/* MENSAJES */}
          <div className="p-5 h-[350px] overflow-y-auto bg-[#F9FAFB] space-y-4">

            {/* MENSAJE INICIAL */}
            <div className="bg-white rounded-2xl p-4 shadow-sm text-gray-700 text-[15px] leading-relaxed">

              👋 Hola, soy el asistente virtual de RoomMatch.

              <br /><br />

              • Buscar roomies <br />
              • Encontrar zonas <br />
              • Roomies estudiantes <br />
              • Opciones pet friendly

              <br /><br />

              ¿Cómo puedo ayudarte?

            </div>

            {/* HISTORIAL */}
            <div className="space-y-3">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`p-3 rounded-2xl max-w-[85%] break-words ${
                    msg.type === "user"
                      ? "bg-orange-500 text-white ml-auto"
                      : "bg-orange-50 border border-orange-100 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>

              ))}

            </div>

          </div>

          {/* INPUT */}
          <div className="p-4 border-t flex items-center gap-3 bg-white">

            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-2xl px-4 py-2 outline-none"
            />

            <button
              onClick={handleChat}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-2xl"
            >

              <FiSend className="text-xl" />

            </button>

          </div>

        </div>

      )}

    </>
  );
}