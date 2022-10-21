import React from "react";
import Sliderr from "react-slick";

function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className="slider">
      <Sliderr {...settings}>
        <div className="content">
          <div className="image">
            <img
              style={{
                width: "100%",
                height: "400px",
                backgroundSize: "cover",
              }}
              src="https://raw.githubusercontent.com/Wydreq/Pizza-order-app/master/src/assets/pizza3.jpg"
            />
          </div>
        </div>
        <div>
          <div className="image">
            <img
              style={{
                width: "100%",
                height: "400px",
                backgroundSize: "cover",
              }}
              src="https://raw.githubusercontent.com/Wydreq/Pizza-order-app/master/src/assets/pizza2.jpg"
            />
          </div>
        </div>
        <div>
          <div className="image">
            <img
              style={{
                width: "100%",
                height: "400px",
                backgroundSize: "cover",
              }}
              src="https://raw.githubusercontent.com/Wydreq/Pizza-order-app/master/src/assets/pizza1.jpg"
            />
          </div>
        </div>
      </Sliderr>
    </div>
  );
}

export default Slider;
