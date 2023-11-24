import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CardInf.module.css';

interface UserData {
  category: string;
  priority: string;
  taskName: string;
  startDate: string;
  finishDate: string;
  status: string;
  departmentId: string; 
  id: string;
}

const CardInf: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState<UserData[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/task?limit=3&offset=0', {
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
      const response = await fetch(`http://localhost:5002/api/companies/${id}`, {
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
                <p>Categoria: {record.category}</p>
                <p>Prioridade: {record.priority}</p>
                <p>Nome da tarefa: {record.taskName}</p>
                <p>Data de Início: {record.startDate}</p>
              </div>
              <div className={styles.Infdir}>
                <p>Data de término: {record.finishDate}</p>
                <p>Status: {record.status}</p>
                <p>Id do departamento: {record.status}</p>
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
