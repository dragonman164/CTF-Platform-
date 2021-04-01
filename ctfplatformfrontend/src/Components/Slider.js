import {Carousel} from 'react-bootstrap';
import Img1 from '../Assets/1.jpg';
import Img2 from '../Assets/2.jpg';
import Img3 from '../Assets/3.jpg';

const Slider = ()=>{

    return (
        <Carousel >
    <Carousel.Item >
    <img className="d-block w-100 h-100" src={Img1} alt="First slide" />

    <Carousel.Caption>
    <div className="d-none d-md-block responsive container-fluid bg-dark py-3 text-light">
      <h3 className="font-weight-bold">CTF Organizers</h3>
      <ul className="h5">
      <li>This CTF Platform is developed by Cyber Security Professionals all around the world.</li>
      <li>Various Speakers from the field of Cyber Security (CEH)</li>
      <li>Each speaker will demonstrate the field he/she has expertise in</li>
      </ul>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img className="d-block w-100 h-100" src={Img2} alt="First slide" />

    <Carousel.Caption>
    <div className="d-none d-md-block responsive container-fluid bg-dark py-3 text-light">
      <h3 className="font-weight-bold">Type of Challenges</h3>
      <ul className="h5">
      <li>General Skills</li>
      <li>Binary Exploitation</li>
      <li>Web Exploitation</li>
      <li>Reverse Engineering</li>
      <li>Forensics</li>
      
      </ul>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
    <Carousel.Item >
    <img className="d-block w-100 h-100" src={Img3} alt="First slide" />

    <Carousel.Caption>
    <div className="d-none d-md-block responsive container-fluid bg-dark py-3 text-light">
      <h3 className="font-weight-bold">Cash Prizes</h3>
      <ul className="h5">
      <li>1st Prize Rs. 25,000</li>
      <li>2nd Prize Rs. 20,000</li>
      <li>3rd Prize Rs. 10,000</li>
      </ul>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Slider;