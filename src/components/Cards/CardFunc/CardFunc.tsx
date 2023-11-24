import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CardInf.module.css';

interface UserData {
  nomeEmployee: string;
  birthDate: string;
  cpf: string;
  phoneNumber: string;
  email: string;
  role: string;
  hireDate: string;
  companiesCNPJ: string;
  departmentId: string;
  id: string;
}

const CardInf: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState<UserData[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/employee?limit=3&offset=0', {
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
      const response = await fetch(`http://localhost:5002/api/employee/${id}`, {
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






  return (
    <div>
      <div className={styles.CardInf}>
        {userData ? (
          userData.map((record, index) => (
            <div key={index} className={styles.BodyCard}>
              <div className={styles.Infesq}>
                <p>Nome do Funcionário: {record.nomeEmployee}</p>
                <p>Data de aniversário: {record.birthDate}</p>
                <p>Cargo: {record.role}</p>
                <p>CPF: {record.cpf}</p>
                <p>Email: {record.email}</p>
              </div>
              <div className={styles.Infdir}>
                <p>CNPJ da empresa: {record.companiesCNPJ}</p>
                <p>Data de admissão: {record.hireDate}</p>
                <p>Telefone: {record.phoneNumber}</p>
                <p>ID do departamento: {record.departmentId}</p>
              </div>
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
