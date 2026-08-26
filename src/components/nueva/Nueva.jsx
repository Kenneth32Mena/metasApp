function Nueva() {
    const frecuencias = ["día", "semana", "mes", "año"];
    const iconos = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];


    return (
        <div>
            <form action="#">
                <label>
                    Describe tu meta
                    <input placeholder="ej. 52 caminatas" />
                </label>
                <label>
                    ¿CON QUE FRECUENCIA DESEAS CUMPLIR TU META?(ej. 1 vez a la semana)
                    <input type="number" />
                    <select>
                        {frecuencias.map(frecuencia=> <option value={frecuencia}>{frecuencia}</option>)}
                    </select>
                </label>
                <label>
                    ¿CUANTAS VECES DESEAS COMPLETAR ESTA META?
                    <input type="number" />
                </label>
                <label>
                    ¿TIENE UNA FECHA LIMITE?
                    <input type="date" />
                </label>
                <label>
                    ¿CUANTAS VECES HAZ COMPLETADO YA ESTA META
                    <input type="number" />

                </label>
                <label>
                    ESCOGE EL ICONO PARA LA META
                    <select>
                        {iconos.map(icono => <option value={icono}>{icono}</option>)}

                    </select>
                </label>
            </form>
            <div>
                <button></button>

                <button></button>
            </div>
        </div>
    );
}

export default Nueva;