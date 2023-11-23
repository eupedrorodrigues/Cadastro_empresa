import { useForm } from "react-hook-form"
import styles from './TasksForm.module.css'
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
      <div className={styles.container}>
        <div className={styles.card}>

          <form onSubmit={handleSubmit(handleSubmitData)}>
          
            <button className={styles.closeModal} onClick={onClose}><img src={IconX} alt="fechar"/></button>
            
            <input className={styles.inputBox} {...register('tasksName')}  type="text" placeholder="Nome da Tarefa" required/>
              
            <input className={styles.inputBox} {...register('category')} type="text" placeholder="Categoria" required/>
              
            <input className={styles.inputBox} {...register('Department')} type="text" placeholder="Departamento" required/>

            <div className={styles.dateStart}>
              <input className={styles.inputBox1} type='text' {...register('StartDate')} placeholder="início - DD/MM/AA" required/>
              <input className={styles.inputBox1} {...register('priority')} placeholder="prioridade"/>
            </div>

            <div className={styles.dateStart}>
              <input className={styles.inputBox1} type='text' {...register('endDate')} placeholder="término - DD/MM/AA" required/>
              <input className={styles.inputBox1} {...register('department')} placeholder="departamento"/>
            </div>
      
            <button placeholder="Enviar" className={styles.submit}>Enviar</button>

          </form>
        </div>
      </div>
    </div>
  ): null;
};

export default TasksForm