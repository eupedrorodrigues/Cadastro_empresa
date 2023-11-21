import { useForm } from "react-hook-form"
import './CadastroFuncionario.css'
import IconX from "../../assets/x.svg"

export const CadastroFuncionario = () => {

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
            <input className="inputBox" type='email '{...register('email')} placeholder="Email" required/>
            </div>

            <div>
            <input className="inputBox" {...register('role')} type="text" placeholder="Cargo" required/>
            </div>

            <div>
            <input className="inputBox" {...register('Department')} type="text" placeholder="Departamento" required/>
            </div>

            <div className="date-start">
            <input className="inputBox2" type='text' {...register('Birthday')} placeholder="Nascimento - DD/MM/AA" required/>
            <input className="inputBox2" {...register('cnpj')} placeholder="CNPJ"/>
            <input className="inputBox2" {...register('CPF')} placeholder="CPF"/>
            </div>

            <div className="date-start">
            <input className="inputBox1" type='text' {...register('department')} placeholder="Departamento" required/>
            <input className="inputBox1" {...register('admission')} placeholder="Admissão"/>
            </div>



            <button placeholder="Enviar" className="submit">Enviar</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default CadastroFuncionario