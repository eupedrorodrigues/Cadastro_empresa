import { useForm } from "react-hook-form"
import styles from "./CadastroDepartamento.module.css"
import IconX from "../../../assets/x.svg"

interface CadastroDepartamentoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroDepartamento: React.FC<CadastroDepartamentoProps> = ( {isOpen, onClose}) => {

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
            
            <input className= {styles.inputBox} {...register('nomeEmpresa')}  type="text" placeholder="Nome do Departamento" required/>
            
            <input className= {styles.inputBox} {...register('responsavel')} type="text" placeholder="responsável" required/>

            <input className= {styles.inputBox} {...register('cnpj')} type="text" placeholder="CNPJ que ele pertence" required/>
            
            <textarea {...register('descricao')} placeholder="descrição" required/>

            <button	className= {styles.submit}>Cadastrar</button>             
          </form>
        </div>
      </div>
    </div>
  ): null;
}

export default CadastroDepartamento