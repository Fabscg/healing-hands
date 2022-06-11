
import React from "react";
import { Carousel } from "react-bootstrap";
// import { coverImages } from "./coverImages"

function BootstrapCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={require("../assets/images/cover/walking-street.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={require("../assets/images/cover/person-readin-braile.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={require("../assets/images/cover/massaging.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BootstrapCarousel;


// const Home = (coverImages) => {
//     return (


//             <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//                 {
//                     coverImages.map(() => (
//                         <div className="carousel-inner" key={coverImages.id}>
//                             <div className="carousel-item active">
//                                 <img src={coverImages.imgURL} className="d-block" alt="Images with blind people" />
//                                 <p>{ coverImages.description }</p>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>



//     )
// }
