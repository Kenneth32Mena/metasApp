
import { Routes,Route } from 'react-router-dom';
import Layout from './components/compartidos/Layout';
import Lista from './components/lista/Lista.jsx';
import Detalles from './components/nueva/Detalles.jsx';
import NoEncontrado from './components/compartidos/NoEncontrado.jsx'
function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}> 
      <Route index element={<Lista/>}></Route>
      <Route path="/lista" element={<Lista/>} />    
      <Route path="/nueva" element={<Detalles/>} />
      </Route> 
      <Route path="*" element={<NoEncontrado />}>
      </Route>  
      </Routes>
    </>
  )
}

export default App
