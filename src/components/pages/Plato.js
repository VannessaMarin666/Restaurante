import React from "react";

const Plato =() =>{

    return (
        <>
            <h1 className="text-sky-600 m-4 font-ligth text-3x1">Agregar Plato</h1>   
            <div className="flex justify-center mt-10">
              <div className="w-full max-w-3x1">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre del plato</label>
                        <input
                            className="shadow appearance-none border rounded w.full py-2 text-gray-700 leading-tight focus:outline-none"
                            id="nombre"
                            type="text"
                            placeholder="Nombre del plato"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio del plato</label>
                        <input
                            className="shadow appearance-none border rounded w.full py-2 text-gray-700 leading-tight focus:outline-none"
                            id="precio"
                            type="number"
                            placeholder="$ 0.00"
                            min="0"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoria</label>
                        <select
                            className="shadow appearance-none border rounded w.full py-2 text-gray-700 leading-tight focus:outline-no"
                            id="categoria"
                        >
                            <option value="">---Seleccion---</option>
                            <option value="desayuno">Desayuno</option>
                            <option value="almuerzo">Almuerzo</option>
                            <option value="cena">Cenas</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="postre">Postre</option>
                            <option value="ensaladas">Ensaladas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>
                        <input
                            className="shadow appearance-none border rounded w.full py-2 text-gray-700 leading-tight focus:outline-none"
                            id="image"
                            type="file"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion </label>
                        <textarea
                            className="shadow appearance-none border rounded w.full py-2 text-gray-700 leading-tight focus:outline-none"
                            id="descripcion"
                            type="file"
                            placeholder="Descripcion del plato"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        className="bg-gray-900 hover:bg-gray-900 w-full mt-5 p-2 text-gray-700 leading-tight focus:outline-none"
                        value="Agregar"
                    />
                </form>
              </div>
            </div>     
        </>
    );
}