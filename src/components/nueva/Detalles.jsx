import { useContext, useEffect, useState } from "react";
import estilos from "./Detalles.module.css";
import { Contexto } from "../../../servicios/Contexto";
import { useNavigate, useParams } from "react-router-dom";
import {
	actualizarMeta,
	borrarMeta,
	crearMeta,
} from "../../../servicios/Pedidos";
function Detalles() {
	const frecuencias = ["día", "semana", "mes", "año"];
	const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];
	const [estado, enviar] = useContext(Contexto);
	const { id } = useParams();
	const navegar = useNavigate();
	const [form, setForm] = useState({
		detalles: "",
		eventos: 1,
		periodo: "semana",
		meta: 52,
		plazo: "2027-01-01",
		completado: 0,
		icono: "🗿",
	});
	const { detalles, eventos, periodo, meta, plazo, completado } = form;
	const Actualizar = (prop) => (event) => {
		setForm((estado) => ({ ...estado, [prop]: event.target.value }));
	};
	const crear = async () => {
		const nuevaMeta = await crearMeta();
		enviar({ tipo: "crear", meta: nuevaMeta });
		navegar("/lista");
	};
	const cancelar = () => {
		navegar("/lista");
	};

	const borrar = async () => {
		await borrarMeta();
		enviar({ tipo: "borrar", id });
		navegar("/lista");
	};
	const actualizar = async () => {
		await actualizarMeta();
		enviar({ tipo: "actualizar", meta: form });
		navegar("/lista");
	};

	useEffect(() => {
		const metaMemoria = estado.objetos[id];
		if (!id) return;
		if (!metaMemoria) {
			return navegar("/NoEncontrado");
		}
		setForm(metaMemoria);
	}, [id, estado.objetos, navegar]);
	return (
		<div className="tarjeta">
			<form action="#" className="p-4">
				<label className="label">
					Describe tu meta
					<input
						placeholder="ej. 52 caminatas"
						className="input"
						value={detalles}
						onChange={Actualizar("detalles")}
					/>
				</label>
				<label className="label">
					¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?(ej. 1 vez a la
					semana)
					<div className="flex mb-6">
						<input
							type="number"
							className="input mr-6"
							value={eventos}
							onChange={Actualizar("eventos")}
						/>
						<select
							className="input"
							value={periodo}
							onChange={Actualizar("periodo")}
						>
							{frecuencias.map((frecuencia) => (
								<option key={frecuencia} value={frecuencia}>
									{frecuencia}
								</option>
							))}
						</select>
					</div>
				</label>
				<label className="label">
					¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
					<input
						type="number"
						className="input"
						value={meta}
						onChange={Actualizar("meta")}
					/>
				</label>
				<label className="label">
					¿TIENE UNA FECHA LIMITE?
					<input
						type="date"
						className="input"
						value={plazo}
						onChange={Actualizar("plazo")}
					/>
				</label>
				<label className="label">
					¿CUANTAS VECES HAZ COMPLETADO YA ESTA META?
					<input
						type="number"
						className="input"
						value={completado}
						onChange={Actualizar("completado")}
					/>
				</label>
				<label className="label">
					ESCOGE EL ICONO PARA LA META.
					<select className="input" onChange={Actualizar("icono")}>
						{iconos.map((icono) => (
							<option key={icono} value={icono}>
								{icono}
							</option>
						))}
					</select>
				</label>
			</form>
			<div className={estilos.botones}>
				{!id && (
					<button className="boton boton--negro" onClick={crear}>
						Crear
					</button>
				)}
				{id && (
					<button className="boton boton--negro" onClick={actualizar}>
						Actualizar
					</button>
				)}

				<button className="boton boton--rojo" onClick={borrar}>
					Borrar
				</button>
				<button className="boton boton--gris" onClick={cancelar}>
					{" "}
					Cancelar
				</button>
			</div>
		</div>
	);
}

export default Detalles;
