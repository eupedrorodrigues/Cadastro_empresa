import { useForm } from "react-hook-form"
import styles from './CadastroFuncionario.module.css'
import IconX from "../../assets/x.svg"

interface CadastroFuncionariosProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroFuncionario: React.FC<CadastroFuncionariosProps> = ( {isOpen, onClose}) => {

    const {register , handleSubmit} = useForm();

    const handleSubmitData = (data: any) =>{
        console.log('submit' , data)
    }

    return isOpen ?(
    <div>

        <div className={styles.container}>
          <div className={styles.card}>

          
        
        <form onSubmit={handleSubmit(handleSubmitData)}>

          <button className={styles.closeModal} onClick={onClose}><img src={IconX} alt="fechar"/></button>
            
          <input className= {styles.inputBox} type='email '{...register('email')} placeholder="Email" required/>

          <input className= {styles.inputBox} {...register('role')} type="text" placeholder="Cargo" required/>
          
          <input className= {styles.inputBox} {...register('Department')} type="text" placeholder="Departamento" required/> 

          <div className={styles.dateStart}>
            <input className={styles.inputBox2} type='text' {...register('Birthday')} placeholder="Nascimento - DD/MM/AA" required/>
            <input className={styles.inputBox2} {...register('cnpj')} placeholder="CNPJ"/>
            <input className={styles.inputBox2} {...register('CPF')} placeholder="CPF"/>
          </div>

          <div className={styles.dateStart}>
            <input className={styles.inputBox1} type='text' {...register('department')} placeholder="Departamento" required/>
            <input className={styles.inputBox1} {...register('admission')} placeholder="Admissão"/>
          </div>



            <button placeholder="Enviar" className={styles.submit}>Enviar</button>
        </form>
        </div>
        </div>
    </div>
  ): null;
}

export default CadastroFuncionario