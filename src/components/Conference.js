import React, { Component } from 'react'

export default class Education extends Component {

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

                    <h3 className="card-title section-header">Conferences & Courses</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.con1_college} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.con1_year} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <label>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.con1_qualification} onChange={handleChange} />
                        </div>
                    </div>


                    <br />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.con2_college} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6 md-form">
                            <label>Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.con2_year} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <label>Qualification</label>
                            <input type="text" name="edu2_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.con2_qualification} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
