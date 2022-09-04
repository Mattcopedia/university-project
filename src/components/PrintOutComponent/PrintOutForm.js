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




    <div className='bg-gray-100 py-5 md:mx-10 my-16 md:px-3'> 

       <div>
       <FlexColumn1>
          <Image1 src={`https://file.rendit.io/n/JnOqE2H4quDJGQJVpikq.png`} />
          <Text2>Federal University of Technology Akure</Text2>
          <Text3 alignSelf={`inherit`}>Course Form</Text3>
        </FlexColumn1>
       </div>


       <div>
       <div class="grid grid-cols-5 py-4 mx-2 bg-gray-100">
       <div class="bg-gray-100 col-span-4"> 
       <FlexColumn2>
            <FlexRow2 gap={`27px`}>
              <Text3 alignSelf={`inherit`}>Matric Number:</Text3>
              <Text3 alignSelf={`flex-end`}>STA/20/7009</Text3>
            </FlexRow2>
            {/* 57 */}
            <FlexRow3>
              <Text3 alignSelf={`inherit`}>Full Name:</Text3>
              <Text3 alignSelf={`flex-end`}>Ayomide <br className="responsivemodal"></br>    Akinyemi</Text3> 
            </FlexRow3>
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
              <Text3 alignSelf={`inherit`}>Second semester <br className="responsivemodal"></br>  2020-2021</Text3>
            </FlexRow2>
          </FlexColumn2> 
       </div>

       <div class="bg-red-100">  

       <Image5 src={`https://file.rendit.io/n/1nB8Oit7o66XHHYxSLxw.png`} />
       
       </div>   
     
    </div> 
       </div>
       
         <div className=' bg-white drop-shadow-md mx-3 pb-3  pr-3'>
       <div className='mx-auto pt-3'>
       <Text15>List of Registered</Text15>
       </div>
       {/* start here */}
       <div style={{overflowX: "auto"}} className=''>
       <table className='printform mx-auto my-10' style={{width:""}}>  
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}><TextX>S/N</TextX></th>
         <th style={{width:"100px"}}><TextX>Course Code</TextX></th>
         <th colspan="5"style={{width:"100px"}}><TextX>Course Title</TextX></th>
         <th></th>
         
          <th  style={{width:"90px"}}><TextX>Unit</TextX></th> 
           
         
     </tr> 
     <tr style={{height:"70px"}}>  
         <td ><label className="tabelinput" for="firstcourse">1</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
     <td ><label className="tabelinput" for="firstcourse">2</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>
     <tr style={{height:"70px"}}> 
     <td ><label className="tabelinput" for="firstcourse">3</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
     <td ><label className="tabelinput" for="firstcourse">4</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>
     <tr style={{height:"70px"}}> 
     <td ><label className="tabelinput" for="firstcourse">5</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>

     <tr style={{height:"70px"}}> 
     <td ><label className="tabelinput" for="firstcourse">6</label></td> 
         <td><label className="tabelinput" for="firstcourse">Course Code</label></td>
         <td colspan="5" style={{paddingLeft:"10px"}}><label className="tabelinput" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td style={{width:"90px"}}></td> 
        
         <td style={{width:"90px"}}><label className="tabelinput" for="firstcourse">4</label></td>
     </tr>

    

     <tr style={{height:"70px",}}> 
         <td colspan="2" ><TotalRoot>Total </TotalRoot> </td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td><TotalRoot>24</TotalRoot></td> 
         
     </tr> 

    
     
     
 </table>
       </div>
         
         {/* next notice */}
   


         {/* notice here */}
         <div>
         <div class="grid grid-cols-5 py-4 mx-4  ">
       <div class=" mx-auto  col-span-2"> 
       
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



       <div className='justifyprint mt-7'> 
       <WhiteFlexRowRoot>
      <FlexRowy>
       
        <Textz>Send to email</Textz>
      </FlexRowy> 
    </WhiteFlexRowRoot> 

       <WhiteFlexRowRoot>
      <FlexRowy>
        <Image2 src={`https://file.rendit.io/n/bZU5PXMNcb0WzKvUsJYL.svg`}  />
        <Texty>Download PDF</Texty>
      </FlexRowy> 
    </WhiteFlexRowRoot>  

     <RectangleRoot>
      <p className='text-white cursor-pointer pt-1 px-4 text-center'>Print</p>   
    </RectangleRoot>

    
     </div>
        
    </div>



    </div>


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

const TextX = styled.div`
mix-blend-mode: normal;
font-size: 14px;
font-family: Product Sans Medium;
line-height: 21.21px;
color: #505050;

   @media ${devices.mobileL} {  
    
    font-size: 12.5px;
  } 

  
`;



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

  @media ${devices.mobileL} { 
    padding-left: 33px;
  } 

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

const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 56px;

  @media ${devices.mobileL} { 
    gap: 56px;
  } 
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

  @media ${devices.mobileL} { 
    gap: 2px;
  } 

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

  @media ${devices.mobileL} { 
    width: 72px; 
  } 

`;

const Textz = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  cursor: pointer;

  @media ${devices.mobileL} { 
    width: 72px; 
    padding-left:10px;
  } 

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

const TotalRoot = styled.div`
  mix-blend-mode: normal;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #df8909;
`;







export default PrintOutForm