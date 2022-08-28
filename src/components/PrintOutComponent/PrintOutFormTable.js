
import React from 'react'
import PrintOutSelectForm from './PrintOutSelectForm'
import styled from "styled-components";

const PrintOutFormTable = () => {
  return (
    <div>
      
       <PrintOutSelectForm />
       <br />
       <br />

       <div className='bg-white ml-5 '> 
     <table className='Youresult' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}></th>
         <th style={{width:"100px"}}>Course Code</th>
         <th style={{width:"140px"}} >Department</th>
         <th style={{width:"140px"}}>Course Title</th>
         <th style={{paddingLeft:"0px", width:"90px"}}>Unit</th>
         <th style={{width:"90px"}}>Status</th>
         <th style={{width:"90px"}}>Semester</th> 
         <th style={{width:"90px"}}>Level</th>  
         
     </tr>

     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label for="firstcourse">STA 101</label></td>
         <td ><label for="firstcourse">STA 101</label></td>
         <td><label for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label for="firstcourse">4</label></td>
         <td><label for="firstcourse">C</label></td>
         <td><label for="firstcourse">First</label></td>
         <td><label for="firstcourse">100</label></td>
     </tr>

     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td>  </td>
         <td>STA 101</td>
         <td >Statistics</td> 
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>C</td>
         <td>First</td>
         <td>100</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td ></td>
         <td >STA 101</td>
         <td >Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>C</td>
         <td>First</td>
         <td>100</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td ></td>
         <td>STA 101</td>
         <td >Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>C</td>
         <td>First</td>
         <td>100</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td></td>
         <td>STA 101</td>
         <td >Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>C</td>
         <td>First</td>
         <td>100</td>
     </tr>

     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td ></td>
         <td>STA 101</td>
         <td>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td>4</td>
         <td>C</td>
         <td>First</td>
         <td>100</td>
     </tr>

     <tr style={{height:"70px",}}>  
         <td colspan="1" >Total Point </td>
         <td></td>
         <td></td>
         <td></td>
         <td>16</td>
         <td></td>
         <td></td> 
         <td></td>  
     </tr>

     <tr style={{height:"70px",}}> 
         <td >GPA </td> 
         <td></td>
         <td></td>
         <td></td>
         <td>3.0</td>
         <td></td>
         <td></td> 
         <td></td>  
     </tr>
     
     
 </table>

  
 
</div> 

<div className='justify mt-7'> 
       

       <WhiteFlexRowRoot>
      <FlexRowy>
        <Image2 src={`https://file.rendit.io/n/CBLQyHKVqIgSGQsrpKHW.svg`} />
        <Texty>Preview and print</Texty>
      </FlexRowy> 
    </WhiteFlexRowRoot>   

     

    
     </div>

    </div>
  )
}

const WhiteFlexRowRoot = styled.div`
  width: 180px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 12px 0px;
  margin-left: 20px; 
  cursor: pointer;
`;
const FlexRowy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: center;
  align-items: center;
`;
const Image2 = styled.img`
  width: 16px;
  height: 14px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const Texty = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  cursor: pointer;
`;

export default PrintOutFormTable