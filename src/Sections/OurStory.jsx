import "./OurStory.css"

export default function OurStory() {
  return (
    <div className="our-story-page">
      <div className="background-texture"></div>

      <div className="container-our-story ">
        {/* Header Section */}
        <div className="story-header">
          <p className="story-subtitle">About Us</p>
          <h1 className="story-title">Our Story</h1>
          <p className="story-description">
            A journey for making successful luxury restaurant
            <br />
            with the best services
          </p>
        </div>

        {/* Main Content Section */}
        <div className="story-content">
          {/* Images Section */}
          <div className="story-images">
            <div className="image-grid">
              <div className="image-item large">
                <img src="/images/Restaurant-Kitchen.jpg" alt="Restaurant kitchen equipment" />
              </div>
              <div className="image-item medium">
                <img src="/images/kitechen2.jpg" alt="Chef preparing food" />
              </div>
              <div className="image-item medium">
                <img src="/images/kitchen3.jpg" alt="Chef cooking with fire" />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="story-text">
            <div className="text-content-our-story">
              <p className="text-paragraph">
                At the heart of every unforgettable evening is a shared meal — crafted with passion, served with elegance, and remembered forever.

Founded on the belief that dining should be an experience, not just a meal, we set out to create moments that bring people together through taste, ambiance, and emotion.

From intimate private dinners to grand corporate galas, our curated events blend exquisite cuisine with artful presentation, tailored service, and a touch of magic. Each dish tells a story, each table becomes a stage — and every guest, the guest of honor.

Let us turn your special occasion into a memory that lingers far beyond the last bite.
              </p>

              <p className="text-paragraph">
                Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed tincidunt
                velit. Aliquam vitae ipsum molestae, vehicula nisl quis, finibus leo.
              </p>

              <button className="more-about-btn">
                MORE ABOUT US
                <span className="btn-line"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
