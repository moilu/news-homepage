import bitmap1 from '../../assets/Bitmap.png';
import bitmap2 from '../../assets/Bitmap-2.png';
import bitmap3 from '../../assets/Bitmap-3.png';

function Suggestions() {

    const articles = [
        {
            img: bitmap1,
            number: '01',
            title: 'Reviving Retro PCs',
            abstract: 'What happens when old PCs are given modern upgrades?'
        },
        {
            img: bitmap2,
            number: '02',
            title: 'Top 10 Laptops of 2022',
            abstract: 'Our best picks for various needs and budgets.'
        },
        {
            img: bitmap3,
            number: '03',
            title: 'The Growth of Gaming',
            abstract: 'How the pandemic has sparked fresh opportunities.'
        },
    ];    

    return (
        <section className="grid grid-cols-1 gap-4 py-8 lg:justify-between flex-column lg:flex">
            {articles.map((article, idx) => (
            <div className="flex h-32 gap-3" key={idx}>
                <figure className='overflow-hidden min-w-fit'>
                    <img className='h-full' src={article.img} alt="Article image" />
                </figure>
                <div className="grid text-left align-middle">
                    <h3 className='text-2xl font-bold text-gunmetal'>{article.number}</h3>
                    <h4 className='text-base font-bold'>{article.title}</h4>
                    <p className='h-auto text-sm text-gunmetal'>{article.abstract}</p>
                </div>
            </div>
            ))}
        </section>
    )
}

export default Suggestions;