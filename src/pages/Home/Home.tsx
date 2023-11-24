import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Woman from "../../assets/woman.svg";
import CardFunc from "../../components/Cards/CardFunc/CardFunc";
import Cardinf from "../../components/Cards/CardEmpresa/CardInf";
import CardDepart from "../../components/Cards/CardDepartamento/CardDepart";
import CardTask from "../../components/Cards/CardTask/CardTask";
import { AiFillCaretRight } from "react-icons/ai";
import { CiCalculator1 } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import CadastroEmpresa from "../../components/cadastroEmpresa/CadastroEmpresa";
import CadastroFuncionario from "../../components/cadastroFuncionario/CadastroFuncionario";
import CadastroDepartamento from "../../components/cadastroDepartamento/cadastroDepartamento";
import TasksForm from "../../components/tasks/TasksForm";
import { Card } from "react-ionicons";



export const Home = () => {

  const [card, setCard] = useState("selectDreamCar");

  const [empresaContentVisible, setEmpresaContentVisible] = useState(false);
  const [funcionarioContentVisible, setFuncionarioContentVisible] = useState(false);
  const [taskContentVisible, setTaskContentVisible] = useState(false);
  const [departamentoContentVisible, setDepartamentoContentVisible] = useState(false);

  useEffect(() => {
    card === "empresa" ? setEmpresaContentVisible(true) : setEmpresaContentVisible(false);
    card === "funcionario" ? setFuncionarioContentVisible(true) : setFuncionarioContentVisible(false);
    card === "task" ? setTaskContentVisible(true) : setTaskContentVisible(false);
    card === "departamento" ? setDepartamentoContentVisible(true) : setDepartamentoContentVisible(false);
  }, [card]);

  const handleOnChange = (e:any) => {
    setCard(e.target.value);
  };
  

  const [isTasksFormOpen, setTasksFormState] = useState(false);
  const toggleTasksForm = () => setTasksFormState(!isTasksFormOpen);

  const [isCadastroDepartamentoOpen, setCadastroDepartamentoState] = useState(false);
  const toggleCadastroDepartamento = () => setCadastroDepartamentoState(!isCadastroDepartamentoOpen);

  const [isCadastroFuncionarioOpen, setCadastroFuncionarioState] = useState(false);
  const toggleCadastroFuncionario = () => setCadastroFuncionarioState(!isCadastroFuncionarioOpen);

  const [isCadastroEmpresaOpen, setCadastroEmpresaState] = useState(false);
  const toggleCadastroEmpresa = () => setCadastroEmpresaState(!isCadastroEmpresaOpen);

  return (
    <div>

      <CadastroEmpresa
      isOpen={isCadastroEmpresaOpen}
      onClose={toggleCadastroEmpresa}
      ></CadastroEmpresa>
      <CadastroFuncionario
      isOpen={isCadastroFuncionarioOpen}
      onClose={toggleCadastroFuncionario}
      ></CadastroFuncionario>
      <CadastroDepartamento
      isOpen={isCadastroDepartamentoOpen}
      onClose={toggleCadastroDepartamento}
      ></CadastroDepartamento>
      <TasksForm
      isOpen={isTasksFormOpen}
      onClose={toggleTasksForm}
      ></TasksForm>
      
      <div className={styles.body}>
        <aside className={styles.aside}>
          <div>
            <h4 className={styles.Start}> 
              <a href="a">Início</a>  
              <AiFillCaretRight className={styles.ColorIcon}/>
            </h4>
          </div>
          <div>
            <h4>Cadastro</h4>
          </div>
          <nav className={styles.navigation}>
            <div className={styles.IconOp}><IoPodiumOutline className={styles.ColorIconOP}/><button className={styles.btn} onClick={toggleCadastroEmpresa}>Empresa</button></div>
            <div className={styles.IconOp}><CiCalculator1 className={styles.ColorIconOP}/><button className={styles.btn} onClick={toggleCadastroDepartamento}>Departamento</button></div>
            <div className={styles.IconOp}><IoPeopleOutline className={styles.ColorIconOP}/><button className={styles.btn} onClick={toggleCadastroFuncionario}>Funcionários</button></div>
            <div className={styles.IconOp}><FaRegClipboard className={styles.ColorIconOP}/><button className={styles.btn} onClick={toggleTasksForm}>Tarefas</button></div>
          </nav>
        </aside>
        <div className={styles.content}>
          <section className={styles.Header}>
            <div className={styles.Card}>
              <div className={styles.BlueGradient}></div>
              <img src={Woman} alt="woman" style={{position: 'relative'}}/>
              <div className={styles.CardText}>
                <p>21 de Setembro, 2023</p>
                <h3>Bem vindo, user!</h3>
              </div>
            </div>
          </section>
          <select name="Cadastro" value={card} onChange={handleOnChange} id="Register">
            <option value="empresa">Cadastro Empresa</option>
            <option value="departamento">Cadastro Departamento</option>
            <option value="funcionario">Cadastro Funcionários</option>
            <option value="task">Cadastro Tarefas</option>
          </select>
          <hr />
          <section className={styles.Information}>
          
          {empresaContentVisible && <Cardinf/>}
          {funcionarioContentVisible && <CardFunc/>}
          {taskContentVisible && <CardTask/>}
          {departamentoContentVisible && <CardDepart/>}
          </section>
        </div>
      </div>
    </div>
  
  )
}

export default Home