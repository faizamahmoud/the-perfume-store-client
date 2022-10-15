// !page is public for all visitor.
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
   
        return (
            <Carousel>
                <div>
                    <img src="https://www.sephora.com/productimages/product/p429419-av-10-zoom.jpg?imwidth=1224" alt="unavail"/>
                    <p className="legend">Coming soon: <br /> <strong> Jo Malone London</strong> <br />Jasmine Sambac & Marigold Cologne</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt="unavail"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt="unavail"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
