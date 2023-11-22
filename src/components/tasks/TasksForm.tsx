import { useForm } from "react-hook-form";
import './TasksForm.css';
import axios from 'axios';

const TasksForm = () => {

    const {register , handleSubmit , reset} = useForm();

    const addTask = async (data: any) => {
      try {
          const response = await fetch('http://localhost:5002/api/task', {
              method: 'POST',
              mode: 'no-cors',
              headers: {
                  'Content-Type': 'application/json'
              }
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const responseData = await response.json();
          console.log("Create Success: ", responseData);
      } catch (error) {
          console.error("ERROR: ", error);
      }
  };
  

  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(addTask)}>

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
            <input {...register('departmentId')} type="text" placeholder="Departamento" required/>
            </div>

            <div className="date-start">
            <input type='text' {...register('StartDate')} placeholder="início - DD/MM/AA" required/>
            <input {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className="date-start">
            <input type='text' {...register('finishDate')} placeholder="término - DD/MM/AA" required/>
            <input {...register('status')} placeholder="Status"/>
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