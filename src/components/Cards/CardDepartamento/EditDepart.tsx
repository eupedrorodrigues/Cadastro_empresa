import React, { useState } from 'react';
import styles from './CardInf.module.css';
import { useQueryClient, useMutation } from 'react-query';

interface DepartmentData {
  departmentName: string;
  headOfTheDepartment: string;
  departmentDescription: string;
  companiesCnpj: string;
}

interface EditDepartmentModalProps {
  departmentId: string;
  initialValues: DepartmentData;
  onClose: () => void;
}

interface UpdateDepartmentResponse {
  status: string;
  message: string;
}

interface ServerError {
  status: number;
  message: string;
}

const updateDepartment = async (id: string, updatedData: DepartmentData): Promise<UpdateDepartmentResponse> => {
  try {
    const response = await fetch(`http://localhost:5002/api/departments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorData: ServerError = {
        status: response.status,
        message: errorText,
      };
      console.error(`Falha ao atualizar o departamento. Status: ${response.status}. Mensagem: ${errorText}`);
      throw new Error(`Falha ao atualizar o departamento. Status: ${response.status}. Mensagem: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Erro ao atualizar departamento:', error);
    throw error;
  }
};

const EditDepartmentModal: React.FC<EditDepartmentModalProps> = ({ departmentId, initialValues, onClose }) => {
  const queryClient = useQueryClient();
  const [departmentData, setDepartmentData] = useState<DepartmentData>({
    departmentName: initialValues.departmentName || '',
    headOfTheDepartment: initialValues.headOfTheDepartment || '',
    departmentDescription: initialValues.departmentDescription || '',
    companiesCnpj: initialValues.companiesCnpj || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDepartmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const mutation = useMutation(
    (updatedData: DepartmentData) => updateDepartment(departmentId, updatedData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('departments');
        onClose();
      },
      onError: (error) => {
        console.error('Erro ao atualizar departamento:', error);
      },
    }
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(departmentData);
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div>
      <div className={styles.modalBox}>
        <form className={styles.ModalForm} onSubmit={handleFormSubmit}>
          <label>
            Nome do Departamento:
            <input
              type="text"
              name="departmentName"
              value={departmentData.departmentName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Chefe do Departamento:
            <input
              type="text"
              name="headOfTheDepartment"
              value={departmentData.headOfTheDepartment}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Descrição do Departamento:
            <input
              type="text"
              name="departmentDescription"
              value={departmentData.departmentDescription}
              onChange={handleInputChange}
            />
          </label>

          <label>
            CNPJ da Empresa:
            <input
              type="text"
              name="companiesCnpj"
              value={departmentData.companiesCnpj}
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

export default EditDepartmentModal;