import "./styles.css";

import { IoTimeOutline, IoStar } from "react-icons/io5"; // Clock and  Star Icon

import FoodMenu from "../../context/menuContext";

const OurFoodMenu = () => {
  return (
    <FoodMenu.Consumer>
      {(value) => {
        const { menuList, activeCategoryTab } = value;
        console.log(menuList.length)
        return (
          <ul className="menu-section-container">
            {menuList
              .filter(
                (foodCategory) => foodCategory.category === activeCategoryTab
              )
              .map((food) => (
                <li key={food.id} className="food-card">
                  {/* Image Section */}
                  <div className="food-image-container">
                    <div className="food-badge">
                      <IoStar color="#FFAA33" size={12} />
                      <span>{food.rating}</span>
                    </div>
                    <span className="food-badge right">
                      {food.isAvailable ? "Available" : "Not Available"}
                    </span>
                    <img
                      src={food.imageUrl}
                      alt={food.name}
                      className="food-image"
                    />
                  </div>

                  {/* Name + Price */}
                  <div className="food-header">
                    <h3 className="food-name">{food.foodName}</h3>
                    <p className="food-price">₹{food.foodPrice}</p>
                  </div>

                  {/* Description */}
                  <p className="food-description">{food.description}</p>

                  {/* Order Button + Time */}
                  <div className="food-footer">
                    <button className="order-btn">Order Now</button>
                    <div className="preparationTime-card">
                      <IoTimeOutline color="#333" size={20} />
                      <p className="food-time">{food.preparationTime}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        );
      }}
    </FoodMenu.Consumer>
  );
};

export default OurFoodMenu;
