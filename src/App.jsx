import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModoLuz } from "./Componentes/ModoLuz.jsx";
import { ModoDark } from "./Componentes/ModoDark.jsx";
import { Footer } from "./Componentes/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { GuiaPage } from "./pages/GuiaPage.jsx";
import { ReferenciasPage } from "./pages/ReferenciasPage.jsx";
import { SobreNosPage } from "./pages/SobreNosPage.jsx";
import { JogoPage } from "./pages/JogoPage.jsx";
import { MateriaisPage } from "./pages/MateriaisPage.jsx";
import { useState, useEffect } from "react";

import aos from 'aos';
import 'aos/dist/aos.css';

export function App() {
  useEffect(() => {
    aos.init({ duration: 1100 });
  }, []);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const Layout = ({ children }) => {
    return dark ? (
      <ModoDark>
        {children}
        <Footer FooterTema={"FooterDark"} />
      </ModoDark>
    ) : (
      <ModoLuz>
        {children}
        <Footer FooterTema={"FooterLuz"} />
      </ModoLuz>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/sobre" element={
          <Layout>
            <SobreNosPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/guia" element={
          <Layout>
            <GuiaPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/referencias" element={
          <Layout>
            <ReferenciasPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/jogo" element={
          <Layout>
            <JogoPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/materiais" element={
          <Layout>
            <MateriaisPage dark={dark} setDark={setDark} />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}