import './Hero.css'
import profile_photo from '../../assets/profile_photo.jpg'

const Hero=()=>{
    return (
        <div className='hero'>
            <img src={profile_photo} alt="" style={{ width: "270px", height: "270px", borderRadius:"50%" , objectFit:"cover" }}/>
            <h1><span>I’m Nikhil Thula, </span>a Full Stack Developer passionate about building scalable web applications with clean, efficient code.</h1>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect With Me
                </div>
                <div className="hero-resume">
                    My resume
                </div>
            </div>
        </div>
    );
}
export default Hero;