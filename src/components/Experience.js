import React, { Component } from 'react';


class Experience extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft shadow-lg">
                <div className="card-body">

                    <h3 className="card-title section-header">Work Experience & Skills</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    
                    



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-center">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        
                        <div className="col-lg-12 md-form">
                            <label>Organisation*</label>
                            <input type="text" name="exp1_org" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_org} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Position*</label>
                            <input type="text" name="exp1_pos" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_pos} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Location*</label>
                            <input type="text" name="exp1_pos" className="form-control" defaultValue={values.status === 1 ? '' : values.exp1_loc} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>From Date*</label>
                            <input type="date" name="exp1_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.exp1_from} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>To Date*</label>
                            <input type="date" name="exp1_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.exp1_to} onChange={handleChange}  />
                        </div>
                    </div>
                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-center">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-12 md-form">
                            <label>Organisation*</label>
                            <input type="text" name="exp2_org" className="form-control"defaultValue={values.status === 1 ? '' : values.exp2_org} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Position*</label>
                            <input type="text" name="exp2_pos" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_pos} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Position*</label>
                            <input type="text" name="exp2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.exp2_loc} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>From Date*</label>
                            <input type="date" name="exp2_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.exp2_from} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>To Date*</label>
                            <input type="date" name="exp2_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.exp2_to} onChange={handleChange}  />
                        </div>
                    </div>
                    <br/>
                    <div className="row col-lg-10 mx-auto">
                        <div className="card-body">
                            <h3 className="card-title section-header">Skills</h3>
                            <hr />
                        </div>
                        <div className="col-lg-12 md-form">
                            <label>Mention the Skillset* <i>(provide the value in comma separated)</i></label>
                            <input type="text" name="exp2_org" className="form-control" defaultValue={values.status === 1 ? '' : values.skills} onChange={handleChange}  />
                        </div>
                    </div>
                    <br/>
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br/>
                </form>
            </div>
        )
    }
}

export default Experience;
