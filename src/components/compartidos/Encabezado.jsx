import  LogoSVG from "../../img/logo.svg?react";
import  PerfilSVG from "../../img/perfil.svg?react";
import estilos from "./Encabezado.module.css";
import Vinculo from "./Vinculos";

function Encabezado() {
    return (
        <header className={estilos.encabezado}>
            <div className={estilos.contenedor}>
                <LogoSVG className={estilos.logo}/>
                <p className={estilos.titulo}>Metas App</p>
            </div>
            <nav className={estilos.contenedor}>

                 <Vinculo to="/perfil"  Icono={PerfilSVG}/>
            </nav>
        </header>
    );
}
export default Encabezado;
