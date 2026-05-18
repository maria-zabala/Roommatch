import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PropertyCard() {
  const images = [
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858",
  ];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      {/* Carrusel */}
      <div className="relative">

        <Swiper className="h-72">
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="Apartamento"
                className="w-full h-72 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-xl text-sm font-semibold z-10">
          Arriendo
        </div>

        {/* Favorito */}
        <button className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center text-xl z-10">
          ❤️
        </button>

        {/* Precio */}
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-3xl font-bold">
            $1.600.000
            <span className="text-lg font-normal">/mes</span>
          </h2>
        </div>
      </div>

      {/* Información */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#0B1B3F]">
          Apartamento moderno en Belén
        </h3>

        <p className="text-gray-500 mt-2">
          📍 Belén, Medellín
        </p>

        <div className="flex gap-6 mt-5 text-gray-600">
          <span>🛏 2</span>
          <span>🛁 2</span>
          <span>📐 75m²</span>
        </div>
      </div>
    </div>
  );
}