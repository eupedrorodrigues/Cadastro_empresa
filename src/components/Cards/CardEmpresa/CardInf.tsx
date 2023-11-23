import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './CardInf.module.css';

interface UserData {
  companiesName: string;
  creationDate: string;
  ceo: string;
  cnpj: string;
  niche: string;
}

const CardInf: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState<UserData[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/companies?limit=3&offset=0', {
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

  const deleteCard = async (cnpj: string) => {
    try {
      const response = await fetch(`http://localhost:5002/api/companies/${cnpj}`, {
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
                <p>Companhia: {record.companiesName}</p>
                <p>Ceo: {record.ceo}</p>
                <p>Nicho: {record.niche}</p>
              </div>
              <div className={styles.Infdir}>
                <p>CNPJ: {record.cnpj}</p>
                <p>Data de Criação: {record.creationDate}</p>
              </div>
              <button className={styles.button} onClick={() => deleteCard(record.cnpj)}>Deletar</button>
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
