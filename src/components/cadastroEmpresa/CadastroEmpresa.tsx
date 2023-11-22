import { useForm } from "react-hook-form";
import './CadastroEmpresa.css';


const CadastroEmpresa = () => {

    const {register , handleSubmit , reset} = useForm();

    // const handleSubmitData = (data: any) =>{
    //     console.log('submit' , data)
    // }

    const addTask = async (data: any) => {
      // try {
      //     const response = await fetch(('http://localhost:5002/api/companies'), {
      //         method: 'POST',
      //         headers: {
      //             'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({
      //             "companiesName": "AA",
      //             "creationDate": "2023-11-22",
      //             "ceo": "AAA",
      //             "cnpj": "05.250.882/0001-67",
      //             "niche": "AAAA"
      //         })
      //     });
  
      //     if (!response.ok) {
      //         throw new Error(`HTTP error! Status: ${response.status}`);
      //     }
  
      //     const responseData = await response.json();
      //     console.log("Create Success: ", responseData);
      // } catch (error) {
      //     console.error("ERROR: ", error);
      // }
      console.log(data)
  };

  return (
    <div>

        <div className="container">
          <div className="card">

          
        
        <form onSubmit={handleSubmit(addTask)}>

          <div className="closeModal">
            <button type='reset' onClick={reset}>x</button>
          </div>
            <div >
            <input {...register('companiesName')}  type="text" placeholder="Nome do Empresa" />
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
            <input type='date' {...register('creatDate')} placeholder="data de criação" />
            </div>

            <div>
            <input	type="submit" className="submit"/>
            </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default CadastroEmpresa