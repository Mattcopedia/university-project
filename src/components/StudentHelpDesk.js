import React from "react";
import styled from "styled-components";
import "./br.css" 

import ticket from "../assets/img/submit a ticket.PNG";
import Sidebar from "./Sidebar";


export default function StudentHelpDesk() {
  return (
    <>
    <Sidebar />
    <StudentRoot>
      <div>
        <FlexColumn>
          <div className="flex flex-col mx-10 my-4 lg:flex-row ">
            <WhiteFlexRow1>
              <Text13>Student Help Desk</Text13>

              <div className="flex justify-center">
                <Image17
                  src={`https://file.rendit.io/n/qOFJUe66MwYQtuqP4kCq.svg`}
                />
              </div>
            </WhiteFlexRow1>
          </div>

          <div>
            <Paragraph>
              PLEASE FOLLOW THIS REGISTRATION STEPS FOR THE CURRENT SEMESTER
            </Paragraph>
          </div>

          <div>
            <FlexRow10 margin={`0px 0px 16px 63px`}>
              <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              />
              <FlexColumn1 gap={`5px`}>
                <Text14>STEP 1</Text14>
                <Paragraph1 width={`984px`}> 
                  REMITA: approach any of the Banks for school fees,mention <br className="responsive"></br>  you
                  want to pay your school fees (exclusive bank charges) <br className="responsive"></br>  on 
                  REMITA Make sure the payer name is in same order as your <br className="responsive"></br> 
                  fullname on simportal. This step will grant access to your
                  course <br className="responsive"></br> registration .You may now proceed to course <br className="responsive"></br> 
                  registration.
                </Paragraph1>

              </FlexColumn1>
            </FlexRow10>
            <FlexRow10 margin={`0px 0px 16px 63px`}>
              <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              />
              <FlexColumn1 gap={`5px`}>
              <Text17>STEP 2</Text17>
                <Paragraph1 width={`984px`}>
                  Click on SELECTED COURSE via which you will select the course <br className="responsive"></br>
                  you are taking for the semester, then click on Transfer to
                  course <br className="responsive"></br> form button at the end of the list 
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>
            <FlexRow10 margin={`0px 0px 16px 63px`}>
              <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              />
              <FlexColumn1 gap={`5px`}>
              <Text17>STEP 3</Text17>
                <Paragraph1 width={`984px`}>
                  Click on course form to
                  {"  "}
                  view your earlier selected course:<br className="responsive"></br>Preview for repetitions.
                  When satisfied with your selection, <br className="responsive"></br> click on the FINAL SUBMIT
                  button to submit your course form
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>

            <FlexRow10 margin={`0px 0px 80px 63px`}>
              <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              />
              <FlexColumn1 gap={`5px`}>
                <Text17>STEP 4</Text17>
                <Paragraph1 width={`984px`}>
                  Click on PRINT COURSEFORM on the menu to print a copy, <br className="responsive"></br> of
                  course form (of click on the
                  {"  "}
                  pdf version to gat a copy).
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>
          </div>

          <FlexRow14>
            <div className="">
              <FlexColumn1 gap={`22px`}>
                <img
                  width={400}
                  height={400}
                  src={ticket}
                  alt="Submit a ticket"
                />
              </FlexColumn1>
              <Text18>Submit a ticket</Text18>  

              <form className="form">                
           

              <label htmlFor="name" className="fullname">Fullname</label> 
              <input id="name" type="text" />

              <div className="info"> 
              <div>
              <label htmlFor="email" className="email">Email</label> 
              <input id="email" type="email" /> 
              </div>

              <div>
              <label htmlFor="Phone number" className="PhoneNumber">Phone number</label> 
              <input id="Phone number" type="text" /> 
              </div>
              </div>
                
               <label className="message" htmlFor="Message" >Message</label> 
               <textarea id="message" name="message" rows="4" cols="50">
                  
                </textarea> 

              </form> 

            

                

            </div>
          </FlexRow14>
        </FlexColumn>
      </div>
    </StudentRoot>
    </>
  );
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
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};
 


const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Image18 = styled.img`
  width: 16px;
  height: 16px;
  align-self: flex-start;
  margin: 3px 0px 0px 0px;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
  }

  gap: ${(props) => props.gap};
`;
const Paragraph1 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  width: ${(props) => props.width};
  @media ${devices.tablet} {
    word-break: break-all;
    font-size: 14px;
  }
  display: inline-block; 
`;
 

const StudentRoot = styled.div`
  width: 1100px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;
const FlexColumn = styled.div`
  width: 1202px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
`;

const WhiteFlexRow1 = styled.div`
  background-color: #fafafa;
  //   display: flex;
  //   flex-direction: row;
  //   gap: 425px;
  //   align-items: center;
  border-radius: 6px;
  padding: 25px 60.31px 24.72px 74px;
  margin: 0px 0px 59px 59px;

  //   @media ${devices.mobileL} {
  //     display: flex;
  //     flex-direction: column;
  //   }

  //   @media ${devices.tablet} {
  //     display: flex;
  //     flex-direction: column;
  //   }
`;
const Text13 = styled.div`
  font-size: 36px;
  font-family: Product Sans Black;
  line-height: 34.92px;
  color: #2d0353;
`;
const Image17 = styled.img`
  width: 182.69px;
  height: 147.28px;
`;
const Paragraph = styled.div`
  width: 655px;
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  margin: 0px 0px 31px 63px;
  @media ${devices.tablet} {
    font-size: 13px;
  }
`;
const Text14 = styled.div`
  width: 43.47px;
  font-size: 12px;
  font-family: Product Sans Black;
  line-height: 18.18px;
  color: #219653;
  align-self: flex-start;
  margin: 0px 0px 0px 0.47px;
`;
const Text17 = styled.div`
  width: 45.82px;
  font-size: 12px;
  font-family: Product Sans Black;
  line-height: 18.18px;
  color: #219653;
  align-self: flex-start;
  margin: 0px 0px 0px 1.17px;
`;
const FlexRow14 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 100px 0px 70px;
  //   @media ${devices.tablet} {
  //     display: flex;
  //    flex-direction: column;
  //    align-self: stretch;
  //    align-items: center;
  //   }
`;

const Text18 = styled.div`
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  color: #2d0353;
  align-self: flex-start;
`;



