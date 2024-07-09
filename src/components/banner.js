import { Container, Row, Col} from "react-bootstrap"
import { useState, useEffect,useCallback,useMemo } from "react";
import hdr_img from '../assets/hdr-img.svg';
import dwnld from '../assets/download-icon.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    // const [index,setIndex] = useState(1);
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    const toRotate = useMemo(() => ["MANAGER", "DESIGNER", "ANALYST"], []);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta((prevDelta) => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
        //   setIndex((prevIndex) => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => prevLoopNum + 1);
        //   setIndex(1);
          setDelta(500);
        } else {
        //   setIndex((prevIndex) => prevIndex + 1);
        }
      }, [isDeleting, loopNum, text, toRotate]);
    
    useEffect(() => {
        let ticker =  setInterval(() => {
            tick();
        },delta);

        return () => { clearInterval(ticker) };
    }, [tick, delta]);

    return (
        <section className="home" id="home">
            <Container>
            <Row className="banner-outerlayout">
                <Col xs={12} md={6} xl={7}>
                    <div className = "banner-layout">
                        <div className="inner-block">
                            <div className="bold-text">
                                <h1 id = "b-text">{`CREATIVE`}<br/><span>{`PRODUCT `}</span><span className="txt-rotate" dataPeriod="1000" data-rotate='["MANAGER","DESIGNER"]'><span className="wrap">{text}</span></span></h1>
                            </div>
                            <div className="innermost-text">
                                <span id = "hey-text">👋 Hey there, I’m Shivam!</span> 
                                <span id = "tagline">Bringing simplicity and elegance to complex problems is my approach to Product Design.</span>
                            </div>
                        </div>
                        <a className="button" href="https://drive.google.com/file/d/1r2XdfHsHLLk1xy5qOBrGFoMSqJTU7qh3/view?usp=sharing" target="_blank" rel="noreferrer">
                            <div className="button-layout">
                            <div className="dwnld-icon"><img src={dwnld} alt="Hdr" /></div>
                            <div id="resume-button">My Resume</div>
                            </div>
                        </a>
                    </div>
                </Col>
                <Col xs={12} md={4} xl={4}>
                        <div>
                        <img src={hdr_img} id="hdr-img" alt="Hdr" />
                        </div> 
                </Col>  
            </Row>
            </Container>
        </section>
    )
}