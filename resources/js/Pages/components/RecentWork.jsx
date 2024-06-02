import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecentWork = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            imageUrl: 'https://via.placeholder.com/300x200',
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            imageUrl: 'https://via.placeholder.com/300x200',
        },
    ];

    return (
        <div id="recent-work" className="container mt-5">
            <h2 className="text-center mb-4">Recent Work</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentWork;
