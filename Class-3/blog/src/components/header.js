import '../styles/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            {/* the link changes the url to the desired url */}
            <Link to={'/'} className='app-name'>Fakebook</Link>

            <div>
                <Link to='/about'>About</Link>
                <button>Logout</button>
            </div>

        </header>
    );
}

export default Header;