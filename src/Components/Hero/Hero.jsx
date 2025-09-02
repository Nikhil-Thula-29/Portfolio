import './Hero.css'
import profile_photo from '../../assets/profile_photo.jpg'

const Hero=()=>{
    return (
        <div className='hero'>
                <div className='hero-content'>
                <h2 className="hero-welcome">
                <span className="welcome-text">Welcome to my</span><br />
                <span className="portfolio-text">Portfolio!</span>
                </h2>
                <h1><span>I am a Java Full Stack Developer skilled in Spring Boot, React.js, REST APIs, and SQL with experience in building scalable applications across diverse domains. Proficient in developing robust backend services, creating interactive front-end modules, and optimizing APIs for performance. Focused on clean coding, reliability, and delivering user-friendly solutions. </span></h1>
                <div className="hero-action">
                    <div className="hero-connect">
                        Connect With Me
                    </div>
                    <div className="hero-resume">
                        My resume
                    </div>
                    </div>
                </div>

                <div className="about-left">
                  <img src={profile_photo} alt="" style={{width: "380px", height: "400px", objectFit:"cover", borderRadius: "15px" }}/>  
                </div>     
            </div>
            
    );
}
export default Hero;   