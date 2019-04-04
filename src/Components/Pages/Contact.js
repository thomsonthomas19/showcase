import React from 'react';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
// import picture from './images/accioURL.png';

const styles = {
  hero: {
  }
}

const Contact = () => {
  return (
    <div style={{ marginTop: "3%" }}>
      <h1 style={{ color: "black", textAlign: "center", textShadow: "1px 1px #fac174", fontSize: "2.4rem" }}>Contact</h1>
      <hr style={{ width: "20%", color: "#fac174", backgroundColor: "#fac174", borderColor: "#fac174" }} />
      <h2 style={{ color: "black", textAlign: "center", textShadow: "1px 1px #fac174", marginTop: "2%", marginBottom: "1%" }}>Contact Info</h2>

      <h3 style={{ color: "black", textAlign: "center", textShadow: "0px 0px #fac174", marginTop: "2%", marginBottom: "1%" }}>Phone: 732.593.7629</h3>
      <h3 style={{ color: "black", textAlign: "center", textShadow: "0px 0px #fac174", marginTop: "1%", marginBottom: "1%" }}>Email: <a style={{ color: "black", textDecoration: "none" }} href="mailto:thomsonthomas19@gmail.com">thomsonthomas19@gmail.com</a></h3>
      <hr style={{ width: "40%", color: "#fac174", backgroundColor: "#fac174", borderColor: "#fac174#fac174", marginTop: "3%" }} />

      <p style={{ lineHeight: "1", fontSize: "1.5rem", textAlign: "center" }}> <a href="https://docs.google.com/document/d/12gY2-DjdQBV_O2pZgNaANeL_PlU5MxTC5oW13Q3Ytjc/edit?usp=sharing" target="_blank" style={{ textShadow: "3px 3px #fac174", color: "black", textDecoration: "none", fontWeight: "bold" }}>Resume</a>
      </p>
      <hr style={{ width: "20%", color: "#fac174", backgroundColor: "#fac174", borderColor: "#fac174#fac174", marginTop: "15px" }} />

      <h2 style={{ color: "black", textAlign: "center", textShadow: "1px 1px #fac174", marginTop: "2%", marginBottom: "1%" }}>Find Me On</h2>
      <hr style={{ width: "15%", color: "#fac174", backgroundColor: "#fac174", borderColor: "#fac174" }} />


      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign: "center" }}> <a href="https://github.com/thomsonthomas19" target="_blank" style={{ textShadow: "3px 3px #fac174", color: "black", textDecoration: "none", fontWeight: "bold" }}>GitHub</a>
      </p>
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign: "center" }}> <a href="https://www.linkedin.com/in/thomsonthomas19/" target="_blank" style={{ textShadow: "3px 3px #fac174", color: "black", textDecoration: "none", fontWeight: "bold" }}>LinkedIn</a>
      </p>

      {/* <p style={{lineHeight: "1.6", fontSize:"1.1rem", paddingLeft: "10%", paddingRight: "10%", width: "60%", marginLeft: "40%"}}>I graduated from the Rutgers Full Stack Flex Web Development Course in early 2019. I have always had an interest in web development and the course provided me with the tools I needed to make myself a competent developer in both the front and back end.</p> */}


    </div>
  )
}


export default Contact;