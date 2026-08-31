import { createContext, useReducer } from "react";

const listaMock = [
    {
        "id": "1",
        "detalles": "Correr por 30 minutos",
        "periodo": "día",
        "eventos": 1,
        "icono": "🏃",
        "meta": 365,
        "plazo": "2030-01-01",
        "completado": 25
    },
    {
        "id": "2",
        "detalles": "Leer 10 páginas",
        "periodo": "día",
        "eventos": 1,
        "icono": "📚",
        "meta": 30,
        "plazo": "2025-12-31",
        "completado": 12
    },
    {
         "id": "3",
        "detalles": "Viajar a parques nacionales",
        "periodo": "mes",
        "eventos": 1,
        "icono": "🛬",
        "meta": 6,
        "plazo": "2025-12-31",
        "completado": 2
    }
]

const estadoInicial = {
    orden: [],
    objetos: {}
};

function reductor(estado, accion) {
    switch(accion.tipo){
        case 'colocar': {
            const metas= accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta=> meta.id) ,
                objetos: metas.reduce((objeto,meta) => ({...objeto,[meta.id]: meta}), {})
            };
                return nuevoEstado
            
        }
        case 'crear': {
            const id= Math.random();
            const nuevoEstado = {
                orden: [...estado.orden, id] ,
                objetos: { ...estado.objetos,[id]: accion.meta}
            };
            return nuevoEstado;
        }
        default:
            return estado;
    }
}

const metas = reductor(estadoInicial,{tipo: 'colocar', metas: listaMock})


export const Contexto = createContext(null);
function Memoria({children}) {
     const [estado, enviar] =useReducer(reductor, metas);
    return ( 
        <>
        
        <Contexto.Provider value={[estado,enviar]}>
        {children}

        </Contexto.Provider>
        </>
     );
}

export default Memoria;