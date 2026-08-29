import Principal from './Principal.jsx';
import Encabezado from './Encabezado.jsx';
import Pie from './Pie.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
           <Encabezado />
            <Principal>
                <Outlet>

                </Outlet>
            </Principal>
            <Pie />
        </>
    );
}

export default Layout;