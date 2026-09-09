import { useContext } from "react";
import Meta from "./Meta";
import { Contexto } from "../../../servicios/Contexto";
import { Outlet } from "react-router-dom";

function Lista() {
	const [estado] = useContext(Contexto);
	return (
		<>
			{estado.orden.map((id) => (
				<Meta key={id} {...estado.objetos[id]} />
			))}
			<div>
				<Outlet />
			</div>
		</>
	);
}

export default Lista;
