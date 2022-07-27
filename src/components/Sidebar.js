import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';  
 

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar} 
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-indigo-900 w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://material-tailwind.com?ref=mtd"  
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <p className="text-white" >Rakoni</p>     
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm  focus:text-red-500 text-white font-light px-4 py-3 rounded-lg" 
                                 
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/profile"
                                    className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg    focus:text-red-500"      
                                     
                                > 
                                            <span className='focus:bg-red-500'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path d="M8.5 0C3.808 0 0 3.808 0 8.5C0 13.192 3.808 17 8.5 17C13.192 17 17 13.192 17 8.5C17 3.808 13.192 0 8.5 0V0ZM11.5685 5.389C12.478 5.389 13.209 6.12 13.209 7.0295C13.209 7.939 12.478 8.67 11.5685 8.67C10.659 8.67 9.928 7.939 9.928 7.0295C9.9195 6.12 10.659 5.389 11.5685 5.389V5.389ZM6.4685 4.046C7.5735 4.046 8.4745 4.947 8.4745 6.052C8.4745 7.157 7.5735 8.058 6.4685 8.058C5.3635 8.058 4.4625 7.157 4.4625 6.052C4.4625 4.9385 5.355 4.046 6.4685 4.046ZM6.4685 11.8065V14.994C4.4285 14.3565 2.8135 12.784 2.0995 10.778C2.992 9.826 5.219 9.3415 6.4685 9.3415C6.919 9.3415 7.4885 9.4095 8.0835 9.5285C6.6895 10.268 6.4685 11.2455 6.4685 11.8065ZM8.5 15.3C8.2705 15.3 8.0495 15.2915 7.8285 15.266V11.8065C7.8285 10.5995 10.3275 9.996 11.5685 9.996C12.478 9.996 14.0505 10.3275 14.8325 10.9735C13.838 13.498 11.3815 15.3 8.5 15.3V15.3Z" fill="white"/>
                                            </svg> 
                                        </span>
                                  
                                    
                                    Profile 
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/result"
                                    className="flex items-center gap-4 text-sm text-white  focus:text-red-500 font-light px-4 py-3 rounded-lg"
                                    
                                >
                                    <span> 
                                    <svg width="17" height="17"  viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M1.7 3.4H0V15.3C0 16.235 0.765 17 1.7 17H13.6V15.3H1.7V3.4ZM15.3 0H5.1C4.165 0 3.4 0.765 3.4 1.7V11.9C3.4 12.835 4.165 13.6 5.1 13.6H15.3C16.235 13.6 17 12.835 17 11.9V1.7C17 0.765 16.235 0 15.3 0ZM14.45 7.65H5.95V5.95H14.45V7.65ZM11.05 11.05H5.95V9.35H11.05V11.05ZM14.45 4.25H5.95V2.55H14.45V4.25Z" fill="white"/>
                                   </svg>
                                     </span>

                                   Result
                                </NavLink>
                            </li>

                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/coursereg"
                                    className="flex items-center gap-4 text-sm  focus:text-red-500 text-white font-light px-4 py-3 rounded-lg"
                                   
                                >
                                    <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.72727 7.52941H13.8182V8.94118H8.72727V7.52941ZM8.72727 5.17647H13.8182V6.58824H8.72727V5.17647ZM8.72727 9.88235H13.8182V11.2941H8.72727V9.88235ZM14.5455 0H1.45455C0.654545 0 0 0.847059 0 1.88235V14.1176C0 15.1529 0.654545 16 1.45455 16H14.5455C15.3455 16 16 15.1529 16 14.1176V1.88235C16 0.847059 15.3455 0 14.5455 0ZM14.5455 14.1176H8V1.88235H14.5455V14.1176Z" fill="white"/>
                                    </svg>
                                </span> 

                                    Course Registration
                                </NavLink>
                            </li>


                            <li className=" rounded-lg mb-2 text-gray-700">
                            <NavLink
                                    to="/printout"
                                    className="flex items-center gap-4 text-sm  focus:text-red-500 text-white font-light px-4 py-3 rounded-lg"
                                    
                                >
                                    
                                    <span>
                                    <svg width="18" height="16"  viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M15.3 4.44444H2.7C1.206 4.44444 0 5.63556 0 7.11111V12.4444H3.6V16H14.4V12.4444H18V7.11111C18 5.63556 16.794 4.44444 15.3 4.44444ZM12.6 14.2222H5.4V9.77778H12.6V14.2222ZM15.3 8C14.805 8 14.4 7.6 14.4 7.11111C14.4 6.62222 14.805 6.22222 15.3 6.22222C15.795 6.22222 16.2 6.62222 16.2 7.11111C16.2 7.6 15.795 8 15.3 8ZM14.4 0H3.6V3.55556H14.4V0Z" fill="white"/>
                                  </svg> 

                            </span> 
                                    Print Out
                                    </NavLink>
                           
                            </li>

                            <li className="rounded-lg mb-2 text-gray-700">
                            <NavLink
                                    to="/gpatool"
                                    className="flex items-center gap-4  focus:text-red-500 text-sm text-white  font-light px-4 py-3 rounded-lg"
                                    
                                >
                                    <span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M14.5095 2.4905L13.311 3.689C14.535 4.9215 15.3 6.6215 15.3 8.5C15.3 12.257 12.257 15.3 8.5 15.3C4.743 15.3 1.7 12.257 1.7 8.5C1.7 5.032 4.2925 2.176 7.65 1.7595V3.4765C5.236 3.8845 3.4 5.9755 3.4 8.5C3.4 11.3135 5.6865 13.6 8.5 13.6C11.3135 13.6 13.6 11.3135 13.6 8.5C13.6 7.089 13.0305 5.814 12.104 4.896L10.9055 6.0945C11.5175 6.715 11.9 7.565 11.9 8.5C11.9 10.3785 10.3785 11.9 8.5 11.9C6.6215 11.9 5.1 10.3785 5.1 8.5C5.1 6.919 6.188 5.6015 7.65 5.219V7.038C7.14 7.3355 6.8 7.871 6.8 8.5C6.8 9.435 7.565 10.2 8.5 10.2C9.435 10.2 10.2 9.435 10.2 8.5C10.2 7.871 9.86 7.327 9.35 7.038V0H8.5C3.808 0 0 3.808 0 8.5C0 13.192 3.808 17 8.5 17C13.192 17 17 13.192 17 8.5C17 6.154 16.048 4.029 14.5095 2.4905Z" fill="white"/>
                               </svg> 

                              </span> 
                                    GPA TOOL
                                    </NavLink>
                            </li>

                            <li className=" rounded-lg mb-2 text-gray-700">
                            <NavLink
                                    to="/document" 
                                    className="flex items-center gap-4 text-sm  focus:text-red-500 text-white  font-light px-4 py-3 rounded-lg"
                                    
                                >
                                    <span> <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4.5V0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5V14.5C0 14.8978 0.158035 15.2794 0.43934 15.5607C0.720644 15.842 1.10218 16 1.5 16H10.5C10.8978 16 11.2794 15.842 11.5607 15.5607C11.842 15.2794 12 14.8978 12 14.5V6H7.5C7.10218 6 6.72064 5.84196 6.43934 5.56066C6.15804 5.27936 6 4.89782 6 4.5ZM2 8.5C2 8.36739 2.05268 8.24021 2.14645 8.14645C2.24021 8.05268 2.36739 8 2.5 8C2.63261 8 2.75979 8.05268 2.85355 8.14645C2.94732 8.24021 3 8.36739 3 8.5C3 8.63261 2.94732 8.75979 2.85355 8.85355C2.75979 8.94732 2.63261 9 2.5 9C2.36739 9 2.24021 8.94732 2.14645 8.85355C2.05268 8.75979 2 8.63261 2 8.5ZM2 10.5C2 10.3674 2.05268 10.2402 2.14645 10.1464C2.24021 10.0527 2.36739 10 2.5 10C2.63261 10 2.75979 10.0527 2.85355 10.1464C2.94732 10.2402 3 10.3674 3 10.5C3 10.6326 2.94732 10.7598 2.85355 10.8536C2.75979 10.9473 2.63261 11 2.5 11C2.36739 11 2.24021 10.9473 2.14645 10.8536C2.05268 10.7598 2 10.6326 2 10.5ZM2 12.5C2 12.3674 2.05268 12.2402 2.14645 12.1464C2.24021 12.0527 2.36739 12 2.5 12C2.63261 12 2.75979 12.0527 2.85355 12.1464C2.94732 12.2402 3 12.3674 3 12.5C3 12.6326 2.94732 12.7598 2.85355 12.8536C2.75979 12.9473 2.63261 13 2.5 13C2.36739 13 2.24021 12.9473 2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5ZM4 8.5C4 8.36739 4.05268 8.24021 4.14645 8.14645C4.24021 8.05268 4.36739 8 4.5 8H9.5C9.63261 8 9.75979 8.05268 9.85355 8.14645C9.94732 8.24021 10 8.36739 10 8.5C10 8.63261 9.94732 8.75979 9.85355 8.85355C9.75979 8.94732 9.63261 9 9.5 9H4.5C4.36739 9 4.24021 8.94732 4.14645 8.85355C4.05268 8.75979 4 8.63261 4 8.5ZM4 10.5C4 10.3674 4.05268 10.2402 4.14645 10.1464C4.24021 10.0527 4.36739 10 4.5 10H9.5C9.63261 10 9.75979 10.0527 9.85355 10.1464C9.94732 10.2402 10 10.3674 10 10.5C10 10.6326 9.94732 10.7598 9.85355 10.8536C9.75979 10.9473 9.63261 11 9.5 11H4.5C4.36739 11 4.24021 10.9473 4.14645 10.8536C4.05268 10.7598 4 10.6326 4 10.5ZM4 12.5C4 12.3674 4.05268 12.2402 4.14645 12.1464C4.24021 12.0527 4.36739 12 4.5 12H9.5C9.63261 12 9.75979 12.0527 9.85355 12.1464C9.94732 12.2402 10 12.3674 10 12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13H4.5C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5ZM7 4.5V0.25L11.75 5H7.5C7.36739 5 7.24021 4.94732 7.14645 4.85355C7.05268 4.75979 7 4.63261 7 4.5Z" fill="white"/> 
                                          </svg>
                                        </span>

                                    Document 
                                    </NavLink>  
                            </li>
                          
                        </ul> 

                   
                    </div>
                </div>
            </div>
        </>
    );
}
