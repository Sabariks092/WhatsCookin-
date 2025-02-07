import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.text}>
        Welcome to our recipe hub, where culinary inspiration meets over 300+ delicious dishes from across the globe! 
        Whether you're a seasoned chef or just starting your cooking journey, our platform offers a vast collection of recipes 
        to suit every taste and occasion. From exotic flavors to comforting classics, discover new favorites and elevate 
        your cooking skills with us.
      </p>
      <p style={styles.text}>
        Browse, learn, and enjoy the joy of cooking with step-by-step instructions and detailed ingredient lists.
        Get ready to transform your kitchen into a world of flavor!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  header: {
    fontSize: "36px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
};

export default About;
