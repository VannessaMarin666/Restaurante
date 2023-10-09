import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidebar = ( ) => {
    return (
        <div className="md:2/5 x1:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white texte-2x1 tracking-wide text-center font-bold">Restaurante APP</p>
                <p className="mt-3 text-gray-600">Administrar tu Restaurante en las siguientes opciones</p>

                <nav className="mt-10">
                    <NavLink className= "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName= "text-yellow-500" end to ="/">ORDENES</NavLink>
                    <NavLink className= "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName= "text-yellow-500" end to ="/menu">MENU</NavLink>

                </nav>

            </div>
        </div>



    );








}