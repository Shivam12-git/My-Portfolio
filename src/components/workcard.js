import threads from '../assets/threads.svg';
import obvious_img from '../assets/Obvious.svg';
import purple_rect from '../assets/purple-rect1.svg';
import behance from '../assets/behance.svg';
import { Container, Row, Col} from "react-bootstrap";

export const Workcard = () => {

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
                                <a href="https://drive.google.com/file/d/1c-IQwhet5aXCXXpQArAQCo8rS9s41mSp/view?usp=sharing" target="_blank" rel="noreferrer">
                                <div className='obv-outer'>
                                    <div className='hover-rect'></div>
                                    <div className='obv-img'><img src={obvious_img} id="obv-img" alt="tools" /></div>
                                </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Obvious Product Teardown</div>
                                            <div className='project-descript'><span id="descript">To enhance the activation experience of Obvious, increasing conversion rates etc.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">Product-Teardown</span></div>
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