import './bootstrap.min.css';
import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 text-center">
              <img src='/cardealership.jpeg' className='img-fluid img-thumbnail' />
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h1 className="text-center mt-5">Welcome to Best Cars!</h1>
              <p className="mt-3 text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-1"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default HomePage;
