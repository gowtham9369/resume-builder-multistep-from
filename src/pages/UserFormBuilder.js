import React, { Component } from 'react';
/*import axios from 'axios';
import { saveAs } from 'file-saver';*/
import PersonalDetails from '../components/PersonalDeatils';
import Experience from '../components/Experience';
import Conferences from '../components/Eductaions';
import Education from '../components/Conference';
import Success from '../components/Success';
import Honors from '../components/Honors';

class UserForm extends Component {

    state = {

        step: 1,
        name: '',
        email: '',
        phone: '',
		designation:'',
        career: '',
		linkedin: '',
        skype: '',

        exp1_org: '',
        exp1_pos: '',
        exp1_loc: '',
        exp1_from: '',
        exp1_to: '',

        exp2_org: '',
        exp2_pos: '',
        exp2_loc: '',
        exp2_from: '',
        exp2_to: '',
		
		skills:'',

        edu1_school: '',
        edu1_qualification: '',
        edu1_from: '',
        edu1_to: '',

        edu2_school: '',
        edu2_qualification: '',
        edu2_from: '',
        edu2_to: '',
		
        con1_college: '',
        con1_year: '',
        con1_qualification: '',   

		con2_college: '',
        con2_year: '',
        con2_qualification: '',
		
		lang_english:'',
		lang_french:'',
		lang_german:'',

        specalization: '',
        loc_year: '',


        status: 0

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }



    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    /*formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            linkedin: this.state.linkedin,
            github: this.state.github,
            skills: this.state.skills
        }
    } */

    render() {
        const { step } = this.state;
        switch (step) {
            case 1:
                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <PersonalDetails
                                values={this.state}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Experience
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 3:

                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Conferences
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 4:

                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );


            case 5:

                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Honors
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                submitted={this.submitted}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 6:

                return (
                    <div className="App pt-3 mt-2">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Success />
                        </div>
                        <br />
                    </div>
                );

            default:
                return <h1>Something went wrong!!!</h1>;

        }
    }
}

export default UserForm;
