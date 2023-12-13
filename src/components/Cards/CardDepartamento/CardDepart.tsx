import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CardInf.module.css';
import EditDepartmentModal from './EditDepart';

interface UserData {
  departmentName: string;
  headOfTheDepartment: string;
  companiesCnpj: string;
  departmentDescription: string;
  id: string;
}

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

const CardInf: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState<UserData[] | null>(null);
  const [isDepartmentModalOpen, setDepartmentModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/department', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: UserData[] = await response.json();
      console.log('Data retrieved successfully:', responseData);

      const lastTwoRecords = responseData.slice(-3);
      setUserData(lastTwoRecords);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteCard = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5002/api/department/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Card deleted successfully');

      fetchData();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  useEffect(() => {
    if (!userData) {
      fetchData();
    }
  }, [userData]);

  const handleOpenDepartmentModal = () => {
    setDepartmentModalOpen(true);
  };

  const handleCloseDepartmentModal = () => {
    setDepartmentModalOpen(false);
  };

  return (
    <div>
      <div className={styles.CardInf}>
        {userData ? (
          userData.map((record, index) => (
            <div key={index} className={styles.BodyCard}>
              <div className={styles.Infesq}>
                <p>Nome do departamento: {record.departmentName}</p>
                <p>Responsável: {record.headOfTheDepartment}</p>
              </div>
              <div className={styles.Infdir}>
                <p>Descrição: {record.departmentDescription}</p>
              </div>
              <button className={styles.buttonEdit} onClick={handleOpenDepartmentModal}>Editar</button>
              {isDepartmentModalOpen && (
                <EditDepartmentModal
                  departmentId={record.id}
                  initialValues={{
                    departmentName: `${record.departmentName}`,
                    headOfTheDepartment: `${record.headOfTheDepartment}`,
                    departmentDescription: `${record.departmentDescription}`,
                    companiesCnpj: `${record.companiesCnpj}`,
                  }}
                  onClose={handleCloseDepartmentModal}
                />
              )}
              <button className={styles.button} onClick={() => deleteCard(record.id)}>Deletar</button>
            </div>

          ))
        ) : (
          <p style={{ display: 'flex', justifyContent: 'center', paddingTop: '5%' }}>
            Carregando dados do usuário...
          </p>
        )}

      </div>
    </div>
  );
};

export default CardInf;
