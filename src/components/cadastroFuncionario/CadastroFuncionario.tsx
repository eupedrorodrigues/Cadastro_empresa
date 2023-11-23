import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import './CadastroFuncionario.css'
import IconX from "../../assets/x.svg"

interface CadastroFuncionariosProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroFuncionario: React.FC<CadastroFuncionariosProps> = () => {

  const {register , handleSubmit , reset} = useForm();

  const addRegisterEmployee = async (data: any) => {
    try {
      const response = await fetch('http://localhost:5002/api/employee', {
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

          
        
        <form onSubmit={handleSubmit(addRegisterEmployee)}>

          <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>
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
  ): null;
}

export default CadastroFuncionario