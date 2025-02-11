import React from 'react';
import NavBar from "../Misc/NavBar";
import Footer from "../HomePage/Footer";
import '../../styles/BeforeArrival.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Dropdown from 'react-bootstrap/Dropdown';
import {Dropdown} from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function copy(content) {
  const el = document.createElement('input');
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

class BeforeArrival extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className = 'container'>
          
          {/* Title */}
          <div className = 'h1-before'>Before Arrival</div>
          <hr className = 'hr-before'></hr>

          {/* Step 1 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className="h2-before">STEP 1.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Plan Your Quarantine</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <a className = 'a1-before' href="https://travel.gc.ca/travel-covid/travel-restrictions/isolation/quarantine-start">Assess your quarantine plan before travel.</a>
          </ul>
          <p className = 'p2-before'>Apply UofT Quarantine Plan</p>
          <ol className = 'ol-before'>
              <li className = 'p2-before'>Full Quarantine Accommodations.</li>
              <li className = 'p2-before'>Backup Quarantine Plan.</li>
              <li className = 'p2-before'>At-Home Quarantine.</li>
          </ol>

          


          {/* Step 2 */}
          <div className = 'card border-success'>
            <div className = 'card-header text-success'><div className = 'h2-before'>STEP 2.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-success'>Take a COVID-19 Test</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>You MUST take a COVID-19 molecular test within <strong>72 hours</strong> before the scheduled departure time of your flight to Canada</li>
          </ul>

          {/* Step 3 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className = 'h2-before'>STEP 3.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Create an Account for Arrival Test</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>You must create an account to perform your arrival test and access your results. Use the same email address you used for ArriveCAN.</li>
          </ul>
          <Tabs defaultActiveKey="profile" className="row" variant="pills">
            <Tab eventKey="montreal" title="Montreal" className="col">
              No information yet.
            </Tab>
            <Tab eventKey="calgary" title="Calgary" className="col">
              <Dropdown.Item href="https://travel.mandatory-testing.alberta.ca/">
                        <b>Contact <a className = 'a1-before' href="https://travel.mandatory-testing.alberta.ca/">Government of Alberta (click to visit website)</a> by phone</b>
                </Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; COVID-19 Response: 310-4455 &nbsp;
                  </p>
                </Dropdown.Item>
            </Tab>
            <Tab eventKey="vancouver" title="Vancouver" className="col">
                <Dropdown.Item href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc/">
                        <b>Contact <a className = 'a1-before' href="https://www.lifelabs.com/flyclear/onarrival/?myProvince=bc/">LifeLabs (click to visit website)</a> by phone or email</b>
                </Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; Toll-free: 1-800-431-7206 &nbsp;
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; COVID-19 Testing: 1-800-431-7206 &nbsp;
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; Phone: 1-604-431-7206&nbsp;
                  </p>
                </Dropdown.Item>
                <Dropdown.Item onClick={event => {copy("ContactUs-BC@LifeLabs.com")}}>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-envelope" viewBox="0 0 16 16">
                    <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                    &nbsp; ContactUs-BC@LifeLabs.com &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="copy-button" viewBox="0 0 16 16">
                      <path
                          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                      <path
                          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                    </svg>
                  </p>
                </Dropdown.Item>
            </Tab>
            <Tab eventKey="toronto" title="Toronto" className="col">
                <Dropdown.Item href="https://portal.switchhealth.ca/">
                        <b>Contact <a className = 'a1-before' href="https://portal.switchhealth.ca/">SwitchHealth (click to visit website)</a> by phone or email</b>
                </Dropdown.Item>
                <Dropdown.Divider></Dropdown.Divider>
                <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; Toll-free: 1-888-966-6531 &nbsp;
                  </p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                      <path
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    &nbsp; Phone: 1-647-977-1030 &nbsp;
                  </p>
                </Dropdown.Item>
                <Dropdown.Item onClick={event => {copy("results@switchhealth.ca")}}>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-envelope" viewBox="0 0 16 16">
                    <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                    &nbsp; results@switchhealth.ca &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="copy-button" viewBox="0 0 16 16">
                      <path
                          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                      <path
                          d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
                    </svg>
                  </p>
                </Dropdown.Item>
            </Tab>
          </Tabs>
          <br/>
          {/* Step 4 */}
          <div className = 'card border-success'>
            <div className = 'card-header text-success'><div className = 'h2-before'>STEP 4.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-success'>Submit ArriveCAN Form</p>
            </div>
          </div>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>Use <a className = 'a1-before' href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/arrivecan.html#a3">ArriveCAN</a> to submit your travel details up to 72 hours before arrival</li>
          </ul>

          
          {/* Step 5 */}
          <div className = 'card border-primary'>
            <div className = 'card-header text-primary'><div className = 'h2-before'>STEP 5.</div></div>
            <div className = 'card-body'>
                <p className = 'p1-before text-primary'>Have Documents Ready</p>
            </div>
          </div>
          <p className="p2-before">Once you submit your information through ArriveCAN, a receipt will be displayed and emailed to you show the receipt to a Canadian border services officer when you enter you can show your ArriveCAN receipt from:</p>
          <ul className = 'ul-before'>
            <li className = 'p2-before'>the app</li>
            <li className = 'p2-before'>a screenshot</li>
            <li className = 'p2-before'>your email</li>
            <li className = 'p2-before'>a printout</li>
          </ul>
        </div>
        

        <Footer/>
      </div>
    );
  }
}

// ========================================
export default BeforeArrival;