import { useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import './CadastroFuncionario.css'
import IconX from "../../assets/x.svg"

interface CadastroFuncionariosProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EmployeeData{
  nomeEmployee: string;
  email: string;
  role: string;
  departmentId: string;
  birthDate: string;
  companiesCNPJ: string;
  cpf: string;
  hireDate: string;
  phoneNumber: string;
}

interface ApiResponse{
  success: boolean;
  data: any;
  message: string;
}

export const CadastroFuncionario: React.FC<CadastroFuncionariosProps> = ({isOpen, onClose}) => {

  const {register , handleSubmit , reset} = useForm<EmployeeData>();

  const addRegisterEmployee : SubmitHandler<EmployeeData>  = async (data) => {
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

      try{
        const responseData : ApiResponse = await response.json();
        console.log(responseData);
      }catch(Error){
        console.log('Empresa criada com sucesso:')
        onClose();
      }
      
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
              <input className="inputBox" type='text'{...register('nomeEmployee')} placeholder="Nome do funcionário" required/>
            </div>

            <div >
              <input className="inputBox" type='email '{...register('email')} placeholder="Email" required/>
            </div>

            <div>
              <input className="inputBox" {...register('role')} type="text" placeholder="Cargo" required/>
            </div>

            <div>
              <input className="inputBox" {...register('departmentId')} type="text" placeholder="Id do Departamento" required/>
            </div>

            <div className="date-start">
              <input className="inputBox2" type='date' {...register('birthDate')} placeholder="Nascimento - DD/MM/AA" required/>
              <input className="inputBox2" {...register('companiesCNPJ')} placeholder="CNPJ"/>
              <input className="inputBox2" {...register('cpf')} placeholder="CPF"/>
            </div>

            <div className="date-start">
              <input className="inputBox1" {...register('hireDate')} type='date' placeholder="Admissão"/>
              <input className="inputBox1" {...register('phoneNumber')} type='text' placeholder="Telefone"/>
            </div>

            <button placeholder="Enviar" className="submit">Enviar</button>
        </form>
        </div>
        </div>
    </div>
  ): null;
}

export default CadastroFuncionario