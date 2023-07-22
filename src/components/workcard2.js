import swiggy_img from '../assets/swiggy1.svg';
import threads from '../assets/threads.svg';
import purple_rect from '../assets/purple-rect1.svg';
import behance from '../assets/behance.svg';
import { Container, Row, Col} from "react-bootstrap";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Workcard2 = () => {

    // const projects = [
    //     {
    //         title: "Swiggy Case Study",
    //         description: "Revamped the swiggy UI design to introduce a new feature based on UX research.",
    //         tag: "Case-Study", 
    //     }
    // ];

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
                                <a href="https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_link_more2" target="_blank" rel="noreferrer">
                                <div className='swiggy-outer'>
                                    <div className='hover-rect'></div>
                                    <div className='swiggy-img'><img src={swiggy_img} id="swiggyimg" alt="tools" /></div>
                                </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Genny</div>
                                            <div className='project-descript'><span id="descript">Revamped the swiggy UI design to introduce a new feature based on UX research.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">Personal Project</span></div>
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
                                <a href="https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_link_more2" target="_blank" rel="noreferrer">
                                    <div className='swiggy-outer'>
                                        <div className='hover-rect'></div>
                                        <div className='swiggy-img'><img src={threads} id="threads" alt="tools" /></div>
                                    </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Threads Teardown</div>
                                            <div className='project-descript'><span id="descript">To increase the number of Threads on Threads App launched by Instagram.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">DD Project</span></div>
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