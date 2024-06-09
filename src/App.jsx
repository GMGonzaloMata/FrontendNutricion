import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import FinalPage from './pages/FinalPage';
import Grafico from './pages/Graficos';
import Graficos2 from './pages/Graficos2';
import CombinedGraficos from './pages/CombinedGraficos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/grafico" element={<Grafico />} />
        <Route path="/grafico2" element={<Graficos2 />} />
        <Route path="/combined-graficos" element={<CombinedGraficos />} />
      </Routes>
    </Router>
  );
};

export default App;
