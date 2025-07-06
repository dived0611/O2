import React from "react";
import shushi_1 from "../assets/images/shushi1.jpg";
import shushi_2 from "../assets/images/shushi2.jpg";
import shushi_3 from "../assets/images/shushi3.jpg";
import special_footer from "../assets/images/special_footer.jpg";
import Special_item from "../components/Special_item";
import "./todaySpecial.css";

const TodaySpecial = () => {
  // Helper component for displaying rating stars

  return (
    <div className="today-special-section">
      <div className="today-special-head">
        <span className="valentine-text">Special Offers</span>
        <h1 className="playfair-heading">Today's Special</h1>
        <p className="today-special-description">
          Special menu oftenly comes different everyday, this is our specila
          food for today
        </p>
      </div>
      <div className="today-special-body">
        <Special_item
          image={shushi_1}
          name="Tuna Sushi"
          description="Delicious tuna sushi with fresh ingredients."
          rating={5}
          dark={false}
        />
        <Special_item
          image={shushi_2}
          name="Just Shushi"
          description="Short description of the dish, highlighting its unique ingredients and flavors."
          rating={4}
          dark={true}
        />
        <Special_item
          image={shushi_3}
          name="Salmon Sushi"
          description="Short description of the dish, highlighting its unique ingredients and flavors."
          rating={4}
          dark={false}
        />
      </div>

      <div className="today-special-footer">
        <img src={special_footer} alt="" />
      </div>
    </div>
  );
};

export default TodaySpecial;
