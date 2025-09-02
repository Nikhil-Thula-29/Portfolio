import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import aboutme from '../../assets/aboutme.png'

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
                             <img src={aboutme} alt="" style={{ width: "380px", height: "400px", objectFit:"cover" , borderRadius: "15px"}}/>       
                    </div>
                    <div className="about-right">
                        <div className="about-para" style={{textAlign:'justify'}}>
                            <p>I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in Java Full Stack Development and am always eager to expand my skillset and take on new challenges. In my free time, I enjoy sipping on a cup of tea (or coffee) and watching a game of cricket. As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.</p>
                        </div>
                        <div className='stacks'>
                            <p>Some of the stacks I know</p>
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