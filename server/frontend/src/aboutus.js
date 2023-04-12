import './bootstrap.min.css';
import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <img src='/erik-mclean-ZRns2R5azu0-unsplash.jpg' style={{ width: "300px" }} />
                    <div style={{ margin: "100px" }}>
                        <span style={{ margin: "60px" }}>
                            Welcome to the best car dealership in the world<br />
                            Hop in and take the long way home!
                        </span >
                    </div>

                </div>

            </div>
        );
    }
}

export default AboutUs;
