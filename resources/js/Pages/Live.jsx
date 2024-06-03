import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/custom.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectImage3 from '../../../public/images/updated (1).png';
import ProjectImage4 from '../../../public/images/updated (1).png';
import ProjectImage5 from '../../../public/images/updated (1).png';
import ProjectImage6 from '../../../public/images/updated (1).png';
const shows = [
    {
        title: 'Morning News',
        description: 'Start your day with the latest news updates.',
        time: '8:00 AM',
        imageUrl: ProjectImage3,
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube link
    },
    {
        title: 'Cooking Show',
        description: 'Learn new recipes and cooking tips.',
        time: '10:00 AM',
        imageUrl: ProjectImage4,
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube link
    },
    {
        title: 'Sports Highlights',
        description: 'Catch up on the latest sports news.',
        time: '6:00 PM',
        imageUrl: ProjectImage5,
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example YouTube link
    },
];

const Live = () => {
    const [currentShow, setCurrentShow] = useState(null);

    useEffect(() => {
        // This would typically be replaced with an API call to fetch the current live show
        const liveShow = shows[0]; // Example: set the first show as the current show
        setCurrentShow(liveShow);
    }, []);

    return (
        <div className="container tv-container">
            <div>
                <Navbar />
            </div>
            <div className="tv-header text-center">
                <h1>Live TV Shows</h1>
                <p>Watch your favorite shows live!</p>
            </div>
            {currentShow && (
                <div className="current-show card mb-4">
                    <img src={currentShow.imageUrl} className="card-img-top" alt={currentShow.title} />
                    <div className="card-body">
                        <h5 className="card-title">{currentShow.title}</h5>
                        <p className="card-text">{currentShow.description}</p>
                        <p className="card-text"><small className="text-muted">Live now</small></p>
                        <a href={currentShow.videoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Live</a>
                    </div>
                </div>
            )}
            <div className="row">
                {shows.map((show, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card show-card">
                            <img src={show.imageUrl} className="card-img-top" alt={show.title} />
                            <div className="card-body">
                                <h5 className="card-title">{show.title}</h5>
                                <p className="card-text">{show.description}</p>
                                <p className="card-text"><small className="text-muted">{show.time}</small></p>
                                <a href={show.videoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Live;
