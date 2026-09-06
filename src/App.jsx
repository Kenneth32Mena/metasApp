
import { Routes,Route } from 'react-router-dom';
import Layout from './components/compartidos/Layout';
import Lista from './components/lista/Lista.jsx';
import Detalles from './components/nueva/Detalles.jsx';
import NoEncontrado from './components/compartidos/NoEncontrado.jsx'
import Modal from './components/compartidos/Modal.jsx';
import { useContext, useEffect} from 'react';
import { pedirMetas } from '../servicios/Pedidos.jsx';
import { Contexto } from '../servicios/Memoria.jsx';
function App() {
   const [,enviar]= useContext(Contexto);
 useEffect(() =>{
        pedirMetas().then(metas => enviar({tipo:'colocar', metas}))
    },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index element={<Lista/>}></Route>
      <Route path="/lista" element={<Lista/>} />   
            <Route path="/lista/:id" element={<Modal><Detalles/></Modal>} />    
 
      <Route path="/nueva" element={<Detalles/>} />
      </Route> 
      <Route path="*" element={<NoEncontrado />}>
      </Route>  
      </Routes>
    </>
  )
}

export default App
