import estilos from "../compartidos/Meta.module.css";
import "./App.css"


function Meta( { id, detalles, eventos, icono, periodo, meta, plazo, completado }) {
    return (
        <>
            <div className={estilos.meta + " tarjeta"}>
                <div className="flex items-center">
                    <div className={estilos.icono}>{icono}</div>
                    <p className="text-xl ml-5 mr-10">{eventos}
                        <sub className="text-xs text-gray-500">/{periodo}</sub>
                    </p>
                    <div>{detalles}</div>
                </div>
                <div className="flex">
                    <div className="relative m-2 mx-5"> 
                        <p className="text-center"> {completado} de {meta}</p>
                        <div className={estilos.barra1}>

                            <div style={{ width: `${Math.round((completado/meta) *100)}%`}} 
                            className={estilos.barra2}></div>
                        </div>
                    </div>
                </div>
                <button className="boton boton--gris">Completado</button>
            </div>
        </>
    );
}

export default Meta;