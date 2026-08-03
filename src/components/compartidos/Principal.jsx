function Principal  ({children}) {
    return(
        <>
        <aside>
            <a href="/lista">Lista</a>
            <a href="/crear">Crear</a>
        </aside>
        <main>
            {children}
        </main>
        </>
    );
}
export default Principal;