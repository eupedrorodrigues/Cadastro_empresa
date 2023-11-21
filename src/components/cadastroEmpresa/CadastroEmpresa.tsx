import { useForm } from "react-hook-form"
import './CadastroEmpresa.css'
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
      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit(handleSubmitData)}>

            <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>

            <div >
              <input {...register('nomeEmpresa')}  type="text" placeholder="Nome do Empresa" required/>
            </div>

            <div>
              <input {...register('ceo')} type="text" placeholder="Ceo" required/>
            </div>

            <div>
              <input {...register('cnpj')} type="text" placeholder="CNPJ" required/>
            </div>

            <div>
              <input {...register('nicho')} placeholder="nicho" required/>
            </div>

            <div>
              <input type='date' {...register('date')} placeholder="data de criação" required/>
            </div>

            <button placeholder="Enviar" className="submit">Enviar</button>
            
          </form>
        </div>
      </div>
    </div>
  ): null;
}

export default CadastroEmpresa