import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/custom.css';
import MainNav from './components/Navbar';
import Footer from './components/Footer';
import ProjectImage1 from '../../../public/images/updated (1).png';
import ProjectImage2 from '../../../public/images/updated (1).png';
import ProjectImage3 from '../../../public/images/updated (1).png';

const awards = [
    {
        title: 'Best Innovation',
        description: 'Awarded for the most innovative project.',
        imageUrl: ProjectImage1,
    },
    {
        title: 'Team Spirit',
        description: 'Awarded for the best team collaboration.',
        imageUrl: ProjectImage2,
    },
    {
        title: 'Customer Excellence',
        description: 'Awarded for outstanding customer service.',
        imageUrl: ProjectImage3,
    },
];

const Private = () => {
    return (
        <div>
            <section>
                <MainNav />
            </section>

            <section className=''>

                <div className="container award-container">
                    <div className="award-header bg-secondary">
                        <h1>Our Awards</h1>
                        <p>Celebrating Excellence and Achievement</p>
                    </div>

                    <div className="row">
                        {awards.map((award, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card award-card">
                                    <img src={award.imageUrl} className="card-img-top" alt={award.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{award.title}</h5>
                                        <p className="card-text">{award.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='fixed-bottom'>
                <Footer />
            </section>
        </div>
    );
};

export default Private;
