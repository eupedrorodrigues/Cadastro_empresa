import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroDepartamento from './components/Modals/CadastroDepartamento';
import CadastroEmpresa from './components/cadastroEmpresa/CadastroEmpresa'

function App() {
  return (
    <div className="App">
      <CadastroDepartamento/>
      <CadastroEmpresa/>
    </div>
  );
}

export default App;
