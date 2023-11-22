import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import TasksForm from './components/tasks/TasksForm';
import CadastroEmpresa from './components/cadastroEmpresa/CadastroEmpresa';

function App() {
  return (
    <div className="App">
      <CadastroEmpresa/>
    </div>
  );
}

export default App;
