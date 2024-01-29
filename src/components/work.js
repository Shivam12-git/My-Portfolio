import { Container, Row, Col} from "react-bootstrap";
import threads from '../assets/threads.svg';
import obvious_img from '../assets/Obvious.svg';
import purple_rect from '../assets/purple-rect1.svg';
import behance from '../assets/behance.svg';
import swiggy_img from '../assets/swiggy1.svg';
import genny_img from '../assets/genny.svg';

export const Work = () => {

    return (
        <Container className='project-rows'>
            <Row className='col-items'>
            <Col className='first-col' md lg={5} xl={5} sm={10}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://www.behance.net/gallery/179608353/Obvious-Wallet-Product-Improvement" target="_blank" rel="noreferrer">
                                <div className='obv-outer'>
                                    <div className='hover-rect'></div>
                                    <div className='obv-img'><img src={obvious_img} id="obv-img" alt="tools" /></div>
                                </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Obvious Product Teardown</div>
                                            <div className='project-descript'><span id="descript">Enhance the activation experience of Obvious Smart Wallet App.</span></div>
                                        </div>
                                        <div className='project-tag'><span id="tag">Teardown</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='behance'><img src={behance} alt="tools" /></div>
                    </div>
                    </Col>
                    <Col className="sec-col" lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }} xl={5}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://www.behance.net/gallery/179312767/Threads-Teardown-Doremon-Den-Project" target="_blank" rel="noreferrer">
                                    <div className='threads-outer'>
                                        <div className='hover-rect'></div>
                                    <div className='threads-img'><img src={threads} id="threads" alt="tools" /></div>

                                    </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Threads Teardown</div>
                                            <div className='project-descript'><span id="descript">To increase the number of threads on Threads App launched by Instagram.</span></div>
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
            <Row className='col-items'>
                    <Col className='first-col' md lg={5} xl={5} sm={10}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://www.behance.net/gallery/179608745/Genny-The-Fashion-Super-App" target="_blank" rel="noreferrer">
                                <div className='genny-outer'>
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
                    <Col className="sec-col" lg={{ span: 5, offset: 1 }} md={{ span: 6, offset: 1 }} xl={5}>
                    <div className='projectcard-outer'>
                        <div className = "project-card">
                            <div className='inner'>
                                            <div className='grad-rect'><img src={purple_rect} id="purplerect" alt="tools" /></div>
                                    </div>
                            <div className = "project-card-inner">
                                <a href="https://www.behance.net/gallery/163822659/Improved-Swiggy" target="_blank" rel="noreferrer">
                                    <div className='swiggy-outer'>
                                        <div className='hover-rect'></div>
                                        <div className='swiggy-img'><img src={swiggy_img} id="swiggyimg" alt="tools" /></div>
                                    </div>
                                </a>
                                <div className='info-outerlayout'>
                                    <div className='info-layout'>
                                        <div className='name-descript'>
                                            <div className='project-name'>Improvised Swiggy</div>
                                            <div className='project-descript'><span id="descript">Revamped the swiggy UI design to introduce a new feature based on UX Research.</span></div>
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
    )
}