import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import ContactUs from './contactus.js';
import AboutUs from './aboutus.js';
import './index.css'

window.watsonAssistantChatOptions = {
  integrationID: "461800c3-ee75-4fc2-a920-e89091a88e2a", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "6bc961f4-9d3e-4611-9671-45d2d8c61987", // The ID of your service instance.
  onLoad: function (instance) { instance.render(); }
};
setTimeout(function () {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});

class App extends React.Component {

  state = {
    pageshown: <HomePage />, activeHome: true, activeContact: false, activeAbout: false
  }

  setPageHome = () => {
    this.setState({ pageshown: <HomePage />, activeHome: true, activeContact: false, activeAbout: false });
  }

  setPageContactUs = () => {
    this.setState({ pageshown: <ContactUs />, activeHome: false, activeContact: true, activeAbout: false });
  }

  setPageAbout = () => {
    this.setState({ pageshown: <AboutUs />, activeHome: false, activeContact: false, activeAbout: true });
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <a className="navbar-brand" href="#" onClick={this.setPageHome}>
            <i className="bi bi-car-front" style={{ color: '#7946e6' }}></i>
            <span className="ml-3">Best Cars</span>
          </a>
          <div className="navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className={`nav-item ${this.state.activeHome ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={this.setPageHome}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className={`nav-item ${this.state.activeAbout ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={this.setPageAbout}>About</a>
              </li>
              <li className={`nav-item ${this.state.activeContact ? 'active' : ''}`}>
                <a className="nav-link" href="#" onClick={this.setPageContactUs}>Contact Us</a>
              </li>


            </ul>
          </div>
        </nav>
        <div>
          {this.state.pageshown}
        </div>
      </div>
    );
  }
}

export default App;
