import React, { useState } from 'react';
import { reviews } from './reviewData';

const ReviewItems = () => {
  const [index, setIndex] = useState(0);
  const { img, highlight, review, imageLink, name, artist, siteLink } =
    reviews[index];
  const checkNumber = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    } else if (num < 0) {
      return reviews.length - 1;
    } else {
      return num;
    }
  };
  const handlePrev = () => {
    setIndex((index) => {
      let newPerson = index + 1;
      return checkNumber(newPerson);
    });
  };
  const handleNext = () => {
    setIndex((index) => {
      let newPerson = index - 1;
      return checkNumber(newPerson);
    });
  };
  return (
    <div className="container reviewSection">
      <div className="title text-center">
        <h1>Reviews</h1>
      </div>
      <div className="row reviewPlusControls">
        <div className="col-xs-1 col-sm-2">
          <div className="prev">
            <button
              className="leftB"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              onClick={handlePrev}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>

        <div className="col-xs-10 col-sm-8">
          <div>
            <div className="card text-center reviewContainer">
              <img
                src={img}
                className="reviewImage mx-auto d-block"
                id="image"
                alt="Reviewer"
                height="200px"
                width="30%"
              />
              <div className="card-body">
                <h5 className="card-title">
                  "<span>{highlight}</span>"
                </h5>
                <p className="card-text" id="reviewText">
                  {review}
                </p>
                <p className="card-text">
                  Photo by <a href={imageLink}>{artist}</a> on{' '}
                  <a href={siteLink}>Unsplash</a>
                </p>
                <h6 className="card-subtitle mb-2 text-muted" id="customerName">
                  {name}
                </h6>
              </div>
              <div className="smallButtonsContainer">
                <button
                  className="smallButtons"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                  onClick={handlePrev}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="smallButtons"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                  onClick={handleNext}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-1 col-sm-2">
          <div className="next">
            <button
              className="rightB"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
