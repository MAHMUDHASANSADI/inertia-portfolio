import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div id="about" className="container mt-5">
            <h2 className="text-center mb-4">About Me</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Column 1</h5>
                            <p className="card-text">Information about yourself goes here...</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Column 2</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minus omnis a quod sapiente cum eius doloribus ducimus, maxime quisquam, quia excepturi qui eum voluptates quidem vel exercitationem cupiditate facilis!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Column 3</h5>
                            <p className="card-text">Column content here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
