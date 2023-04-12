import './bootstrap.min.css';
import React from 'react';
import HomePage from './homepage.js';
import ContactUs from './contactus.js';
import AboutUs from './aboutus.js';

/*
Copy the Web Chat code from Watson Assitant and paste it here
*/

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
