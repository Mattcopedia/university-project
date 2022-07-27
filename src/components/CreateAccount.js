

import { useHistory } from "react-router-dom";
import UnigiImage from '../assets/img/Group 1066.png'; 

const CreateAccount = () => {
        
    const history = useHistory() 

 
    
    const handleSubmit = (e) => {
      e.preventDefault();
  
        history.push("/")   
     
    };
   
    return (
        <>
 
    <div className="mx-auto ">
    <div className="md:flex flex-col lg:flex-row">   
       
      <div className="flex flex-grow-1">
        <img src={UnigiImage} width={500} height={500}  alt="Login" />  

      </div>

     
      <div className="w-full max-w-xs sm:ml-20  lg:mx-auto  mt-15 md:ml-6 my-auto ">     

      <h1 className=" mt-5 mx-auto mb-7 not-italic font-normal text-2xl"> Create your Student Account</h1>

    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
 
    <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="cars">Nationality:</label>
           
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="nationality" id="nationality" required>
            <option value="volvo">Nigerian</option>
            <option value="saab">South African</option>
            <option value="mercedes">Ghanian</option>
            <option value="audi">Other Countries</option>  
            </select>

        
       
            </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Address
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text"  placeholder="address" required /> 
    </div>

      <div className="mb-4">

    <label className="block text-gray-700 text-sm font-bold mb-2" for="state of origin">State of Origin:</label>
   <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="state of origin" id="state of origin" required>
   <option value="Lagos">Lagos</option>
   <option value="Abuja">Abuja</option>
   <option value="Kaduna">kaduna</option>
   <option value="Other states">Other states</option>  
    </select>
    </div>

    <div className="mb-4">

<label className="block text-gray-700 text-sm font-bold mb-2" for="state of origin">Religion:</label>
<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="state of origin" id="state of origin" required>
<option value="Lagos">Christianity</option>
<option value="Abuja">Islam</option>
<option value="Other states">Other Religions</option>   
</select>
</div>

<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="phone number">
        Parent/guardian phone number
      </label> 

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone number" type="text"  placeholder="phone number" required />
    </div>

    
    <div className="flex items-center justify-between ">
      <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 ml-7 px-20 rounded focus:outline-none focus:shadow-outline"  type="submit"> 
        Submit 
      </button>

    </div> 

    <div>    
  

    </div> 
  </form>

       </div>
      </div>
   </div>

  </> 
    );
    
}
    export default CreateAccount;   






   

  
 