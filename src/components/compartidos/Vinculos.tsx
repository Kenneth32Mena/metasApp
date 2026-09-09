import { Link } from "react-router-dom";
import estilos from "./Vinculos.module.css";
interface VinculoProps {
	Icono: any;
	texto: String;
	to: string;
}
function Vinculo({ Icono, texto, to }: VinculoProps) {
	return (
		<>
			<Link to={to} className={estilos.vinculo}>
				<Icono className={estilos.icono} />
				{texto && <span className={estilos.texto}>{texto}</span>}
			</Link>
		</>
	);
}
export default Vinculo;
