import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './OurSpecialities.css';

function OurSpecialities() {
  const foodData = [
    {
      id: 1,
      name: "Steak",
      categorie: 'Steak',
      image: "https://www.shutterstock.com/image-photo/beef-steak-medium-rare-on-600nw-2444442355.jpg",
      description: 'Juicy and tender steak cooked to perfection, served with a side of seasonal vegetables.Juicy and tender steak cooked to perfection, served with a side of seasonal vegetables.',
      price: '40'
    },
    {
      id: 2,
      name: "Rice Bowl",
      categorie: 'With Rice',
      image: "https://img.freepik.com/premium-photo/cooked-rice-with-steam-black-bowl-dark-background-hot-cooked-rice-bowl-selective-focus-hot-food-healthy_39810-125.jpg",
      description: 'A Juicy and tender steak cooked to perfection, served with a side of seasonal vegetables. delicious rice bowl topped with fresh herbs and a savory sauce.',
      price: '20'
    },
    {
      id: 3,
      name: "Sushi",
      categorie: 'Homestyle sushi',
      image: "https://i.pinimg.com/1200x/8f/6d/ce/8f6dceb5d77f97e2b939684ac960fe09.jpg",
      description: 'Freshly prepared sushi with a variety of fillings and flavors.',
      price: '30'
    }
  ];

  const categories = ["Speacialities", "Homestyle sushi", "Steak", "With Rice", "Cocktails", "Appetizer"];
  const [selectedCategory, setSelectedCategory] = useState("Speacialities");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredFood = selectedCategory === "Speacialities"
    ? foodData
    : foodData.filter(item => item.categorie === selectedCategory);

  return (
    <div className="our-specialties">
      <div className="header-section">
        <p className='p_Reality'>Reality Food For You</p>
        <h1 className='title'>Our Specialities</h1>
        <p className='subtitle'>Authentic food from our restaurant served with high quality ingredients</p>
      </div>
      
      <div className="filter-section">
        <div className="buttonContainer">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`button_filter ${selectedCategory === category ? 'selected' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="food-list">
          {filteredFood.map((food, index) => (
            <motion.div 
              key={food.id} 
              className="food-item"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.2 }}
            >
              <div className="food-content">
                <div className='image-container'>
                  <img src={food.image} alt={food.name} />
                </div>
                <div className="text-content">
                  <h3>{food.name}</h3>
                  <p className="description">{food.description}</p>
                  <p className="price">${food.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurSpecialities;