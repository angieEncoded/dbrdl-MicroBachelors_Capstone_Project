import './bootstrap.min.css';
import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 text-center">
                            <img src='/erik-mclean-ZRns2R5azu0-unsplash.jpg' className='img-fluid img-thumbnail' />
                        </div>
                        <div className="col-1"></div>
                    </div>

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h1 className="text-center mt-5">We're here for you</h1>
                            <p className="mt-3 text-center">
                                Whether you need routine maintenance or you are in the market for a new car, Best cars has you covered! We're the industry leader in car sales and we'd love you make you a part of the family. Contact us today for a free estimate! You won't be disappointed.
                            </p>
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutUs;
