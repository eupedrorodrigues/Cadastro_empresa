import { useForm } from "react-hook-form"
import './TasksForm.css'
import IconX from "../../assets/x.svg"

interface TasksFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TasksForm: React.FC<TasksFormProps> = ( {isOpen, onClose}) => {

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
            <input className="inputBox" {...register('tasksName')}  type="text" placeholder="Nome da Tarefa" required/>
            </div>

            <div>
            <input className="inputBox" {...register('category')} type="text" placeholder="Categoria" required/>
            </div>

            <div>
            <input className="inputBox" {...register('Department')} type="text" placeholder="Departamento" required/>
            </div>

            <div className="date-start">
            <input className="inputBox1" type='text' {...register('StartDate')} placeholder="início - DD/MM/AA" required/>
            <input className="inputBox1" {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className="date-start">
            <input className="inputBox1" type='text' {...register('endDate')} placeholder="término - DD/MM/AA" required/>
            <input className="inputBox1" {...register('department')} placeholder="departamento"/>
            </div>
      
            <button placeholder="Enviar" className="submit">Enviar</button>

          </form>
        </div>
      </div>
    </div>
  ): null;
};

export default TasksForm