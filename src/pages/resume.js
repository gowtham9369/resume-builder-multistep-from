import { context } from '../App';
import { useContext } from "react";


function Resume() {
  const data = useContext(context);
  console.log(data);
    return (
          <div className="container my-4 border-secondary px-4 pt-2 shadow-lg">
            {/* personal Details  start*/}
              <div className="row mt-4">
                <div className="col-sm-6 ">
                <h5 className='font-weight-bold m-0 profile-name'>John Doe</h5>
                <p className='font-weight-bolder'>Business Development Manager</p>
                <p>Professional Business Developer with more than four years of	
                experience in the business development processes. Involved in product testing,management,and development of new business opportunities.</p>
                </div>
                <div className="col-sm-6 text-right">
                <ul className="list-unstyled">
                  <li>john.doe@gmail.com <i className="fa fa-envelope text-center" /></li>
                  <li>202-555-0166 <i className="fa fa-mobile text-center" /></li>
                  <li>New York,USA <i className="fa fa-map-marker text-center" /></li>
                  <li>linkedin.com/in/john.doe <i className="fa fa-linkedin text-center" /></li>
                  <li>skype.com/in/+202-555-0166 <i className="fa fa-skype text-center" /></li>
                </ul>
                </div>
              </div>
              {/* personal Details End */}
              <div className="clearfix"></div>
              {/* personal Details  start*/}
              <div className="row mt-4">
                <div className="col-sm-6 ">
                <h6 className="font-weight-bolder"><span className='section-border'>WORK EXPERIENCE</span></h6>
  
                  <section className='experience pt-2 pb-3'>
                    <p className='font-weight-bold mb-0'>Business Development Manager</p>
                    <p className='font-weight-light mb-0'>AirState Solutions <span><a href="#"><i className="fa fa-external-link text-center" /></a></span></p>
                    <div className="date"><span className='text-left'>09/04/2015 - 06/04/2018</span><span className='pull-right'>New York, USA</span></div>
                    <div className="clearfix"></div>
                    <ul className="list-group work-exp ml-3">
                      <li>Increased the customer satisfaction rate by 25% by improving the customer service.</li>
                      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                      <li>Increased the customer satisfaction rate by 25% by improving the customer service.</li>
                    </ul>
                  </section>
                  <section className='experience pt-2 pb-3'>
                    <p className='font-weight-bold mb-0'>Business Development Assistant</p>
                    <p className='font-weight-light mb-0'>AirState Solutions<span><a href="#"><i className="fa fa-external-link text-center" /></a></span></p>
                    <div className="date"><span className='text-left'>09/04/2018 - 06/04/2022</span><span className='pull-right'>New York, USA</span></div>
                    <ul className="list-group work-exp ml-3">
                      <li>Increased the customer satisfaction rate by 25% by improving the customer service.</li>
                      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
                      <li>Increased the customer satisfaction rate by 25% by improving the customer service.</li>
                    </ul>
                  </section>
  
                  <section className="education mb-3">
                  <h6 className="font-weight-bolder"><span className='section-border'>Education</span></h6>
                  <div className='py-2'>
                    <p className='font-weight-bolder m-0 p-0'>MSc in Economics and Business	Administration</p>
                    <span className="loc"><i>The University of Chicago</i></span><br />
                    <span className='date'>(09/2008 -06/2010)</span>
  
                  </div>
                </section>
                  <section className="language mb-3">
                  <h6 className="font-weight-bolder"><span className='section-border'>Language</span></h6>
                  <div className='py-2'>
                    <div className='font-weight-bolder m-0 p-0 d-flex'>
                    <div className="item">English </div> 
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle pr-3"></span>
                      <span className="fa fa-circle-o pr-3"></span>
                    </div>
                    <div className='font-weight-bolder m-0 p-0 d-flex'>
                      <div className="item">Spanish </div> 
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle-o pr-3"></span>
                      <span className="fa fa-circle-o pr-3"></span>
                    </div>
                    <div className='font-weight-bolder m-0 p-0 d-flex'>
                    <div className="item">French </div>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle  pr-3"></span>
                      <span className="fa fa-circle-o  pr-3"></span>
                      <span className="fa fa-circle-o pr-3"></span>
                      <span className="fa fa-circle-o pr-3"></span>
                    </div>
                  </div>
                </section>
  
                </div>
                <div className="col-sm-6 ">
                <section className="mb-3">
                <h6 className="font-weight-bolder"><span className='section-border'>SKILLS</span></h6>
                <div className='pt-2 pb-3'>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Public Speaking</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">SEO</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Team Work</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Decision Making</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Emotional Intelligence</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Out Bound Marketing</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Email Marketing</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Google Analytics</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Sales & Marketing</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Social Media Advertising</span> 
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Javascript</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">Angular</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">css</span>
                              <span className="badge badge-skill mt-1 font-weight-bolder px-2 py-2 mr-2">HTML</span>
                </div>
                </section>
                <section className="organization pb-3">
                <h6 className="font-weight-bolder"><span className='section-border'>Organization</span></h6>
                <p className='font-weight-bolder my-2'>American Management Association<br/> <span><em>(2018 - 2022)</em></span></p>
                <p className='font-weight-bolder my-2'>	Association of Private Enterprise<br/>  <span><em>(2015 - 2018)</em></span></p>
                </section>
                <section className="honor mb-3">
                  <h6 className="font-weight-bolder"><span className='section-border'>Honors And Awards</span></h6>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Jury Member, Venture Cup Entrepreneurship</p>
                    <span className="loc"><i>Venture Cup</i></span>
                  </div>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Sales Individual & Business Development Award</p>
                    <span className="loc"><i>AirState Business Awards</i></span>
                  </div>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Excellence in Customer Partnering</p>
                    <span className="loc"><i>IES-Institute of Excellence in	Sales</i></span>
                  </div>
                </section>
                <section className="honor mb-3">
                  <h6 className="font-weight-bolder"><span className='section-border'>CONFERENCES & COURSES</span></h6>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Jury Member, Venture Cup Entrepreneurship</p>
                    <span className="loc"><i>Venture Cup</i></span>
                  </div>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Sales Individual & Business Development Award</p>
                    <span className="loc"><i>AirState Business Awards</i></span>
                  </div>
                  <div className='pb-2'>
                    <p className='font-weight-bolder m-0 p-0'>Excellence in Customer Partnering</p>
                    <span className="loc"><i>IES-Institute of Excellence in	Sales</i></span>
                  </div>
                </section>
  
  
                </div>
              </div>
              {/* personal Details End */}
              <div className="clearfix"></div>
          </div>
    );
  }


  export default Resume;