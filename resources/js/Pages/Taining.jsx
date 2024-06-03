import MainNav from './components/Navbar';
import Footer from './components/Footer';

const Training = () => {
    return (
        <div className=''>
            <section>
                <MainNav />
            </section>
            <section className='text-center bg-secondary'>
                <h1>Chartered Officers Limited</h1>
            </section>
            <section>
                <ul>
                    <li><p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis ullam dolore eaque id enim obcaecati, repellendus, odit quae deleniti voluptatibus iusto quos eveniet? Natus nobis cum porro velit ducimus!</p>
                    </li>
                    <li><p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt culpa at asperiores, modi ipsa quod neque, maiores esse vero iusto, saepe aliquam assumenda magnam maxime accusantium. Tenetur, illum ea.</p>
                    </li>
                    <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero deleniti explicabo eligendi doloremque, praesentium nam! Quis fugit quaerat officia atque placeat, tenetur quasi magnam adipisci eligendi. Corrupti, delectus numquam?</p>
                    </li>
                </ul>
            </section>
            <section className='fixed-bottom'>
                <Footer />
            </section>


        </div>
    );
};

export default Training;




