import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
// import Loader from './loader';
import './App.css';
import './mystyle.css';
const UserFormBuilder = lazy(()=> import('./pages/UserFormBuilder'));
const Resume = lazy(() => import('./pages/resume'));

const MultistepForm = () => {
  return(
    <div>
    <div className="col-lg-8 mx-auto text-center mt-2">
      <h2 className='m-0'><b>Resume Builder</b></h2>
      <span className="lead m-0 form-head-subtitle">Please provide details wherever necessary.</span>
    </div>  
    <UserFormBuilder/>
  </div>  
  );
}
export const context = React.createContext();

function App(){
  
  return(
    <Router>
      <React.Fragment>
        <Routes>
          <Route exact path='/resume' element={<Resume/>}/>
          <Route exact path='/' element={<MultistepForm/>}/>
        </Routes>
      </React.Fragment>
    </Router>
  )
}


export default App;
