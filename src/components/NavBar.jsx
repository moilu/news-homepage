import mainLogo from '../assets/W.svg';

function NavBar() {

    const sideLinks = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

    return (
        <nav className="flex justify-between">
            <figure>
                <img src={mainLogo} alt="W company logo" />
            </figure>
            <ul className='none'>
                {sideLinks.map(link => (
                    <li>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;