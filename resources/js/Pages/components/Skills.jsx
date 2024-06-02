import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Beginner' },
    ];

    return (
        <div id="skills" className="container mt-5">
            <h2 className="text-center mb-4">Skills</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{skill.name}</h5>
                                <p className="card-text">Level: {skill.level}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
