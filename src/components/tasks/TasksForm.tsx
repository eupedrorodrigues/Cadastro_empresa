import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './TasksForm.css';
import axios from 'axios';

const TasksForm = () => {

    const {register , handleSubmit , reset} = useForm();

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
  

  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(addRegisterTasks)}>

          <div className="closeModal">
            <button type='reset' onClick={reset}>x</button>
          </div>
            <div >
            <input {...register('taskName')}  type="text" placeholder="Nome da Tarefa" required/>
            </div>

            <div>
            <input {...register('category')} type="text" placeholder="Categoria" required/>
            </div>

            <div>
            <input {...register('departmentId')}  type="text" placeholder="Departamento ID" required/>
            </div>

            <div className="date-start">
            <input type='date' {...register('startDate')}  required/>
            <input {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className="date-start">
            <input type='date' {...register('finishDate')} required/>
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