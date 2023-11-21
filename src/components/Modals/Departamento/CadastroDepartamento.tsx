import { useForm } from "react-hook-form"
import './CadastroDepartamento.css'

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
            <input {...register('nomeEmpresa')}  type="text" placeholder="Nome do Departamento" required/>
            </div>

            <div>
            <input {...register('responsavel')} type="text" placeholder="responsável" required/>
            </div>

            <div>
            <input {...register('cnpj')} type="text" placeholder="CNPJ que ele pertence" required/>
            </div>

            <div>
            <textarea {...register('descricao')} placeholder="descrição" required/>
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