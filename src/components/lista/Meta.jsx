import { Link } from "react-router-dom";
import estilos from "../compartidos/Meta.module.css";
import "./App.css";

function Meta({ id, detalles, eventos, icono, periodo, meta, completado }) {
	return (
		<>
			<Link to={`/lista/${id}`} className={estilos.meta + " tarjeta"}>
				<div className="flex items-center min-w-0">
					<div className={estilos.icono}>{icono}</div>
					<p className="text-xl ml-5 mr-5 shrink-0">
						{eventos}
						<sub className="text-xs text-gray-500">/{periodo}</sub>
					</p>
					<div className="truncate">{detalles}</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full min-w-0 px-2">
					<p className="text-center">
						{" "}
						{completado} de {meta}
					</p>
					<div className={estilos.barra1 + " mt-1"}>
						<div
							style={{
								width: `${Math.round((completado / meta) * 100)}%`,
							}}
							className={estilos.barra2}
						></div>
					</div>
				</div>
				<button className="boton boton--gris">Completado</button>
			</Link>
		</>
	);
}

export default Meta;
