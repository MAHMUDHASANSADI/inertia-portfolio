import Navbar from './components/Navbar';
import Footer from './components/Footer';
import blog1 from '../../../public/images/blog1.jpg'
import '../../css/custom.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import BlogCard from "./components/Blog"

const Blog = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section className='text-center bg-primary title'>
                <h1>Blog</h1>
            </section>

            <section >
                <Container>
                    <Row>
                        <Col>
                            <BlogCard
                                image={blog1}
                                title={"sasasasa"}
                                text={"sasasasas"}
                                button={'dfdfd'}

                            />
                        </Col>

                        <BlogCard
                            image={blog1}
                            title={"sasasasa"}
                            text={"sasasasas"}

                        />

                        <BlogCard
                            image={blog1}
                            title={"sasasasa"}
                            text={"sasasasas"}

                        />
                        <BlogCard
                            image={blog1}
                            title={"sasasasa"}
                            text={"sasasasas"}

                        />


                    </Row>


                </Container>
            </section>


            <section className='fixed-bottom'>
                <Footer />
            </section>
        </div>
    );
};

export default Blog;
