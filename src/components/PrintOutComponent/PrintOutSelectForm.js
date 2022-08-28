import React from 'react'
import Sidebar from 'components/Sidebar';
import styled from "styled-components";
import SearchFeature from 'components/ResultsComponents/SearchFeature';



const PrintOutSelectForm = () => {

    return (
      <> 
      <Sidebar />

      <div class="grid grid-cols-5 py-4 mx-4 bg-red-50">
       <div class="bg-red-50 col-span-4"> 
       <FlexColumnRoot>
      <Paragraph>Print Out</Paragraph> 
     </FlexColumnRoot>
       
       </div>
       <div class="bg-red-50">   
       <ImageRoot src={`https://file.rendit.io/n/HevefFfaBpcI7BiefuDM.png`} /> 
       </div>  
     
    </div>  

    <div>
    <SelectAcademicYearRoot>Select academic year/semester </SelectAcademicYearRoot>
     <SearchFeature />

    </div>

      </>
    )
}

const FlexColumnRoot = styled.div`
  
  flex-direction: column;
  gap: 15px;
 
`;


const Paragraph = styled.div`
  font-size: 36px;
  font-family: Product Sans Medium;
  line-height: 34.92px;
  color: #2d0353;
  text-align: left;
  padding-left: 91px;
`; 

const ImageRoot = styled.img`
  width: 89px;
  height: 89px;
`;

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
  padding-top: 20px;
`;


export default PrintOutSelectForm;