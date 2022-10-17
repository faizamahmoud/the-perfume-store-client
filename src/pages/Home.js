

// !page is public for all visitor.
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// export default function Home() {
   
//         return (
//             <Carousel>
//                 <div>
//                     <img src="https://www.sephora.com/productimages/product/p429419-av-10-zoom.jpg?imwidth=1224" alt="unavail" />
//                     <p className="legend">Coming soon: <br /> <strong> Jo Malone London</strong> <br />Jasmine Sambac & Marigold Cologne</p>
//                 </div>
//                 <div>
//                     <img src="https://www.sephora.com/contentimages/2022-10-11-chanel-coco-mademoiselle-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us.jpg?imwidth=545" alt="unavail"/>
//                     <p className="legend"><strong>CHANEL <br /></strong> COCO MADEMOISELLE Eau de Parfum</p>
//                 </div>
//                 <div>
//                     <img src="https://www.sephora.com/productimages/product/p435313-av-16-zoom.jpg?imwidth=612" alt="unavail"/>
//                     <p className="legend"><strong>HERMÈS <br /></strong></p>Terre d'Hermes Eau Intense Vétiver Eau de Parfum
//                 </div>
                
//             </Carousel>
//         );
//     }


    import Carousel from 'react-bootstrap/Carousel';

  function Home() {
    return (
      <div className='carousel-contain'  height= "auto "
      width= "auto" 
      max-width= "500"
      max-height="800">
      <Carousel className="carousel"  slide={false}>
        <Carousel.Item>
        <span>  <img src="https://www.sephora.com/productimages/product/p429419-av-10-zoom.jpg?imwidth=1224"   margin="auto" alt="First slide" /></span>
          <Carousel.Caption>
          <p>Coming soon: <br /> <strong> Jo Malone London</strong> <br />Jasmine Sambac & Marigold Cologne</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.sephora.com/contentimages/2022-10-11-chanel-coco-mademoiselle-site-desktop-mweb-home-page-rwd-hero-banner-1000x750-en-us.jpg?imwidth=545" margin="auto" alt="Second slide"/>
          <Carousel.Caption>
          <p className="legend"><strong>CHANEL <br /></strong> COCO MADEMOISELLE Eau de Parfum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.sephora.com/productimages/product/p435313-av-16-zoom.jpg?imwidth=612"  alt="Third slide" />
          <Carousel.Caption>
          <p className="legend"><strong>HERMÈS <br /></strong></p>Terre d'Hermes Eau Intense Vétiver Eau de Parfum
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default Home;