import React, { useState } from 'react';
import { context } from '../App';
import { useNavigate } from 'react-router-dom';

function Honors(props) {

    const [data, setData] = useState(null);

    const navigate = useNavigate();

    const back = e => {
        e.preventDefault();
        props.prevStep();
    };

    const formSubmit = (e) => {
        e.preventDefault();
        props.submitted();
        props.nextStep();
        const getData = props.values;
        setData(getData);
        console.log("Resume Builder Form Data :"+ JSON.stringify(getData));
        setTimeout(()=> {navigate('/resume')},3000);
    }


    const { values, handleChange } = props;
    const { Provider } = context;

        return (
            <Provider value={data}>
                <div className="card animated fadeInLeft shadow-lg">
                    <div className="card-body">

                        <h3 className="card-title section-header">Honors & Awards</h3>
                        <hr />
                    </div>
                    <form onSubmit={formSubmit}>
                        <div className="row col-lg-10 mx-auto">
                            <div className="col-lg-6 md-form">
                                <input type="text" name="extra_1" className="form-control" defaultValue={values.status === 1 ? '' : values.specalization} onChange={handleChange} required />
                                <label htmlFor="extra_1">Specialization *</label>
                            </div>
                            <div className="col-lg-6 md-form">
                                <input type="text" name="extra_2" className="form-control" defaultValue={values.status === 1 ? '' : values.loc_year} onChange={handleChange} required />
                                <label htmlFor="extra_2">Location & Year *</label>
                            </div>
                        </div>
                        <br />
                        <div className="card-body">
                            <h3 className="card-title section-header">Language Known</h3>
                            <hr />
                        </div>
                        <div className="row col-lg-10 mx-auto">
                            <div className="col-lg-4 text-left">
                                    <label>English</label>
                                    <input type="range" name="exp1_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.lang_english} onChange={handleChange}  />
                            </div>
                            <div className="col-lg-4 text-left">
                                    <label>French</label>
                                    <input type="range" name="exp1_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.lang_french} onChange={handleChange}  />
                            </div>
                            <div className="col-lg-4 text-left">
                                    <label>German</label>
                                    <input type="range" name="exp1_dur" className="form-control border-left-0 border-right-0 border-top-0" defaultValue={values.status === 1 ? '' : values.lang_german} onChange={handleChange}  />
                            </div>
                        </div>
                        <br />
                        <div className="container text-center">
                            <button type="button" className="btn btn-info" onClick={back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                            <button type="submit" className="btn btn-info">Generate Resume</button>
                        </div>
                        <br />
                    </form>
                </div>
            </Provider>
        )
}

export default Honors;
