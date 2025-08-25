import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_photo from '../../assets/profile_photo.jpg'

const About=()=>{
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" style={{width:"100px"}}/>
            </div>
            <div>
                <div className="about-sections">
                    <div className="about-left">
                             <img src={profile_photo} alt="" style={{ width: "350px", height: "400px", objectFit:"cover" }}/>       
                    </div>
                    <div className="about-right">
                        <div className="about-para" style={{textAlign:'justify'}}>
                            <p>Full Stack Developer with 2+ years of experience in Java, Spring Boot and React. Skilled in building scalable web applications, developing RESTful APIs, integrating databases, and creating dynamic, responsive frontends with modern UI frameworks. Experienced in debugging, optimization, and collaborating with teams to deliver high-quality solutions.</p>
                        </div>
                         <div class="skills-container">
                        <div class="skills-column">
                            <h2>Frontend</h2>
                            <ul>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /> HTML</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /> CSS</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" /> JavaScript</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />Bootstrap</li>
                             <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /> React</li>
                            </ul>
                        </div>

                        <div class="skills-column">
                            <h2>Backend</h2>
                            <ul>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" /> Java</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" /> Spring Boot</li>
                            <li><img src="https://img.icons8.com/external-flat-juicy-fish/60/external-api-coding-and-development-flat-flat-juicy-fish.png" alt="RESTful API" /> RESTful APIs</li>
                            </ul>
                        </div>


                        <div class="skills-column">
                            <h2>Database & Tools</h2>
                            <ul>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" /> MySQL</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" /> PostgreSQL</li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /> Git</li>
                            <li><img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" /> GitHub</li>
                            <li><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" /> Postman</li>
                            </ul>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;