import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import { useEffect, useState } from "react";

export default function Home() {
  
  
  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      <Navbar />
      <div className="p-10">
      
    

    </div>

      <div className="mx-auto max-w-5xl px-6">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-2xl font-bold text-orange-500">Buscar Roomie</h1>
            <p class="mt-2 text-lg/8 text-gray-600">Busca en esta sección alguien que comparta su apartamento contigo.</p>
          </div>
          <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <img
                  src="/apartamento1.0.jpeg"
                  alt="apartamento1.0.jpeg"
                  className=" h-auto rounded-lg shadow-md"
                />
              </div>
              <div class="group relative grow">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    La Floresta, Comuna 12 La América, Medellín
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">Busco un roomie para compartir apartamento en La Floresta. Ambiente parchado y tranquilo y estoy en busca de una persona que sea profesional o estudiante y ordenado, y divertido.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4 justify-center w-full">
                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50" />
                <div class="text-sm/6 ">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Tu roomie: Mauricio Pérez
                    </a>
                  </p>
                  <p class="text-gray-600">Estudiante</p>
                </div>
              </div>
              <br />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-sm hover:bg-orange-600 transition justify-center w-full">
                Más información
              </button>
            </article>

            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <img
                  src="/apartamento2.0.jpeg"
                  alt="apartamento2.0.jpeg"
                  className=" h-auto rounded-lg shadow-md"
                />
              </div>
              <div class="group relative grow">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Robledo, Comuna 7 Robledo, Medellín
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">Busco un roomie para compartir apartamento en Robledo, La Campiña. Pet friendly. Preferiblemente alguien tranquilo y ordenado</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4 justify-center w-full">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50" />
                <div class="text-sm/6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Tu roomie: Andrea Vargas
                    </a>
                  </p>
                  <p class="text-gray-600">Estudiante, profesional</p>
                </div>
              </div>
              <br />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-sm hover:bg-orange-600 transition justify-center w-full">
                Más información
              </button>
            </article>

            <article class="flex max-w-xl flex-col items-start justify-between">
              <div class="flex items-center gap-x-4 text-xs">
                <img
                  src="/apartamento3.0.jpeg"
                  alt="apartamento3.0.jpeg"
                  className=" h-auto rounded-lg shadow-md"
                />
              </div>
              <div class="group relative grow">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    La America, Comuna 12 La América, Medellín
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">Arriendo habitación a persona tranquila, ordenada y aseada. Apartamento con buen acceso al transporte público, supermercados y zona rosa.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4 justify-center w-full">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-10 rounded-full bg-gray-50" />
                <div class="text-sm/6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Tu roomie: Jhon Álvarez
                    </a>
                  </p>
                  <p class="text-gray-600">Profesional</p>
                </div>
              </div>
              <br />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-sm hover:bg-orange-600 transition justify-center w-full">
                Más información
              </button>
            </article>
          </div>
        </div>
      </div>

      <ChatBox />

    </div>
  );
}