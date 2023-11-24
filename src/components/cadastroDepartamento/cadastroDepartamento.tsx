import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import styles from './cadastroDepartamento.module.css'
import IconX from "../../assets/x.svg"

interface CadastroDepartamentoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CadastroDepartamento: React.FC<CadastroDepartamentoProps> = ( {isOpen, onClose}) => {

    const {register , handleSubmit, reset} = useForm();

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
    

  return isOpen ?(
    <div>
      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit(addRegisterDepartment)}>

            <button className="closeModal" onClick={onClose}><img src={IconX} alt="fechar"/></button>

            <div >
              <input className="inputBox" {...register('departmentName')}  type="text" placeholder="Nome do Departamento" required/>
            </div>

            <div>
              <input className="inputBox" {...register('headOfTheDepartment')} type="text" placeholder="responsável" required/>
            </div>

            <div>
              <input className="inputBox" {...register('companiesCnpj')} type="text" placeholder="CNPJ que ele pertence" required/>
            </div>

            <div>
                <textarea {...register('departmentDescription')} placeholder="descrição" required/>
            </div>

            <button placeholder="Enviar" className="submit">Enviar</button>
            
          </form>
        </div>
      </div>
    </div>
  ): null;
}

export default CadastroDepartamento