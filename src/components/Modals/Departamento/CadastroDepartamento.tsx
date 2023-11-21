import { useForm } from "react-hook-form"
import './CadastroDepartamento.css'
import IconX from "../../../assets/x.svg"

interface CadastroDepartamentoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroDepartamento: React.FC<CadastroDepartamentoProps> = ( {isOpen, onClose}) => {

    const {register , handleSubmit , reset} = useForm();

    const handleSubmitData = (data: any) =>{
        console.log('submit' , data)
    }


  return isOpen ?(
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(handleSubmitData)}>

          
            <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>
          
            <div >
            <input className="inputBox" {...register('nomeEmpresa')}  type="text" placeholder="Nome do Departamento" required/>
            </div>

            <div>
            <input className="inputBox" {...register('responsavel')} type="text" placeholder="responsável" required/>
            </div>

            <div>
            <input className="inputBox" {...register('cnpj')} type="text" placeholder="CNPJ que ele pertence" required/>
            </div>

            <div>
            <textarea {...register('descricao')} placeholder="descrição" required/>
            </div>

            <button	className="submit">Cadastrar</button>
            
        </form>
        </div>
        </div>
    </div>
  ): null;
}

export default CadastroDepartamento