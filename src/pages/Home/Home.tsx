import styles from "./Home.module.css";
import Woman from "../../assets/woman.svg";
import CardInf from "../../components/CardInf/CardInf";

const Home = () => {
  return (
    <div>
      <div className={styles.body}>
        <aside className={styles.aside}>
          <div>
            <h4>
              <a href="">Início</a>  
            </h4>
          </div>
          <div>
            <h4>Cadastro</h4>
          </div>
          <nav className={styles.navigation}>
            <a href="">Empresa</a>
            <a href="">Departamento</a>
            <a href="">Funcionários</a>
            <a href="">Tarefas</a>
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