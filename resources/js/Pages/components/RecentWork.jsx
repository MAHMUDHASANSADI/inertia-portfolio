import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../../../public/images/updated (1).png';
import image2 from '../../../../public/images/updated (1).png';
import image3 from '../../../../public/images/updated (1).png';
const RecentWork = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            imageUrl: image1,
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            imageUrl: image2,
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            imageUrl: image3,
        },
    ];

    return (
        <div id="recent-work" className="container mt-5">
            <h2 className="text-center mb-4">Activities</h2>
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
