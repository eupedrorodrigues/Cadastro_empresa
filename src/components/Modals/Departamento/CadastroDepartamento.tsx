import { useForm } from "react-hook-form"
import './CadastroDepartamento.css'
import IconX from "../../../assets/x.svg"

export const CadastroDepartamento = () => {

    const {register , handleSubmit , reset} = useForm();

    const handleSubmitData = (data: any) =>{
        console.log('submit' , data)
    }
    

  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(handleSubmitData)}>

          
            <button className="closeModal" onClick={reset}><img src={IconX}/></button>
          
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
  )
}

export default CadastroDepartamento