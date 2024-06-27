import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home_screen } from './screens/home_screen/home_screen';
import { Areas_screen } from './screens/areas_screen/areas_screen';
import { Formulario_screen } from './screens/formulario_screen/formulario_screen'; // Asumiendo que ya tienes esta pantalla
import { Clientes } from './components/tabla_cliente/clientes';
import { Cliente_screen } from './screens/cliente_screen/cliente_screen';
import { Abogados_screen } from './screens/abogados/abogados_screen';



function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home_screen />} />
        <Route path="/areas" element={<Areas_screen />} />
        <Route path="/formulario" element={<Formulario_screen />} />
        <Route path="/formulario" element={<Cliente_screen />} />
        <Route path="/clientes" element={<Clientes />} /> {/* Agrega la ruta para el componente Clientes */}
        <Route path="/abogados" element={<Abogados_screen />} />
      </Routes>
    </Router>
  );
}

export default App;
