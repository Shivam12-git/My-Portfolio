import { Container } from 'react-bootstrap';
import React from 'react';
import plane from '../assets/plane.gif'; // Make sure to import the plane image
import journey from '../assets/wholejourney.svg'; // Make sure to import the journey image

export const Journey = () => {
  return (
    <section className="journey3" id="journey">
      <Container>
        <div className='journey-final3'>
          <div className='journey-travel'>
            <div className='plane1'><img src={plane} id='plain1' alt="Plane" /></div>
            <div className='plane2'><img src={plane} id='plain1' alt="Plane" /></div>
            <div className='plane3'><img src={plane} id='plain1' alt="Plane" /></div>
            <div className='plane4'><img src={plane} id='plain1' alt="Plane" /></div>
            <div className='whole-journey3'><img src={journey} id='whole' alt="Journey" /></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
