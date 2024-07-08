import "bulma/css/bulma.css"
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
   
    return (
        <div className="container is-max-desktop">
            <section className="hero is-small is-link">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">Personal Digital Assistants</p>
                    </div>
                </div>
            </section>
            <div className="container is-max-desktop">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Amazon Alexa, or, Alexa, is a virtual assistant technology largely based on a Polish speech synthesizer named Ivona, bought by Amazon in 2013. It was first used in the Amazon Echo smart speaker and the Echo Dot, Echo Studio and Amazon Tap speakers developed by Amazon Lab126."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="Cortana was a virtual assistant developed by Microsoft that used the Bing search engine to perform tasks such as setting reminders and answering questions for users."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri is the digital assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, tvOS, audioOS, and visionOS operating systems."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;
