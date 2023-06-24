import React, { Component } from "react";
import Slider from "react-slick";
import "./Certificate.scss";
import cert1 from "../../assets/images/cert1.jpg";

export default class Certificate extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 892,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 668,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 476,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="container certificates">
        <h1>
          Качество продукции подтверждают <span>сертификаты</span>
        </h1>
        <Slider {...settings}>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
          <div>
            <img src={cert1} alt="certificate" />
          </div>
        </Slider>
      </div>
    );
  }
}
