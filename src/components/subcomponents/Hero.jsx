import heroImage from '../../assets/vasilis-chatzopoulos.png';

const asideContent = [
    {
        title: 'Hydrogen VS Electric Cars',
        content: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        content: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
];

function Hero() {
    return (
        <section className='flex flex-col w-full md:flex-row md:gap-8'>
            <div className='pb-10'>
                <figure className='pb-5'>
                    <img className='h-[270px] md:h-auto md:w-full w-auto' src={heroImage} alt="Abstract art image" />
                </figure>
                <div className='flex flex-col text-left md:flex-row'>
                    <h1 className='w-1/3 pb-4 text-4xl font-bold'>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p className='pb-6 text-base text-gunmetal'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='px-8 py-3 font-bold text-white bg-lightvermillion'>READ MORE</button>
                    </div>
                </div>
            </div>
            <aside className='grid px-6 py-6 text-left bg-darkspaceblue'>
                <h2 className='text-[#E9AA52] text-4xl font-bold'>New</h2>
                {asideContent.map((content, idx) => (
                <div className='pt-4 border-b-gunmetal last:border-none' key={idx}>
                    <h3 className='pb-2 text-xl font-bold text-white'>{content.title}</h3>
                    <p className='text-lg text-gunmetal'>{content.content}</p>
                </div>
                ))}
            </aside>
        </section>
    )
}

export default Hero;