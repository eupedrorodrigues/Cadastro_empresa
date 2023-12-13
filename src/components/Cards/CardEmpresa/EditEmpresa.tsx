import React, { useState } from 'react';
import styles from './CardInf.module.css';
import { useQueryClient, useMutation } from 'react-query';

interface CompanyData {
  companiesName: string;
  ceo: string;
  creationDate: string;
  cnpj: string;
  niche: string;
}

interface EditCompanyModalProps {
  companyId: string;
  initialValues: CompanyData;
  onClose: () => void;
}

const updateCompany = async (cnpj: string, updatedData: CompanyData) => {
    try {
      const response = await fetch(`http://localhost:5002/api/companies/${cnpj}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();  // Obtém o texto da resposta de erro
        throw new Error(`Falha ao atualizar a empresa. Status: ${response.status}. Mensagem: ${errorText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      throw error;
    }
  };

const EditCompanyModal: React.FC<EditCompanyModalProps> = ({ companyId, initialValues, onClose }) => {
  const queryClient = useQueryClient();
  const [companyData, setCompanyData] = useState<CompanyData>(() => ({
    companiesName: initialValues?.companiesName || '',
    ceo: initialValues?.ceo || '',
    creationDate: initialValues?.creationDate || '',
    cnpj: initialValues?.cnpj || '',
    niche: initialValues?.niche || '',
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const mutation = useMutation(
    (updatedData: CompanyData) => updateCompany(companyId, updatedData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('companies');
        onClose();
      },
      onError: (error) => {
        console.error('Erro ao atualizar empresa:', error);
      },
    }
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(companyData);
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div>
      <div className={styles.modalBox}>
        <form className={styles.ModalForm} onSubmit={handleFormSubmit}>
            <label>
              Nome da Empresa:
              <input
                type="text"
                name="companiesName"
                value={companyData.companiesName}
                onChange={handleInputChange}
              />
            </label>

            <label>
              CEO:
              <input
                type="text"
                name="ceo"
                value={companyData.ceo}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Data de Criação:
              <input
                type="text"
                name="creationDate"
                value={companyData.creationDate}
                onChange={handleInputChange}
              />
            </label>

            <label>
              CNPJ:
              <input
                type="text"
                name="cnpj"
                value={companyData.cnpj}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Nicho:
              <input
                type="text"
                name="niche"
                value={companyData.niche}
                onChange={handleInputChange}
              />
            </label>

            <button className={styles.buttonModal} type="submit">Atualizar</button>
            <button className={styles.buttonModal} onClick={handleModalClose}>Fechar</button>
          </form>

          
        </div>
    </div>
  );
};

export default EditCompanyModal;
