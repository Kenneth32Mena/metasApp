import { useState } from 'react';
import estilos from './Detalles.module.css';
function Detalles() {
    const frecuencias = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: 'semana',
        meta: 52,
        plazo:'2027-01-01',
        completado: 0,
        icono: '🗿'
    })
    const {detalles,eventos,periodo,icono, meta,plazo} = form;
    const Actualizar = (prop) => (event) => {
        setForm((estado) => ({ ...estado, [prop]: event.target.value }));
    };
    const crear = async () => {
        console.log(form)
    }
    return (
        <div className="tarjeta"> 
            <form action="#" className="p-4">
                <label className="label">
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" className="input" value={detalles} onChange={Actualizar("detalles")}/>
                </label>
                <label className="label">
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?(ej. 1 vez a la semana)
                    <div className="flex mb-6">
                    <input type="number" className="input mr-6" value={eventos} onChange={Actualizar("eventos")}/>
                    <select className="input" value={periodo} onChange={Actualizar("periodo")}>
                        {frecuencias.map(frecuencia=> <option key={frecuencia} value={frecuencia}>{frecuencia}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input type="number"className="input"  value={meta} onChange={Actualizar("meta")}/>
                </label>
                <label className="label">
                    ¿TIENE UNA FECHA LIMITE?
                    <input type="date" className="input"  value={plazo} onChange={Actualizar("plazo")}/>
                </label>
                <label className="label">
                    ¿CUANTAS VECES HAZ COMPLETADO YA ESTA META?
                    <input type="number" className="input"  onChange={Actualizar("completado")}/>

                </label>
                <label className="label">
                    ESCOGE EL ICONO PARA LA META.
                    <select className='input' onChange={Actualizar("icono")}>
                        {iconos.map(icono => <option key={icono} value={icono}>{icono}</option>)}

                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro" onClick={crear}>Crear</button>

                <button className="boton boton--gris"> Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;