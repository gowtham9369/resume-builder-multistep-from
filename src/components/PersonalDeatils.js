import React, { Component } from 'react'

class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    

      
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft shadow-lg">
                <div className="card-body">

                    <h3 className="card-title section-header">Personal Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 md-form">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" defaultValue={values.status === 1 ? '' : values.name}  onChange={handleChange}/>
                        </div>
                        <div className="col-lg-4 md-form">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" defaultValue={values.status === 1 ? '' : values.email} onChange={handleChange}/>
                        </div>
                        <div className="col-lg-4 md-form">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control"  defaultValue={values.status === 1 ? '' : values.phone} onChange={handleChange}/>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <label>Designation*</label>
                            <input type="text" name="designation" className="form-control" defaultValue={values.status === 1 ? '' : values.designation} onChange={handleChange}/>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <label>Career Objective*</label>
                            <input type="text" name="Description" className="form-control" defaultValue={values.status === 1 ? '' : values.career} onChange={handleChange}/>
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 md-form">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" className="form-control" defaultValue={values.status === 1 ? '' : values.linkedin} onChange={handleChange}/>
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Skype URL</label>
                            <input type="text" name="github" className="form-control" defaultValue={values.status === 1 ? '' : values.skype} onChange={handleChange}/>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center"><button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button></div>
                    <br/>
                </form>
            
            </div>
        )
    }
}


export default PersonalDetails;
