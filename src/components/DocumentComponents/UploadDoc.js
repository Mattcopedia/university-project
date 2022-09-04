import Sidebar from 'components/Sidebar';
import React from 'react'
import styled from "styled-components"; 

const UploadDoc = () => {
  return (
    <>
    <Sidebar />
    <div className='bg-white mx-7 md:mx-7 lg:mx-72   my-6'>
    <UploadDocumentForAssessmentRoot>
      Upload document for assessment
    </UploadDocumentForAssessmentRoot>
    <div className='bg-gray-100 px-11 pt-3 pb-5 mt-7'>
        <div className='bg-gray-100'>
            
        <SelectAcademicYearRoot>
            Select Course      
        </SelectAcademicYearRoot>
{/* //pl-3 py-2 */}
            
        <div className="upload bg-gray-100 pl-3 py-2 ">
                <select style={{width: "400px"}}>
                    <option selected>CSC 201 </option> 
                    <option>CSC 102</option>
                    <option>CSC 102</option>
                    <option>CSC 102</option>
                    <option>CSC 102</option> 
                </select> 

                </div> 
            

                <SelectAcademicYearRoot1>
                 Description     
            </SelectAcademicYearRoot1> 

            <div className='desc ' >   
            <textarea  style={{border: "1px solid black"}}  rows="4" cols="47" placeholder='Assignment for STAT 200' id="FirstName"/>  
            </div>
          
            <SelectAcademicYearRoot2>
               Upload Document    
            </SelectAcademicYearRoot2> 

            <div className='upload'>
           <input type="file" id="myfile" name="myfile" />
            </div>

            <div className='upload'>
            <button className='sendbtn' type='submit'>Send</button> 
            </div>
        </div>

    </div>
    <br />
    <br />
    <br />
    </div> 
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


const UploadDocumentForAssessmentRoot = styled.div`
  mix-blend-mode: normal;
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  display: flex;
  flex-direction: row;
  justify-content: center;

`;


const SelectAcademicYearRoot = styled.label`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 320px;

  @media ${devices.mobileL} {  
   
    margin-left: 20px;
  } 
`;

const SelectAcademicYearRoot1 = styled.label`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 320px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 333px;

  @media ${devices.tablet} {  
   
    margin-left: 35px;
  } 

  @media ${devices.mobileL} {  
    margin-left: 38px;
   
  } 

`;

const SelectAcademicYearRoot2 = styled.label`
font-size: 16px;
font-family: Product Sans Medium;
line-height: 15.52px;
color: #2d0353;
margin-left: 20px;
display: flex;
flex-direction: row;
justify-content: center;
padding-right: 320px;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 333px;

@media ${devices.tablet} {  
 
  margin-left: 35px;
} 

@media ${devices.mobileL} {  
  margin-left: 38px;
 
} 

`;


export default UploadDoc