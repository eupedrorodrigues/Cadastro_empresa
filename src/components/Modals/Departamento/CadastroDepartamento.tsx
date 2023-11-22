import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import './CadastroDepartamento.css'

const CadastroDepartamento = () => {

    const {register , handleSubmit , reset} = useForm();

    const addRegisterDepartment = async (data: any) => {
      try {
        const response = await fetch('http://localhost:5002/api/department', {
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

          
        
        <form onSubmit={handleSubmit(addRegisterDepartment)}>

          <div className="closeModal">
            <button type='submit' onClick={reset}>x</button>
          </div>
            <div >
            <input {...register('departmentName')}  type="text" placeholder="Nome do Departamento" required/>
            </div>

            <div>
            <input {...register('headOfTheDepartment')} type="text" placeholder="Responsável" required/>
            </div>

            <div>
            <input {...register('companiesCnpj')} type="text" placeholder="CNPJ que ele pertence" required/>
            </div>

            <div>
            <textarea {...register('departmentDescription')} placeholder="Descrição" required/>
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