import React, { useState, useEffect } from "react";
import Image from "next/image";
import LazyImage from "@/components/lazy-image/lazy-image";

const Header = (props: any) => {
    return(
        <nav className="flex relative w-full py-3 z-10 min-h-24">
        <div className="container max-w-screen-xl flex justify-between mx-auto">
            <figure className="absolute inline-block w-full top-0">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className="absolute w-full max-w-44"
              width={100}
              height={24}
              priority
            />
            </figure>
          <div className="flex items-center ml-44 select-none">
            <ul className="flex text-[#925b5b] text-base items-center">
              
                <li className="uppercase group relative inline-block mx-4">
                  <a href="#" className="cursor-pointer py-4">
                      Charts
                    </a>
                </li>
                |
                <li className="uppercase group relative inline-block mx-4">
                  <a href="#" className="cursor-pointer py-4">
                      Ventas
                    </a>
                </li>
                |
                <li className="uppercase group relative inline-block mx-4">

                  <span className="cursor-pointer py-4">Canales</span>
                      <ul className="absolute top-7 opacity-0 transform font-light min-w-48 h-0 group-hover:opacity-100 transition duration-500 ease-in-out text-sm bg-primary text-white group-hover:h-auto normal-case rounded-md divide-y divide-primary overflow-hidden">
                           <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Proveedores</a>
                            </li>
                            <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Servicios</a>
                            </li>
                      </ul>
                </li>
                |
                <li className="uppercase group relative inline-block mx-4">
                  <span className="cursor-pointer py-4">Contabilidad</span>
                      <ul className="absolute top-7 opacity-0 transform font-light min-w-48 h-0 group-hover:opacity-100 transition duration-500 ease-in-out text-sm bg-primary text-white group-hover:h-auto normal-case rounded-md divide-y divide-primary overflow-hidden">
                           <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Egresos</a>
                            </li>
                            <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Ingresos</a>
                            </li>
                            <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Relacion Mensual</a>
                            </li>
                            <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Cuentas por Cobrar</a>
                            </li>
                            <li className="hover:bg-[#1e88c1]">
                                <a href="#" className="block py-1.5 px-4 w-full">Cuentas por Pagar</a>
                            </li>
                      </ul>
                </li>
                |
                <li className="uppercase group relative inline-block mx-4">
                  <a href="#" className="cursor-pointer py-4">
                      Mi perfil
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;