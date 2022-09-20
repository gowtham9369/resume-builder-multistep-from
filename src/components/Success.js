import React, { Component } from 'react';
import { context } from '../App';

export default class Success extends Component {
    
    render() {
    return (
      <div className="card animated bounceIn shadow-lg">
        <div className="card-body text-center pt-5 pb-5">
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h5 className='font-weight-bold mt-4'>Redirecting to Resume Template Page</h5>
            <br/>
            
        </div>  
        
      </div>
    )
  }
}
