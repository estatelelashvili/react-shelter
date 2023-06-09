import '../styles/footer.scss';
import emailIcon from '../assets/icons/icon-email.svg';
import phoneIcon from '../assets/icons/icon-phone.svg';
import markerIcon from '../assets/icons/icon-marker.svg';
import footerPuppy from '../assets/images/footer-puppy.png';

const Footer = () => {
  return (
    <footer id='contacts'>
      <div className='container'>
        <div className='footer__content'>
          <div className='col first-col'>
            <h3>For questions and suggestions</h3>
            <a
              className='footer-info-point'
              href='mailto:estatelelashvili@gmail.com'
              target='_blank'
            >
              <img
                width='40'
                height='32'
                src={emailIcon}
                alt='footer-info-email'
              />
              <h4>email@shelter.com</h4>
            </a>
            <a className='footer-info-point' href='tel:+1235678910'>
              <img
                width='40'
                height='32'
                src={phoneIcon}
                alt='footer-info-email'
              />
              <h4>+13 674 567 75 54</h4>
            </a>
          </div>
          <div className='col sec-col'>
            <h3>We are waiting for your visit</h3>
            <a
              className='footer-info-point'
              href='https://goo.gl/maps/tZ6SEJfVfv26xeNE6'
              target='_blank'
            >
              <img
                width='22'
                height='32'
                src={markerIcon}
                alt='footer-info-email'
              />
              <h4>
                1 Central Street, Boston
                <br />
                (entrance from the store)
              </h4>
            </a>
            <a
              className='footer-info-point'
              href='https://goo.gl/maps/RsjPbakZDwpgBUDv5'
              target='_blank'
            >
              <img
                width='22'
                height='32'
                src={markerIcon}
                alt='footer-info-email'
              />
              <h4>18 South Park, London</h4>
            </a>
          </div>
          <div className='col third-col'>
            <img
              width='300'
              height='310'
              src={footerPuppy}
              alt='footer-puppy'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
