import { useState } from "react";
import styles from "./Home.module.css";
import Woman from "../../assets/woman.svg";
import CardInf from "../../components/CardInf/CardInf";
import { AiFillCaretRight } from "react-icons/ai";
import { CiCalculator1 } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import CadastroEmpresa from "../../components/cadastroEmpresa/CadastroEmpresa";
import CadastroFuncionario from "../../components/cadastroFuncionario/CadastroFuncionario";
import CadastroDepartamento from "../../components/Modals/Departamento/CadastroDepartamento";
import TasksForm from "../../components/tasks/TasksForm";



const Home = () => {
  return (
    <div>
      
      <CadastroFuncionario></CadastroFuncionario>
      
      <div className={styles.body}>
        <aside className={styles.aside}>
          <div>
            <h4 className={styles.Start}> 
              <a href="">Início</a>  
              <AiFillCaretRight className={styles.ColorIcon}/>
            </h4>
          </div>
          <div>
            <h4>Cadastro</h4>
          </div>
          <nav className={styles.navigation}>
            <div className={styles.IconOp}><IoPodiumOutline className={styles.ColorIconOP}/><a href="">Empresa</a></div>
            <div className={styles.IconOp}><CiCalculator1 className={styles.ColorIconOP}/><a href="">Departamento</a></div>
            <div className={styles.IconOp}><IoPeopleOutline className={styles.ColorIconOP}/><a href="">Funcionários</a></div>
            <div className={styles.IconOp}><FaRegClipboard className={styles.ColorIconOP}/><a href="">Tarefas</a></div>
          </nav>
        </aside>
        <div className={styles.content}>
          <section className={styles.Header}>
            <div className={styles.Card}>
              <div className={styles.BlueGradient}></div>
              <img src={Woman} style={{position: 'relative'}}/>
              <div className={styles.CardText}>
                <p>21 de Setembro, 2023</p>
                <h3>Bem vindo, user!</h3>
              </div>
            </div>
          </section>
          <select name="Cadastro" id="Register">
            <option value="Empresa">Cadastro Empresa</option>
            <option value="Depar">Cadastro Departamento</option>
            <option value="">Cadastro Funcionários</option>
            <option value="">Cadastro Tarefas</option>
          </select>
          <hr />
          <section className={styles.Information}>
            <CardInf />
            <CardInf />
          </section>
        </div>
      </div>
    </div>
  
  )
}

export default Home