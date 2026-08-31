import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Memoria from '../servicios/Memoria.jsx';

let root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Memoria>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Memoria>
  </StrictMode>
)
