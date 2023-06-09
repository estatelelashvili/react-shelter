import '../../styles/main/donation.scss';
import donationDog from '../../assets/images/donation-dog.png';
import creditCard from '../../assets/icons/credit-card.svg';

const Donation = () => {
  return (
    <section className='donation'>
      <div className='container  content__container'>
        <img width='505' height='261' src={donationDog} alt='donation-dog' />
        <div className='donation__content'>
          <h3>
            You can also
            <br /> make a donation
          </h3>
          <h5>Name of the bank / Type of bank account</h5>
          <a
            className='donation__card'
            href='https://www.petfinder.com/'
            target='_blank'
          >
            <img width='30' height='23' src={creditCard} alt='credit-card' />
            <h4>8380 2880 8028 8791 7435</h4>
          </a>
          <p className='paragraph-s'>
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donation;
