import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import TasksForm from './components/tasks/TasksForm';
import CadastroEmpresa from './components/cadastroEmpresa/CadastroEmpresa';
import CadastroDepartamento from './components/Modals/Departamento/CadastroDepartamento';
import CadastroFuncionario from './components/cadastroFuncionario/CadastroFuncionario';

function App() {
  return (
    <div className="App">
      <TasksForm/>
    </div>
  );
}

export default App;
