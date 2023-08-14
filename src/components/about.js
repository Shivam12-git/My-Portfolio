import { Container, Row, Col} from "react-bootstrap";
import about_img from '../assets/about-img.svg';
import tools from '../assets/tools.svg';
export const About = () => {
     return(
        <section className="about" id="about">
        <Container>
        <Row className="about-outerlayout">
            <Col>
                    <div>
                    <img src={about_img} id="hdr-img" alt="about" />
                    </div> 
            </Col>  
            <Col xs = {12} md = {6} xl = {7}>
                <div className="about-outer1-layout">
                    <div className = "about-layout">
                        <span className="hola-text"><span id="hola">Hola!</span> Myself Shivam Middha,</span>
                        <div className="about-info">
                            <span id = "about-education">📚 Currently majoring in the field of computer science at <span id="college-name">Indian Institute of Technology (IIT) Mandi</span>, set to graduate in 2024 with a B.Tech degree.</span>
                            <span id = "about-profile-1">🎨 A self-taught <span id="profile-1">Product Designer</span> with a strong passion for creating intuitive and visually appealing digital experiences.</span>
                            <span id="about-profile-2">📶 Also an amateur <span id="profile-2">Product Manager</span> who is eager to learn and apply the principles of product management that I have learned from <a href = "https://www.linkedin.com/company/doremon-den/" target="_blank" rel="noreferrer"><span id = "doremon">Doremon Den</span></a>.</span>
                        </div>
                    </div>
                    <div className="tools">
                        <span>Tools and Technologies</span>
                        <div>
                        <img src={tools} id="tools-img" alt="tools" />
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>
    </section>
     )
}