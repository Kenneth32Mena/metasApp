import estilos from './Detalles.module.css';
function Nueva() {
    const frecuencias = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];


    return (
        <div className="tarjeta"> 
            <form action="#" className="p-4">
                <label className="label">
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" className="input" />
                </label>
                <label className="label">
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?(ej. 1 vez a la semana)
                    <div className="flex mb-6">
                    <input type="number" className="input mr-6" />
                    <select className="input">
                        {frecuencias.map(frecuencia=> <option value={frecuencia}>{frecuencia}</option>)}
                    </select>
                    </div>
                </label>
                <label className="label">
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input type="number"className="input" />
                </label>
                <label className="label">
                    ¿TIENE UNA FECHA LIMITE?
                    <input type="date" className="input" />
                </label>
                <label className="label">
                    ¿CUANTAS VECES HAZ COMPLETADO YA ESTA META?
                    <input type="number" className="input" />

                </label>
                <label className="label">
                    ESCOGE EL ICONO PARA LA META.
                    <select className='input'>
                        {iconos.map(icono => <option value={icono}>{icono}</option>)}

                    </select>
                </label>
            </form>
            <div className={estilos.botones}>
                <button className="boton boton--negro">Crear</button>

                <button className="boton boton--gris"> Cancelar</button>
            </div>
        </div>
    );
}

export default Nueva;