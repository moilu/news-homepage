import mainLogo from '../assets/W.svg';

function NavBar() {

    const sideLinks = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

    return (
        <nav className="flex justify-between pb-8">
            <figure>
                <img src={mainLogo} alt="W company logo" />
            </figure>
            <ul className='md:flex md:gap-4'>
                {sideLinks.map((link, idx) => (
                    <li key={idx}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;