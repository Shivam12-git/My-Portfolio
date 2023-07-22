import swiggy_img from '../assets/swiggy1.svg';
import purple_rect from '../assets/purple-rect.svg';
import behance from '../assets/behance.svg';
import { Container, Row, Col} from "react-bootstrap";
import { Workcard } from "./workcard"
import { Workcard2 } from "./workcard2"
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Work = () => {

    // const projects = [
    //     {
    //         title: "Swiggy Case Study",
    //         description: "Revamped the swiggy UI design to introduce a new feature based on UX research.",
    //         tag: "Case-Study", 
    //     }
    // ];

    return (
        <Container className='project-rows'>
            <Row className='show-grid'>
                <Col  xs={6} md={12}>
                    <Workcard />
                </Col>
            </Row>
            <Row className='show-grid'>
                <Col  xs={6} md={12}>
                    <Workcard2 />
                </Col>
            </Row>
        </Container>
    )
}