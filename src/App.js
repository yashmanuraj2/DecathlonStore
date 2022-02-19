import logo from './logo.svg';
import {useContext} from 'react';
import {  BrowserRouter as Router,  Routes,  Route,  Redirect  }     
 from "react-router-dom";
import Login from './components/login';
import Register from './components/register';
import Main from './components/main';

import { AuthContext } from './context/AuthContext';



function App() {
  const {user} = useContext(AuthContext);
return (

    <Router>  
     <Routes>
        <Route exact path="/" element ={<Main /> }/>
        
        <Route path="/login"  element = { <Login/> }/>
        
         
         

           
        <Route path="/register" element = { <Register/>}/>
          
         </Routes>
    </Router>

  );
}

export default App;