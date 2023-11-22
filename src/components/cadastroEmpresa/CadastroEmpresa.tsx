import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './CadastroEmpresa.css';
 
const CadastroEmpresa = () => {
  const { register, handleSubmit, reset } = useForm();
 
  const addRegisterCompany = async (data: any) => {
    try {
      const response = await fetch('http://localhost:5002/api/companies', {
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
          <form onSubmit={handleSubmit(addRegisterCompany)}>
            <div className="closeModal">
              <button type="reset" onClick={() => reset()}>
                x
              </button>
            </div>
 
            <div>
              <input {...register('companiesName')} type="text" placeholder="Nome do Empresa" />
            </div>
 
            <div>
              <input {...register('ceo')} type="text" placeholder="Ceo" />
            </div>
 
            <div>
              <input {...register('cnpj')} type="text" placeholder="CNPJ" />
            </div>
 
            <div>
              <input {...register('niche')} placeholder="nicho" />
            </div>
 
            <div>
              <input type="date" {...register('creatDate')} placeholder="data de criação" />
            </div>
 
            <div>
              <input type="submit" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default CadastroEmpresa;