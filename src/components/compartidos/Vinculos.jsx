
import "./vinculos.css";

function Vinculo ({Icono,texto,href}) {

return (
    <>
    <a href={href} className="vinculo">
        <Icono className="icono"/>
        <span  className="texto">{texto}</span>
    </a>
    </>
);
}
export default Vinculo