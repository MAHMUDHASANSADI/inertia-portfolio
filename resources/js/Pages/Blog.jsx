import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Blog = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section className='text-center bg-primary'>
                <h1>Blog</h1>
            </section>

            <section>
                <ul>
                    <li> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus repudiandae perferendis. Veniam, recusandae tempora pariatur saepe sunt consequatur maiores voluptatum ullam porro quam labore voluptates, vitae dignissimos consequuntur blanditiis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quos, voluptates in rerum, ex iusto nobis ab ratione neque, reprehenderit obcaecati numquam inventore tempore officia non suscipit! Quo, autem! Deleniti!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nam iste, dicta soluta quae, eius ea nemo voluptatem amet ad blanditiis illo recusandae eligendi incidunt excepturi doloribus unde veritatis sequi.</p></li>
                    <li> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus repudiandae perferendis. Veniam, recusandae tempora pariatur saepe sunt consequatur maiores voluptatum ullam porro quam labore voluptates, vitae dignissimos consequuntur blanditiis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quos, voluptates in rerum, ex iusto nobis ab ratione neque, reprehenderit obcaecati numquam inventore tempore officia non suscipit! Quo, autem! Deleniti!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nam iste, dicta soluta quae, eius ea nemo voluptatem amet ad blanditiis illo recusandae eligendi incidunt excepturi doloribus unde veritatis sequi.</p></li>
                    <li> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus repudiandae perferendis. Veniam, recusandae tempora pariatur saepe sunt consequatur maiores voluptatum ullam porro quam labore voluptates, vitae dignissimos consequuntur blanditiis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quos, voluptates in rerum, ex iusto nobis ab ratione neque, reprehenderit obcaecati numquam inventore tempore officia non suscipit! Quo, autem! Deleniti!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nam iste, dicta soluta quae, eius ea nemo voluptatem amet ad blanditiis illo recusandae eligendi incidunt excepturi doloribus unde veritatis sequi.</p></li>
                </ul>
            </section>
            <section className='fixed-bottom'>
                <Footer />
            </section>
        </div>

    );
};
export default Blog;