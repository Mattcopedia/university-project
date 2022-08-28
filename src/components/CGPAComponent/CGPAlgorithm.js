
import React from 'react'
import styled from "styled-components";

const CGPAlgorithm = () => {
    return (
        <>
    <div className=' ml-7 flex flex-row mb-3  '> 
        <div className="box bg-gray-100 pl-2 py-2">
   <select style={{width: "200px"}}>
    <option selected>4 </option> 
    <option>3</option>
    <option>2</option>
    <option>1</option>
    <option>5</option>
  </select> 

</div>

      <div className='pl-3  bg-gray-100 py-2 '>
      <RoyalPurpleText>Generate form</RoyalPurpleText>
          
      </div>
      

    </div>
    <br />
    </>
    )
}

const RoyalPurpleText = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 135px;
  height: 40px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  padding: 11px 0px 13px 0px;
  margin-right: 10px;
`;




export default CGPAlgorithm
