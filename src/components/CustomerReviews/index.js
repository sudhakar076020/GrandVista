import "./styles.css";
import Slider from "react-slick"; //react-slick a carsoul
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const customerReviewsList = [
  {
    id: uuidv4(),
    customerImageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/will-smith-attends-the-opening-ceremony-at-the-red-sea-news-photo-1742225315.pjpeg?crop=1.00xw:0.668xh;0,0.0295xh&resize=640:*",
    customerName: "Will Smith",
    role: "Actor and Rapper",
    review:
      "The food was absolutely mouthwatering, with every dish bursting with fresh flavors and perfect seasoning. The warm hospitality made me feel right at home, and the inviting ambience made this dining experience one to truly remember forever.",
  },
  {
    id: uuidv4(),
    customerImageUrl:
      "https://imageio.forbes.com/specials-images/imageserve/68228ccf37333cc86fafb140/0x0.jpg?format=jpg&crop=866,865,x680,y632,safe&height=416&width=416&fit=bounds",
    customerName: "Lewis Hamilton",
    role: "British racing driver",
    review:
      "A perfect blend of bold flavors, cozy ambience, and genuinely friendly service. Every detail, from the plating to the music, was well thought out. Without a doubt, the best dining experience I’ve enjoyed in many years.",
  },
  {
    id: uuidv4(),
    customerImageUrl:
      "https://daman.co.id/_next/image?url=https%3A%2F%2Fbackend.daman.co.id%2Fwp-content%2Fuploads%2F2019%2F10%2FRobert-Downey-Jr-Glasses-5.jpg&w=3840&q=75",
    customerName: "Robert Downey Jr",
    role: "American actor",
    review:
      "Every bite was a delightful burst of flavor, perfectly balanced and beautifully presented. The attention to detail was remarkable, and the staff’s enthusiasm added charm. This restaurant captures both the heart and taste buds effortlessly, leaving lasting memories.",
  },
  {
    id: uuidv4(),
    customerImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7AKoLtFhhUwMYEPNY2BJOgHMoBdpt0GMA&s",
    customerName: "Amber Heard",
    role: "Travel Blogger",
    review:
      "From the appetizers to the decadent desserts, every course was flawless. The flavors told a story, the plating was art, and the atmosphere was warm. Truly a hidden gem for food lovers seeking unforgettable experiences.",
  },
  {
    id: uuidv4(),
    customerImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGtU8SSjXCksgesiN_9IHkI2nnZWR-qps7Q&s",
    customerName: "Andrew Garfield",
    role: "Actor",
    review:
      "You can taste the passion in every dish — fresh, vibrant ingredients combined with bold flavors and perfect seasoning. The atmosphere felt welcoming and refined, creating a dining experience I’ll cherish and recommend to anyone who loves food.",
  },
  {
    id: uuidv4(),
    customerImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YnN-v6SjCJuL0jopYC4BHBLkxo1hOGiKCybhvj-R5CjgKKoEtwWl-hUM5xFbpU43Img&usqp=CAU",
    customerName: "Elizabeth Olsen",
    role: "American Actress",
    review:
      "The ambience was cozy yet elegant, with soft lighting and thoughtful décor. The food was simply unforgettable, from the first bite to the last. Each flavor was perfectly balanced, leaving me eager to return again soon.",
  },
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1, // show 1 card
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500, // 3.5s
    arrows: false,
    adaptiveHeight: true, // avoids layout jumps
    pauseOnHover: true,
  };

  return (
    <div className="customer-reviews-container">
      <h1 className="section-title">Customer Reviews</h1>
      <p className="reviews-subtitle">
        “Real experiences from our valued customers”
      </p>
      <div className="review-carousel">
        <Slider {...settings}>
          {customerReviewsList.map((review) => (
            <div key={review.id}>
              <div className="review-card">
                <div className="review-image">
                  <img
                    src={review.customerImageUrl}
                    alt={review.customerName}
                  />
                </div>
                <h3>{review.customerName}</h3>
                <p className="review-role">{review.role}</p>
                <p className="review-text">“{review.review}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
