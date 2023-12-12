import { useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form"
import './CadastroEmpresa.css'
import IconX from "../../assets/x.svg"

interface CadastroEmpresaProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CompanyData{
  companiesName: string;
  ceo: string;
  cnpj: string;
  niche: string;
  creationDate: string;
}

interface ApiResponse{
  success: boolean;
  data: any;
  message: string;
}

export const CadastroEmpresa: React.FC<CadastroEmpresaProps> = ({isOpen, onClose}) => {

    const {register , handleSubmit, reset} = useForm<CompanyData>();

    const addRegisterCompany: SubmitHandler<CompanyData> = async (data) => {
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

        try {
          const responseData : ApiResponse = await response.json();
          console.log(responseData);
        } catch (Error) {
          console.log('Empresa criada com sucesso:')
          onClose();
        }
      } catch (error) {
        console.error('ERROR DE:', error);
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

            <div>
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