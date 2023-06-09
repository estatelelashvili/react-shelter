import '../../styles/main/first-screen.scss'
import startScreenPuppy from "../../assets/images/start-screen-puppy.png";
const FirstScreen = () => {
  return (
            <section className="first-screen" id="firstscreen">
            <div className="container">
                <div className="first-screen__content">
                    <h2>Not only people <br /> need a house</h2>
                    <p className="paragraph-l">We offer to give a chance to a little
                        and nice puppy with an extremely wide
                        and open heart. He or she will love you more than
                        anybody else in the world, you will see!</p>
                    <a href="#friends">Make a friend</a>
                </div>
                <img width="698" height="728"
                    src={startScreenPuppy}
                    alt="start-screen-puppy" />
            </div>
        </section>
  )
}

export default FirstScreen