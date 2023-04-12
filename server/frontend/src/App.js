import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import ContactUs from './contactus.js';
import AboutUs from './aboutus.js';

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
    pageshown: <HomePage />
  }

  setPageHome = () => {
    this.setState({ pageshown: <HomePage /> });
  }

  setPageContactUs = () => {
    this.setState({ pageshown: <ContactUs /> });
  }

  setPageAbout = () => {
    this.setState({ pageshown: <AboutUs /> });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#" onClick={this.setPageHome}>Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageContactUs}>Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.setPageAbout}>About</a>
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
