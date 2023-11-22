import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './CadastroFuncionario.css';

const CadastroFuncionario = () => {

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
    


  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(addRegisterEmployee)}>

          <div className="closeModal">
            <button type='reset' onClick={reset}>x</button>
          </div>
            <div>
            <input {...register('nomeEmployee')} type="text" placeholder="Nome do Funcionário" required/>
            </div>

            <div >
            <input type='email'{...register('email')} placeholder="Email" required/>
            </div>

            <div>
            <input {...register('role')} type="text" placeholder="Cargo" required/>
            </div>

            <div className="date-start">
              <input type='date' {...register('birthDate')} placeholder="Nascimento - DD/MM/AA" required/>
              <input {...register('companiesCNPJ')} placeholder="CNPJ"/>
              <input {...register('cpf')} placeholder="CPF"/>
            </div>

            <div className="date-start">
              <input type='text' {...register('departmentId')} placeholder="Departamento ID" required/>
              <input type='date' {...register('hireDate')} placeholder="Admissão"/>
              <input {...register('phoneNumber')} placeholder="Telefone"/>
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

export default CadastroFuncionario