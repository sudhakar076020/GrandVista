import "./styles.css";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../Navbar";
import OurFoodMenu from "../OurFoodMenu";
import MenuCategoryTab from "../MenuCategoryTab";
import FoodMenu from "../../context/menuContext";

const servicesData = [
  {
    id: uuidv4(),
    icon: "https://images.unsplash.com/photo-1474221550179-c492fb337327?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpbmUlMjBJbiUyMEV4cGVyaWVuY2UlMjBpbWFnZSUyMGFuZCUyMGljb25zfGVufDB8MnwwfHx8MA%3D%3D",
    title: "Dine-In Experience",
    description: "Enjoy delicious meals in a cozy and elegant atmosphere.",
  },
  {
    id: uuidv4(),
    icon: "https://res.cloudinary.com/dehz5pshe/image/upload/v1755170436/food-delivery-man-with-boxes-with-food_mqmkyq.jpg",
    title: "Takeaway & Delivery",
    description: "Order online and get your favorite dishes at your doorstep.",
  },
  {
    id: uuidv4(),
    icon: "https://res.cloudinary.com/dehz5pshe/image/upload/v1755171040/Catering_fwotcj.jpg",
    title: "Catering",
    description:
      "Perfect catering service for weddings, parties & corporate events.",
  },
  {
    id: uuidv4(),
    icon: "https://res.cloudinary.com/dehz5pshe/image/upload/v1755171105/Chef_s_Special_urhnms.jpg",
    title: "Chef’s Special",
    description: "Exclusive dishes prepared by our expert chefs daily.",
  },
  {
    id: uuidv4(),
    icon: "https://res.cloudinary.com/dehz5pshe/image/upload/v1755171170/Table_Reservation_o2bt4i.jpg",
    title: "Table Reservation",
    description: "Book your table online for a hassle-free dining experience.",
  },
  {
    id: uuidv4(),
    icon: "https://res.cloudinary.com/dehz5pshe/image/upload/v1755171288/Live_Music_t0wh5w.jpg",
    title: "Live Music",
    description: "Enjoy live performances while dining with your loved ones.",
  },
];

const foodMenuTabList = [
  { id: "Main Course", menuCategoryName: "Main Course" },
  { id: "Appetizer", menuCategoryName: "Appetizer" },
  { id: "Dessert", menuCategoryName: "Dessert" },
  { id: "Beverage", menuCategoryName: "Beverage" },
];

const images = [
  "https://plus.unsplash.com/premium_photo-1687697860916-63a97c457b36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1679090007333-74d8443b467f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zaWRlJTIwdGhlJTIwcmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1675604274302-665e7e65021e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
];

const Home = () => {
  const OurFoodMenuSection = () => {
    return (
      <FoodMenu.Consumer>
        {(value) => {
          const { activeCategoryTab } = value;
          return (
            <div className="our-menu-section">
              <h1 className="section-title">Our Menu</h1>
              <ul className="foodMenu-category-container">
                {foodMenuTabList.map((category) => (
                  <MenuCategoryTab
                    key={category.id}
                    categoryItem={category}
                    isActiveCategory={activeCategoryTab === category.id}
                  />
                ))}
              </ul>
              <OurFoodMenu />
            </div>
          );
        }}
      </FoodMenu.Consumer>
    );
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="banner-container">
        <div className="banner-content">
          <h1>Welcome to GrandVista</h1>
          <p>Your Gateway to Fine Dining Experiences </p>
          <button type="button">BOOK A TABLE</button>
        </div>
      </div>
      {/* our services card */}
      <section className="our-services">
        <div className="our-services-card">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* small Notes */}
      <div className="small-notes">
        <p>
          "Experience comfort, luxury, and exceptional service at our hotel -
          where every stay feels like home"
        </p>
      </div>
      {/* multiply images */}
      <div className="image-gallery">
        {images.map((src, index) => (
          <div key={index} className="image-card">
            <img src={src} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
      {/* small Notes */}
      <div className="small-notes">
        <p>
          "From our kitchen to your heart — making every stay deliciously
          memorable."
        </p>
      </div>
      {OurFoodMenuSection()}
    </div>
  );
};

export default Home;
