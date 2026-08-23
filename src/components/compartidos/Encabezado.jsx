import  LogoSVG from "../../img/logo.svg?react";
import  PerfilSVG from "../../img/perfil.svg?react";
import "./encabezado.css";
import Vinculo from "./Vinculos";

function Encabezado() {
    return (
        <header className="encabezado">
            <div className="contenedor">
                <LogoSVG className="logo"/>
                <p className="titulo">Metas App</p>
            </div>
            <nav className="contenedor">

                 <Vinculo href="/perfil" texto="Perfil" Icono={PerfilSVG}/>
            </nav>
        </header>
    );
}
export default Encabezado;
