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

function Hero(params) {
    return (
        <section className='flex flex-col md:flex-row md:gap-8 w-full'>
            <div className='pb-10'>
                <figure className='pb-5'>
                    <img className='h-[270px] md:h-auto md:w-full w-auto' src={heroImage} alt="Abstract art image" />
                </figure>
                <div className='flex flex-col md:flex-row text-left'>
                    <h1 className='font-bold pb-4 text-4xl w-1/3'>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p className='pb-6 text-base text-gunmetal'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='bg-lightvermillion font-bold px-8 py-3 text-white'>READ MORE</button>
                    </div>
                </div>
            </div>
            <aside className='bg-darkspaceblue grid py-6 px-3 text-left'>
                <h2 className='text-[#E9AA52]'>New</h2>
                {asideContent.map(content => (
                <div>
                    <h3 className='text-white'>{content.title}</h3>
                    <p className='text-gunmetal'>{content.content}</p>
                </div>
                ))}
            </aside>
        </section>
    )
}

export default Hero;