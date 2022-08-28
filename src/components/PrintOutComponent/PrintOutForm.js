import React from 'react'
import Sidebar from 'components/Sidebar';
import styled from "styled-components";
import line from "../../assets/img/line.png"; 
import sig from "../../assets/img/newsig.png";


const PrintOutForm = () => {
  return (
    <>
    <Sidebar />
    <div>
       <div class="grid grid-cols-5 py-4 mx-4 bg-red-50">
       <div class="bg-red-50 col-span-4"> 
       <FlexColumnRoot>
      <Text1>Course Form</Text1>
      <Paragraph>First semester for 2020-2021 academic section</Paragraph>
     </FlexColumnRoot>
       
       </div>
       <div class="bg-red-50">   
       <ImageRoot src={`https://file.rendit.io/n/HevefFfaBpcI7BiefuDM.png`} /> 
       </div>  
     
    </div> 




    <div className='bg-gray-100 mx-10 my-16 px-3'> 

       <div>
       <FlexColumn1>
          <Image1 src={`https://file.rendit.io/n/JnOqE2H4quDJGQJVpikq.png`} />
          <Text2>Federal University of Technology Akure</Text2>
          <Text3 alignSelf={`inherit`}>Course Form</Text3>
        </FlexColumn1>
       </div>


       <div>
       <div class="grid grid-cols-5 py-4 bg-gray-100">
       <div class="bg-gray-100 col-span-4"> 
       <FlexColumn2>
            <FlexRow2 gap={`27px`}>
              <Text3 alignSelf={`inherit`}>Matric Number:</Text3>
              <Text3 alignSelf={`flex-end`}>STA/20/7009</Text3>
            </FlexRow2>
            <FlexRow2 gap={`57px`}>
              <Text3 alignSelf={`inherit`}>Full Name:</Text3>
              <Text3 alignSelf={`inherit`}>Ayomide Akinyemi</Text3>
            </FlexRow2>
            <FlexRow2 gap={`49px`}>
              <Text3 alignSelf={`inherit`}>Department:</Text3>
              <Text3 alignSelf={`inherit`}>Engineering</Text3>
            </FlexRow2>
            <FlexRow2 gap={`52px`}>
              <Text3 alignSelf={`inherit`}>Programme:</Text3>
              <Text3 alignSelf={`inherit`}>Statistics</Text3>
            </FlexRow2>
            <FlexRow2 gap={`87px`}>
              <Text3 alignSelf={`inherit`}>Level:</Text3>
              <Text3 alignSelf={`inherit`}>100</Text3>
            </FlexRow2>
            <FlexRow2 gap={'65px'}>
              <Text3 alignSelf={`inherit`}>Semester:</Text3>
              <Text3 alignSelf={`inherit`}>Second semester 2020-2021</Text3>
            </FlexRow2>
          </FlexColumn2> 
       </div>

       <div class="bg-red-100">  

       <Image5 src={`https://file.rendit.io/n/1nB8Oit7o66XHHYxSLxw.png`} />
       
       </div>   
     
    </div> 
       </div>
       
         <div className=' bg-white drop-shadow-md mx-4 pb-3 pr-3'>
       <div className='mx-auto pt-3'>
       <Text15>List of Registered</Text15>
       </div>
       {/* start here */}
       <div className=''>
       <table className='printform mx-auto my-10' style={{width:""}}>  
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}>S/N</th>
         <th style={{width:"100px"}}>Course Code</th>
         <th colspan="5"style={{width:"100px"}}><span>Course Title</span></th>
         <th></th>
         
          <th  style={{width:"90px"}}>Unit</th> 
           
         
     </tr> 
     <tr style={{height:"70px"}}>  
         <td >1</td> 
         <td>Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}>4</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td> 2</td>
         <td>Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td></td>
         
         <td>4</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td >3</td>
         <td >Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td></td>
         
         <td>4</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td >4</td>
         <td>Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td></td>
      
         <td>4</td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td>5</td>
         <td>Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td></td>
         
         <td>4</td> 
     </tr>

     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td >6</td>
         <td>Course Code</td>
         <td colspan="5" style={{paddingLeft:"10px"}}>Introduction to Statistics and Maths</td>
         <td></td>
         
         <td>4</td> 
     </tr>

     <tr style={{height:"70px",}}> 
         <td colspan="2" >Total Point </td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td>24</td>
         
     </tr>

    
     
     
 </table>
       </div>
         
         {/* next notice */}
   


         {/* notice here */}
         <div>
         <div class="grid grid-cols-5 py-4 mx-4  ">
       <div class=" mx-auto   col-span-2"> 
       
       <span>
       <Text22> Olabode Felix</Text22>
       <img src={line} alt="black line"/>
       <p className='text-sm leading-5 absolute ml-4 text-gray-500'>Student's Signature</p>
       </span>
       
       </div>
       <div class="mx-auto  pb-3">  
       <img  className='pl-6' src={sig} alt="signature"/> 
       <img src={line} alt="black line"/>
       <Text22> Date</Text22>
       </div>  
         </div>

       </div>



       <div className='justify mt-7'> 
       <WhiteFlexRowRoot>
      <FlexRowy>
       
        <Texty>Send to email</Texty>
      </FlexRowy> 
    </WhiteFlexRowRoot> 

       <WhiteFlexRowRoot>
      <FlexRowy>
        <Image2 src={`https://file.rendit.io/n/bZU5PXMNcb0WzKvUsJYL.svg`}  />
        <Texty>Download PDF</Texty>
      </FlexRowy> 
    </WhiteFlexRowRoot>  

     <RectangleRoot>
      <p className='text-white cursor-pointer pt-1 text-center'>Print</p>   
    </RectangleRoot>

    
     </div>
        
    </div>



    </div>


  </div> 


  
    </>
  )
}

const FlexColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  color: #df8909;
  align-self: flex-start;
  padding-left: 91px;
`;
const Paragraph = styled.div`
  font-size: 36px;
  font-family: Product Sans Medium;
  line-height: 34.92px;
  color: #2d0353;
`;

const ImageRoot = styled.img`
  width: 89px;
  height: 89px;
`;


const Image1 = styled.img`
  width: 96px;
  height: 94px;
  margin: 0px 0px 22px 0px;
`;
const Text2 = styled.div`
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  color: #2d0353;
  margin: 0px 0px 10px 0px;
`;

const Text3 = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;

const FlexColumn1 = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 37.5px 0px;
`;

const FlexColumn2 = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 11px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2px 0px 0px 0px;
`;



const Image5 = styled.img`
  width: 185px;
  height: 158px;
`;

const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;

const Text15 = styled.div`
  font-size: 22px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  margin-top: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;


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

const RectangleRoot = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 170px;
  height: 60px;
  background-color: #2d0353;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 20px; 
`;


const Text22 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
  margin-left: 30px;
`;








export default PrintOutForm