
import React, {useRef, useEffect, useState } from 'react'
import styled from "styled-components";  
import login from "../assets/img/login.PNG"; 
import "./br.css" 
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"; 
 

const SignUpNow = () => {

  const focusDiv = useRef();

    useEffect(() => {
  if(focusDiv.current) focusDiv.current.focus(); 
 }, [focusDiv]);



 //form validation
 const [inputValues, setInputValue] = useState({
  fName: "",
  lName: "",
  email: "",
  
});


const [validation, setValidation] = useState({
  fName: "",
  lName: "",
  email: "",
  
});

//handle change updates 
function handleChange(event) {
  const { name, value } = event.target;
  setInputValue({ ...inputValues, [name]: value }); 
}

const checkValidation = () => {
  let errors = validation;

  // SurName validation
  if (!inputValues.fName.trim()) {
    errors.fName = "Surname is required";
  } else {
    errors.fName = ""; 
  }
  //First Name validation
  if (!inputValues.lName.trim()) {
    errors.lName = "First name is required";  
  } else {
    errors.lName = "";
  }

  // email validation
  const emailCond =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  if (!inputValues.email.trim()) {
    errors.email = "Email is required";
  } else if (!inputValues.email.match(emailCond)) {
    errors.email = "Please type a valid email address "; 
  } else {
    errors.email = "";
  }

  setValidation(errors);
};

useEffect(() => { 
  checkValidation();
  //eslint-disable-next-line
}, [inputValues]);

const history = useHistory() 

const onSubmit = (e) => {
  e.preventDefault(); 
      history.push("/createpassword")     
}; 

    return  (
        <>

            <div class="bg-white">
            <div class="max-w-7xl  grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">

              <img width={1000} src={login} alt="Login" />
                
                         


              </div>
              <div class="col-span-12 md:col-span-12 lg:col-span-6 mx-auto"> 

            
              <RootRoot>
                
            <FlexRow>
            
              <Text1 >Are you a returning student?</Text1>

                <Link to="/login"> 
                <Text2>Login here</Text2> 
                </Link>
            
                
                    
            </FlexRow>

            <div>
            <FlexColumn>

                <FlexColumn1>
                <Text3>Sign up as new student here</Text3>

                <form id="registrationForm"  onSubmit={onSubmit}>           
                <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                <Text4 htmlFor="lName"> Surname</Text4>        
                 <input ref={focusDiv} className='form' placeholder='Akinyemi' type="string" 
                 onChange={(e) => handleChange(e)}
                 value={inputValues.lName}
                 id="lName" name="lName"/>  
                 {validation.fName && <p>{validation.fName}</p>}
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="fName"> First Name</Text4>        
                 <input ref={focusDiv} className='form' placeholder='Ayomide' type="string"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.fName} name="fName"
                    id="fName"
                   />  

             
             {validation.lName && <p>{validation.lName}</p>}  
          
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="JAMBREGNO"> Jamb reg no</Text4>         
                 <input ref={focusDiv} className='form' placeholder='JAMB/22/11' type="text" id="JAMBREGNO" required/>  
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}>  

                 <Text4 htmlFor="email"> Email</Text4>        
                 <input ref={focusDiv} className='form' placeholder='akinzzz@zzz.com' type="email" name="email"
                 onChange={(e) => handleChange(e)}
                value={inputValues.email}/>  
                {validation.email && <p>{validation.email}</p>}
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="parentemail"> Parent Email</Text4>        
                 <input ref={focusDiv} className='form' placeholder='akinzzz@zzz.com' type="email" id="parentemail" required/>   
                 </FlexColumn2>  
                 
                <button className='purplebtn' type='submit'>Sign Up</button> 
                </form> 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>
            </div>  
            
           </RootRoot>  


              
                </div>
              
            </div>
            </div>
          

          <br />
          <br />
          <br />
     
      
    
        </> 
           
    )
 
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};



const Text1 = styled.div`
font-size: 14px;
font-family: Roboto;
line-height: 21px;
color: #505050;
padding-top: 40px;


`;


const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px; 
  @media ${devices.mobileL} { 
    margin-left: 10px;  
  }  
  
 
`;
const FlexRow = styled.div`
    align-self: stretch;
    min-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 13px;
    align-items: flex-start;
    margin-right: 8px;

    @media ${devices.mobileL} {
      margin-right: 80px;  
    }  

    
  `;
  const Text2 = styled.div`
    font-size: 14px;
    font-family: Product Sans Black;
    text-decoration: underline;
    line-height: 21.21px;
    color: #df8909;
    padding-top: 40px;
    font-weight: 900;
  `;

const FlexColumn = styled.div`
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
  @media ${devices.tablet} {
     
    margin: auto;
    padding-bottom: 120px;
    padding-top: 250px;
    
  } 

 
