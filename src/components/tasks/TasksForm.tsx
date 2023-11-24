import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './TasksForm.css';
import IconX from "../../assets/x.svg";

interface TasksFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TasksForm: React.FC<TasksFormProps> = ( {isOpen, onClose}) => {

    const {register , handleSubmit, reset} = useForm();

    const addRegisterTasks = async (data: any) => {
      try {
        const response = await fetch('http://localhost:5002/api/task', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
   
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
   
        const responseData = await response.json();
        console.log('Create Success:', responseData);
        reset();
      } catch (error) {
        console.error('ERROR:', error);
        
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          
        } catch (error) {
          console.error('ERROR:', error);
        }
      };
   
      fetchData();
    }, []);

  return isOpen ?(
    <div>
      <div className="container">
        <div className="card">

          <form onSubmit={handleSubmit(addRegisterTasks)}>

          <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>
          
            <div >
              <input className="inputBox" {...register('taskName')}  type="text" placeholder="Nome da Tarefa" required/>
            </div>

            <div>
              <input className="inputBox" {...register('category')} type="text" placeholder="Categoria" required/>
            </div>

            <div>
              <input className="inputBox" {...register('departmentId')} type="text" placeholder="ID do Departamento" required/>
            </div>

            <div className="date-start">
              <input className="inputBox1" type='date' {...register('startDate')} required/>
              <input className="inputBox1" type='text' {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className="date-start">
              <input className="inputBox1" type='date' {...register('finishDate')} required/>
              <input className="inputBox1" type='text' {...register('status')} placeholder="Status"/>
            </div>
      
            <button placeholder="Enviar" className="submit">Enviar</button>

          </form>
        </div>
      </div>
    </div>
  ): null;
};

export default TasksForm