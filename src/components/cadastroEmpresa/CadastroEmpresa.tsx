import { useForm } from "react-hook-form"
import styles from './CadastroEmpresa.module.css'
import IconX from "../../assets/x.svg"

interface CadastroEmpresaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroEmpresa: React.FC<CadastroEmpresaProps> = ( {isOpen, onClose}) => {

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
            
            <input className= {styles.inputBox} {...register('nomeEmpresa')}  type="text" placeholder="Nome do Empresa" required/>

            <input className= {styles.inputBox} {...register('ceo')} type="text" placeholder="Ceo" required/>

            <input className= {styles.inputBox} {...register('cnpj')} type="text" placeholder="CNPJ" required/>

            <input className= {styles.inputBox} {...register('nicho')} placeholder="nicho" required/>

            <input className= {styles.inputBox} type='date' {...register('date')} placeholder="data de criação" required/>

            <button placeholder="Enviar" className={styles.submit}>Enviar</button>
            
          </form>
        </div>
      </div>
    </div>
  ): null;
}

export default CadastroEmpresa