`;
const FlexColumn1 = styled.div`
  max-height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 33px 0px;
`;

const Text3 = styled.div`
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  color: #505050; 
  align-self: flex-start;
  margin: 0px 0px 21px 0px;
  font-weight: 550;
  font-size: 24px;

`; 





export default SignUpNow;






















// import React from 'react'
// import styled from "styled-components";  
// import login from "../assets/img/login.PNG";
// import "./br.css" 
// import { Link } from 'react-router-dom';
 

// const SignupNow = () => {
 
//     return  (
//         <>
//         <section class=" mb-4 body-font overflow-hidden bg-white"> 
//         <div class="container ">
//           <div class="flex flex-wrap ">
//             <div class=" md:w-1/2 flex flex-col pb-2 -m-5 items-start">
//               <div class="flex items-center flex-wrap  w-full">
      
//               <img width={700} height={700} src={login} alt="Login" />
      
//                {/* -m-7 */}
      
//               </div> 
//             </div>
      
//             <div class="md:w-1/2 flex flex-col items-start my-5  ml-10 ">
//               <div class="flex items-center flex-wrap w-full">
               

//               <RootRoot>
//             <FlexRow>
//                 <Text1 alignSelf={`flex-end`}>Are you a returning student?</Text1>
//                 <Link to="/login"> 
//                 <Text2>Login here</Text2>
//                 </Link>
                
//             </FlexRow>

//             <div>
//             <FlexColumn>

//                 <FlexColumn1>
//                 <Text3>Sign up as new student here</Text3>

//                 <form>           
//                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

//                 <Text4 htmlFor="Surname"> Surname</Text4>        
//                  <input className='form' placeholder='Akinyemi' type="text" id="Surname"/>  
//                  </FlexColumn2> 
//                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

//                  <Text4 htmlFor="FirstName"> First Name</Text4>        
//                  <input className='form' placeholder='Ayomide' type="text" id="FirstName"/>  
//                  </FlexColumn2> 
//                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

//                  <Text4 htmlFor="JAMBREGNO"> Jamb reg no</Text4>         
//                  <input className='form' placeholder='JAMB/22/11' type="text" id="JAMBREGNO"/>  
//                  </FlexColumn2> 
//                  <FlexColumn2 margin={`0px 0px 10px 0px`}>  

//                  <Text4 htmlFor="email"> Email</Text4>        
//                  <input className='form' placeholder='akinzzz@zzz.com' type="email" id="email"/>  
//                  </FlexColumn2> 
//                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

//                  <Text4 htmlFor="parentemail"> Parent Email</Text4>        
//                  <input className='form' placeholder='akinzzz@zzz.com' type="email" id="parentemail"/>  
//                  </FlexColumn2>  
                 
//                 <button className='purplebtn' type='submit'>Sign Up</button> 
//                 </form> 
//                 <Text1>Forgot your password ?</Text1> 
//                 </FlexColumn1> 
//                 <div>
           
//              </div>
//             </FlexColumn>

//             </div>  
            
//            </RootRoot>  


              
//               </div> 
            
//             </div>
//           </div>
//         </div>
//       </section>

//        <div> 
       
//        </div>
//         </> 
           
//     )
 
// }

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };
// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(min-width: ${sizes.mobileL})`,
//   tablet: `(min-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };



// const Text1 = styled.div`
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #505050;
  
// `;
// const FlexColumn2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   justify-content: center;
//   align-items: center;
//   margin: ${(props) => props.margin};
// `;
// const Text4 = styled.label`
//   font-size: 16px;
//   font-family: Roboto;
//   line-height: 24px;
//   color: #505050;
//   align-self: flex-start;
// `;
// const RootRoot = styled.div`


//   width: 424px;
//   height: 549px;    

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-left: 20px; 

// `;
// const FlexRow = styled.div`
//   align-self: stretch;
//   height: 24px;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   gap: 13px;    
//   align-items: flex-start;
//   margin-right: 8px;
// `; 
// const Text2 = styled.div`
//   font-size: 14px;
//   font-family: Product Sans Black;
//   text-decoration: underline;
//   line-height: 21.21px;
//   color: #df8909;
// `;

// //flex column is the problem





// const FlexColumn = styled.div`
//   height: 400px; 
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 30px;

//   @media ${devices.laptop} {
//     margin-left: 90px;
//     height: 319px; 
//   }   


// `;
// const FlexColumn1 = styled.div`
//   height: 500px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0px 0px 33px 0px;
// `; 


// const Text3 = styled.div`
//   font-size: 24px;
//   font-family: Product Sans Medium;
//   line-height: 23.28px;
//   color: #505050; 
//   align-self: flex-start;
//   margin: 0px 0px 21px 0px;
//   font-weight: 550;
//   font-size: 24px;

// `; 






// export default SignupNow;


