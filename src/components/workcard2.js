import swiggy_img from '../assets/swiggy1.svg';
import genny_img from '../assets/genny.svg';
import purple_rect from '../assets/purple-rect1.svg';
import behance from '../assets/behance.svg';
import { Container, Row, Col} from "react-bootstrap";
// import 'animate.css';

export const Workcard2 = () => {

    return (
        <section className="work" id="work">
            <Container className='row-items'>
                <Row className='col-items'>
                    <Col className='first-col' md={6}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://drive.google.com/file/d/1y_QrHwejGr2_oQK_KgFbKz0Ms27lQ11f/view?usp=sharing" target="_blank" rel="noreferrer">
                                <div className='swiggy-outer'>
                                    <div className='hover-rect'></div>
                                    <div className='genny-img'><img src={genny_img} id="genny-img" alt="tools" /></div>
                                </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Genny - The Fashion Super App</div>
                                            <div className='project-descript'><span id="descript">A one stop solution to digitize your wardrobe with elegance.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">Product-Design</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='behance'><img src={behance} alt="tools" /></div>
                    </div>
                    </Col>
                    <Col md={6}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://drive.google.com/file/d/1nFRElakMPnvZ-V1a3_oixSM0nhlWExjV/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <div className='swiggy-outer'>
                                        <div className='hover-rect'></div>
                                        <div className='swiggy-img'><img src={swiggy_img} id="swiggyimg" alt="tools" /></div>
                                    </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Improvised Swiggy</div>
                                            <div className='project-descript'><span id="descript">Revamped the swiggy UI design to introduce a new feature based on UX research.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">Case-Study</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='behance'><img src={behance} alt="tools" /></div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}