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

function Aside() {


    return (
        <aside className='grid px-6 py-8 text-left bg-darkspaceblue'>
            <h2 className='text-[#E9AA52] text-4xl font-bold self-center'>New</h2>
            {asideContent.map((content, idx) => (
            <div className='pt-4 border-2 rounded-sm border-b-gunmetal last:border-none' key={idx}>
                <h3 className='pb-2 text-xl font-bold text-white'>{content.title}</h3>
                <p className='text-lg text-gunmetal'>{content.content}</p>
            </div>
            ))}
        </aside>
    )
}

export default Aside;