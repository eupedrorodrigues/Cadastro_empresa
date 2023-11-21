import { useForm } from "react-hook-form"
import './TasksForm.css'

const TasksForm = () => {

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
            <input {...register('tasksName')}  type="text" placeholder="Nome da Tarefa" required/>
            </div>

            <div>
            <input {...register('category')} type="text" placeholder="Categoria" required/>
            </div>

            <div>
            <input {...register('Department')} type="text" placeholder="Departamento" required/>
            </div>

            <div className="date-start">
            <input type='text' {...register('StartDate')} placeholder="início - DD/MM/AA" required/>
            <input {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className="date-start">
            <input type='text' {...register('endDate')} placeholder="término - DD/MM/AA" required/>
            <input {...register('department')} placeholder="departamento"/>
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

export default TasksForm