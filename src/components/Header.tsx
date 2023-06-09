import { Outlet, Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import '../styles/header.scss';

const Header = () => {
  const location = useLocation();
  const isPetsRoute = location.pathname === '/pets';
  return (
    <header className={isPetsRoute ? 'light-header' : 'dark-header'}>
      <div className='container'>
        <Link to='/' className='logo-container'>
          <h1>Cozy House</h1>
          <p>Shelter for pets in Boston</p>
        </Link>
        <nav>
          <ul className='nav__list'>
            <li>
              <Link
                to='/'
                // className='paragraph-l active'
                className={
                  isPetsRoute ? 'paragraph-darker' : 'paragraph-l active'
                }
              >
                {' '}
                About the shelter
              </Link>
            </li>
            <li>
              <Link to='/pets' className='paragraph-l'>
                Our pets
              </Link>
            </li>
            <li>
              <ScrollLink to='help' className='paragraph-l'>
                Help the shelter
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='contacts' className='paragraph-l'>
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <button className='menu__burger'></button>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
