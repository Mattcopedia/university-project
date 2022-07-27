import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';   
import React from "react";
import { useUserContext } from "../context/userContext"; 
 //npm install firebase@9.1.3

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const { logoutUser } = useUserContext();     

    const location = useLocation().pathname;

    return (
        <nav className="bg-white-500 md:ml-64 py-6 px-3"> 
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10"> 
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="black" /> 
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent" 
                            buttonType="link" 
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">

                   <h4 className="uppercase text-black text-sm tracking-wider mt-1">
                        {location === '/' 
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>    


                    <div className="flex">
                       

                        <span>
                        
                        <svg className='mx-4' width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 24C11.375 24 12.5 22.8923 12.5 21.5385H7.5C7.5 22.8923 8.625 24 10 24ZM17.5 16.6154V10.4615C17.5 6.68308 15.4625 3.52 11.875 2.68308V1.84615C11.875 0.824615 11.0375 0 10 0C8.9625 0 8.125 0.824615 8.125 1.84615V2.68308C4.55 3.52 2.5 6.67077 2.5 10.4615V16.6154L0 19.0769V20.3077H20V19.0769L17.5 16.6154ZM15 17.8462H5V10.4615C5 7.40923 6.8875 4.92308 10 4.92308C13.1125 4.92308 15 7.40923 15 10.4615V17.8462Z" fill="#2D0353"/>
                     </svg>
                        </span>  

                        <span className='flex flex-row'>  
                        <svg className='mt-1 mx-2'  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM8.25 12.75H6.75V11.25H8.25V12.75ZM9.8025 6.9375L9.1275 7.6275C8.5875 8.175 8.25 8.625 8.25 9.75H6.75V9.375C6.75 8.55 7.0875 7.8 7.6275 7.2525L8.5575 6.3075C8.835 6.0375 9 5.6625 9 5.25C9 4.425 8.325 3.75 7.5 3.75C6.675 3.75 6 4.425 6 5.25H4.5C4.5 3.5925 5.8425 2.25 7.5 2.25C9.1575 2.25 10.5 3.5925 10.5 5.25C10.5 5.91 10.23 6.51 9.8025 6.9375Z" fill="#2D0353"/>  
                           
                        </svg>  
                        Help 
                        </span>

                        <span className='flex flex-row'>  
                        <svg className='mt-1 mx-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.72667 8.39333L5.66667 9.33333L9 6L5.66667 2.66667L4.72667 3.60667L6.44667 5.33333H0V6.66667H6.44667L4.72667 8.39333ZM10.6667 0H1.33333C0.593333 0 0 0.6 0 1.33333V4H1.33333V1.33333H10.6667V10.6667H1.33333V8H0V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z" fill="#505050"/>
                       </svg> 
 
                        <button onClick={logoutUser}>Logout</button> 
                        </span> 

                    </div>

                </div>
            </div>
        </nav>
    );
}
