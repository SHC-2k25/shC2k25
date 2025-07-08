import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModoLuz } from "./Componentes/ModoLuz.jsx";
import { ModoDark } from "./Componentes/ModoDark.jsx";
import { Footer } from "./Componentes/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { GuiaPage } from "./pages/GuiaPage.jsx";
import { CadastroPage } from "./pages/CadastroPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { DashBoardPage } from "./pages/DashBoardPage.jsx";
import { ReferenciasPage } from "./pages/ReferenciasPage.jsx";
import { SobreNosPage } from "./pages/SobreNosPage.jsx";
import { JogoPage } from "./pages/JogoPage.jsx";
import { MateriaisPage } from "./pages/MateriaisPage.jsx";
import { CadMateriaisPage } from "./pages/CadMateriaisPage.jsx";
import { useState, useEffect } from "react";

export function App() {
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
        
        <Route path="/cadastro" element={
          <Layout>
            <CadastroPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/login" element={
          <Layout>
            <LoginPage dark={dark} setDark={setDark} />
          </Layout>
        } />
        
        <Route path="/dashboard" element={
          <Layout>
            <DashBoardPage dark={dark} setDark={setDark} />
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
        
        <Route path="/cadastro-materiais" element={
          <Layout>
            <CadMateriaisPage dark={dark} setDark={setDark} />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}