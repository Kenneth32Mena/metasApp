import Meta from "./Meta";
const listaMock = [
    {
        "id": "1",
        "detalles": "Correr por 30 minutos",
        "periodo": "día",
        "eventos": 1,
        "icono": "🏃",
        "meta": 365,
        "plazo": "2030-01-01",
        "completado": 25
    },
    {
        "id": "2",
        "detalles": "Leer 10 páginas",
        "periodo": "día",
        "eventos": 1,
        "icono": "📚",
        "meta": 30,
        "plazo": "2025-12-31",
        "completado": 12
    },
    {
         "id": "3",
        "detalles": "Viajar a parques nacionales",
        "periodo": "mes",
        "eventos": 1,
        "icono": "🛬",
        "meta": 6,
        "plazo": "2025-12-31",
        "completado": 2
    }
]

function Lista() {
    return (
        listaMock.map((meta) => (<Meta key={meta.id} {...meta} />))
    );
}

export default Lista;