import Vinculo from "./Vinculos";
import ListaSVG from "../../img/lista.svg?react";
import NuevaSVG from "../../img/nueva.svg?react";
import estilos from "./Principal.module.css";
interface PrincipalProps {
	children: React.ReactNode;
}
function Principal({ children }: PrincipalProps) {
	return (
		<>
			<div className={estilos.principal}>
				<aside className={estilos.aside}>
					<Vinculo
						to="/lista"
						texto="Lista de Metas"
						Icono={ListaSVG}
					/>
					<Vinculo to="/nueva" texto="Nueva Meta" Icono={NuevaSVG} />
				</aside>
				<main className={estilos.main}>{children}</main>
			</div>
		</>
	);
}
export default Principal;
