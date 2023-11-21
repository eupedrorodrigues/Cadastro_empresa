import { useForm } from "react-hook-form"
import './CadastroFuncionario.css'

const CadastroFuncionario = () => {

    const {register , handleSubmit , reset} = useForm();

    const handleSubmitData = (data: any) =>{
        console.log('submit' , data)
    }
    

  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(handleSubmitData)}>

          <div className="closeModal">
            <button type='reset' onClick={reset}>x</button>
          </div>
            <div >
            <input type='email '{...register('email')} placeholder="Email" required/>
            </div>

            <div>
            <input {...register('role')} type="text" placeholder="Cargo" required/>
            </div>

            <div>
            <input {...register('Department')} type="text" placeholder="Departamento" required/>
            </div>

            <div className="date-start">
            <input type='text' {...register('Birthday')} placeholder="Nascimento - DD/MM/AA" required/>
            <input {...register('cnpj')} placeholder="CNPJ"/>
            <input {...register('CPF')} placeholder="CPF"/>
            </div>

            <div className="date-start">
            <input type='text' {...register('department')} placeholder="Departamento" required/>
            <input {...register('admission')} placeholder="Admissão"/>
            </div>



            <div>
            <input	type="submit" className="submit"/>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default CadastroFuncionario