import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroDepartamento from './components/Modals/CadastroDepartamento';
import CadastroEmpresa from './components/cadastroEmpresa/CadastroEmpresa'
import TasksForm from './components/tasks/TasksForm';

function App() {
  return (
    <div className="App">
      <TasksForm/>
    </div>
  );
}

export default App;
