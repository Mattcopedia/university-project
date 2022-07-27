import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result'; 
import CourseRegistration from 'pages/CourseRegistration';


import { useUserContext } from "./context/userContext";

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
import CreateAccount from 'components/CreateAccount';  
import Auth from 'components/auth';

function App() { 
    const { user, loading, error } = useUserContext();

    return ( 
        <>
        
        {error && <p className="error">{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? 
           
           <>
          <Sidebar /> 
        <div className="md:ml-64">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/document" component={Document} />
            <Route exact path="/gpatool" component={GpaTool} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/coursereg" component={CourseRegistration} /> 
            <Route exact path="/createaccount" component={CreateAccount} />   
            <Redirect from="*" to="/" /> 
        </Switch> 
        </div>  
        </>

         :  <Auth/>} 
        </>}
      
        </>
    );
}

export default App; 

