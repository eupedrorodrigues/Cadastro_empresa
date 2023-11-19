import { useForm } from "react-hook-form"
import './CadastroEmpresa.css'

const CadastroDepartamento = () => {

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
            <button type='submit' onClick={reset}>x</button>
          </div>
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

            <div>
            <input	type="submit" className="submit"/>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default CadastroDepartamento