import Vinculo from './Vinculos';
import ListaSVG from "../../img/lista.svg?react";
import NuevaSVG from "../../img/nueva.svg?react";
import './principal.css';
function Principal({ children }) {
    return (
        <>
            <div className="principal">
                <aside className='aside'>
                    <Vinculo href="/lista" texto="Lista de Metas" Icono={ListaSVG}/>
                    <Vinculo href="/crear" texto="Nueva Meta" Icono={NuevaSVG}/>
                </aside>
                <main className='main'>
                    {children}
                </main>
            </div>
        </>
    );
}
export default Principal;
