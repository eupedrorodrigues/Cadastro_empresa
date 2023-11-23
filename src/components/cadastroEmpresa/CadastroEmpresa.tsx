import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import './CadastroEmpresa.css'
import IconX from "../../assets/x.svg"

interface CadastroEmpresaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroEmpresa: React.FC<CadastroEmpresaProps> = ( {isOpen, onClose}) => {

    const {register , handleSubmit, reset} = useForm();

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
    

  return isOpen ?(
    <div>
      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit(addRegisterCompany)}>

            <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>

            <div >
              <input {...register('companiesName')}  type="text" placeholder="Nome do Empresa" required/>
            </div>

            <div>
              <input {...register('ceo')} type="text" placeholder="Ceo" required/>
            </div>

            <div>
              <input {...register('cnpj')} type="text" placeholder="CNPJ" required/>
            </div>

            <div>
              <input {...register('niche')} placeholder="Nicho" required/>
            </div>

            <div>
              <input type='date' {...register('creationDate')} placeholder="data de criação" required/>
            </div>

            <button placeholder="Enviar" className="submit">Enviar</button>
            
          </form>
        </div>
      </div>
    </div>
  ): null;
}

export default CadastroEmpresa