import React from "react";


const AboutUs = () => {
  return (
    <div id="about-us-section" className="about-us-container">
      <h1 id="about-us-title" className="main-heading">
        About Us
      </h1>
      <p className="about-us-intro">
        Welcome to <strong>Feriwala Flavours</strong> – your ultimate destination for a delightful
        culinary journey!
      </p>
      <br />
      <p className="about-us-text">
        At Feriwala Flavours, we believe that food is more than just a necessity; it’s an
        experience, a story, and a celebration of life’s best moments. Inspired by the vibrant
        streets of India, we bring you authentic flavors that capture the essence of traditional
        recipes, crafted with love and a touch of modern flair.
      </p>
      <br />
      <h2 id="why-choose-us-title" className="sub-heading">
        Why Choose Us?
      </h2>
      <ul id="why-choose-us-list" className="reasons-list">
        <li>
          <strong>Authentic Recipes:</strong> Relish the true taste of traditional flavors, made
          with authentic ingredients and time-tested recipes.
        </li>
        <br />
        <li>
          <strong>Fresh & Quality Ingredients:</strong> We prioritize freshness and quality to
          ensure every dish is a masterpiece.
        </li>
        <br />
        <li>
          <strong>Passion for Food:</strong> Our team of culinary enthusiasts pours their heart
          into creating dishes that not only taste great but tell a story.
        </li>
        <br />
        <li>
          <strong>Something for Everyone:</strong> From savory to sweet, mild to spicy, our menu
          caters to every palate.
        </li>
      </ul>
      <br />
      <p className="about-us-text">
        We invite you to explore our menu, indulge in the richness of flavors, and join us in
        celebrating the love for food. Thank you for making Feriwala Flavours a part of your
        story. Let’s create delicious memories together!
      </p>
      <br />
      <h3 id="call-to-action" className="highlight-text">
        Your taste buds are in for a treat!
      </h3>
    </div>
  );
};

export default AboutUs;
