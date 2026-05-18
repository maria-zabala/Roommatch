import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] p-10">

      {/* Título */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#0B1B3F]">
          Arriendos en Medellín
        </h1>

        <p className="text-gray-500 text-xl mt-2">
          6 resultados encontrados
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        <PropertyCard />
        <PropertyCard />
        <PropertyCard />

      </div>
    </div>
  );
}