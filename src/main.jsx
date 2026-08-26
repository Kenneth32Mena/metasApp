import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Principal  from './components/compartidos/Principal.jsx';
import Encabezado from './components/compartidos/Encabezado.jsx';
import Pie from './components/compartidos/Pie.jsx';
import Lista from './components/lista/Lista.jsx';
let root =createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Encabezado/>
    <Principal>
    <Lista/>
    </Principal>
    <Pie/>
  </StrictMode>
)
