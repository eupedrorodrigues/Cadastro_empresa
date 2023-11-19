import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroDepartamento from './components/Modals/CadastroDepartamento';
import CadastroEmpresa from './components/cadastroEmpresa/CadastroEmpresa'
import TasksForm from './components/tasks/TasksForm';
import CadastroFuncionario from './components/CadastroFuncionario/CadastroFuncionario';

function App() {
  return (
    <div className="App">
      <CadastroFuncionario/>
    </div>
  );
}

export default App;
