import heroImage from '../../assets/vasilis-chatzopoulos.png';
import Aside from './Aside';

function Hero() {
    return (
        <section className='flex flex-col w-full md:flex-row md:gap-8'>
            <div className='pb-6 md:pb-0'>
                <figure className='pb-5'>
                    <img className='h-[270px] md:h-auto md:w-full w-auto' src={heroImage} alt="Abstract art image" />
                </figure>
                <div className='grid pt-4 text-left md:grid-cols-2'>
                    <h1 className='pb-4 text-5xl font-bold'>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p className='text-lg pb-7 text-gunmetal'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='px-8 py-3 font-bold text-white bg-lightvermillion'>READ MORE</button>
                    </div>
                </div>
            </div>
            <Aside />
        </section>
    )
}

export default Hero;