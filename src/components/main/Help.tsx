import '../../styles/main/help.scss'
import iconPetFood from "../../assets/icons/icon-pet-food.svg";
import iconTransportation from "../../assets/icons/icon-transportation.svg";
import iconToys from "../../assets/icons/icon-toys.svg";
import iconBowls from "../../assets/icons/icon-bowls-and-cups.svg";
import iconShampoos from "../../assets/icons/icon-shampoos.svg";
import iconVitamins from "../../assets/icons/icon-vitamins.svg";
import iconMedicines from "../../assets/icons/icon-medicines.svg";
import iconCollars from "../../assets/icons/icon-collars-leashes.svg";
import iconSleepingArea from "../../assets/icons/icon-sleeping-area.svg";

const Help = () => {
  return (
          <section className="help" id="help">
            <div className="container  content__container">
                <h3>How you can help<br />our shelter</h3>
                <div className="help__container">
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconPetFood}
                            alt="help-icon-food"/>
                        <h4>Pet food</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconTransportation}
                            alt="help-icon-transportation"/>
                        <h4>Transportation</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconToys}
                            alt="help-icon-toys"/>
                        <h4>Toys</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconBowls}
                            alt="help-icon-bowls"/>
                        <h4>Bowls and cups</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconShampoos}
                            alt="help-icon-shampoos"/>
                        <h4>Shampoos</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconVitamins}
                            alt="help-icon-vitamins"/>
                        <h4>Vitamins</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconMedicines}
                            alt="help-icon-medicines"/>
                        <h4>Medicines</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconCollars}
                            alt="help-icon-collars"/>
                        <h4>Collars / leashes</h4>
                    </div>
                    <div className="help__point">
                        <img width="60" height="60"
                            src={iconSleepingArea}
                            alt="help-icon-sleep"/>
                        <h4>Sleeping areas</h4>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Help