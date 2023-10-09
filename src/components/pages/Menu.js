import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () =>{
    return (
        <>
        <h1 className="text-center  text-4x1 text-red-800"> Menu </h1>
        <Link to="/Plato" className='ml-3 bg-blue-800 hover:big-blue-400, inline-block mb-5 p-2 text-white uppercase font-bold'>AGREGAR PLATO 
        </Link>
        
        </>
    )

}

export default Menu;