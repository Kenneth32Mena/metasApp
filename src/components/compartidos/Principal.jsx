import Vinculo from './Vinculos';
import ListaSVG from "../../img/lista.svg?react";
import NuevaSVG from "../../img/nueva.svg?react";
import estilos from './Principal.module.css';
function Principal({ children }) {
    return (
        <>
            <div className={estilos.principal}>
                <aside className={estilos.aside}>
                    <Vinculo href="/lista" texto="Lista de Metas" Icono={ListaSVG}/>
                    <Vinculo href="/crear" texto="Nueva Meta" Icono={NuevaSVG}/>
                </aside>
                <main className={estilos.main}>
                    {children}
                </main>
            </div>
        </>
    );
}
export default Principal;
