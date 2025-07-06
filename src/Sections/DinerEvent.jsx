import { useState } from "react"
import "./DinerEvent.css"

export default function DiningEvents() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const events = [
    {
      id: 1,
      price: "$500",
      title: "Fine Dining",
      subtitle: "Bottle of Champagne",
      description: "Fine Gourmet Meal For 2+\nRoyal Dessert",
      image: "/images/fine-dining.jpg",
      position: "justify-start",
    },
    {
      id: 2,
      price: "$1000",
      title: "Gold Dining",
      subtitle: "Bottle of Champagne",
      description: "Exquisite 5-Course Menu\nRoyal Dessert",
      image: "/images/gold-dining.jpg",
      position: "justify-end",
    },
    {
      id: 3,
      price: "$1500",
      title: "Royalty Dining",
      subtitle: "Premium Experience",
      description: "Special Menu Built For 2+\nRoyal Dessert",
      image: "/images/table-dining.jpg",
      position: "justify-start",
    },
  ]

  return (
    <div>
      <div className="background-texture"></div>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div>
            <p className="valentine-text ">Culinary Art Event</p>
            <h1 className="header-title">Dining Events</h1>
          </div>

          <p className="header-description">
            We provide dining event for your special day
            <br />
            with your important people
          </p>

          <div className="buttons-container">
            <button className="btn btn-primary">Private Events</button>
            <button className="btn btn-outline">Corporate Events</button>
          </div>
        </div>

        {/* Events */}
        <div className="events-container">
          {events.map((event) => (
            <div key={event.id} className={`event-row ${event.position}`}>
              <div
                className="event-card"
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`event-content ${event.id === 2 ? "reverse-layout" : ""}`}>
                  <div className="event-text">
                    <h2 className="event-price">{event.price}</h2>
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-subtitle">{event.subtitle}</p>
                    <div className="event-description">{event.description}</div>
                  </div>

                  <div className={`event-image ${event.id === 2 ? "gradient-left" : ""}`}>
                    <img src={event.image || "/placeholder.svg"} alt={event.title} />
                    <div className="event-image-overlay"></div>
                    {hoveredCard === event.id && (
                      <div className="event-image-hover-overlay"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Dish */}
        <div className="featured-dish">
          <div className="featured-card">
            <div className="featured-image">
              <img src="/images/royalty-dining.jpg" alt="Gourmet Salmon Dish" />
              <div className="featured-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
