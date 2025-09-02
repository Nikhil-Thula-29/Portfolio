import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar=()=>{
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li className="gradient-text">Nikhil Thula</li>
                <li>Home</li>
                <li>About Me</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>
            Connect With Me
            </div>
        </div>
    );
}
export default Navbar;