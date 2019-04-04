import React from 'react';
import acciourl from './../images/acciourl.png';
import postbank from './../images/postbank.png';
import enyware from './../images/enyware.png';
// import image under images like doge.jpg
// import dogpic from './images/doge.jpg';
// import "../About/About.css";
// import picture from './images/accioURL.png';

const styles = {
  hero: {
  }
}

const Portfolio = () => {
  return (
    <div style={{ marginTop: "3%" }}>
      <h1 style={{ color: "black", textAlign: "center", textShadow: "2px 2px #9dd5c0", fontSize: "2.4rem" }}>Portfolio</h1>
      <hr style={{ width: "65%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />
      <h2 style={{ color: "black", textAlign: "center", textShadow: "2px 2px #9dd5c0", marginTop: "2%", marginBottom: "1%" }}>Accio, URL!</h2>
      <hr style={{ width: "10%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />
      <img src={acciourl} alt="Accio URL" style={{ width: "70%", marginLeft: "15%", marginRight: "15%", marginTop: "1%", marginBottom: "1%", borderRadius: "12px" }} />
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginLeft: "15%", marginRight: "10%", width: "55%" }}>Accio, URL! is a collection application that updates the interface for bookmarking and allows for collaborative bookmark collections. For this project I did all back end development, SQL database construction and implementation, and front end debugging with React.
      </p>
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign: "center" }}> <a href="https://rutgersbookmark.herokuapp.com/#/" target="_blank" style={{ textShadow: "3px 3px #9dd5c0", color: "black", textDecoration: "none", fontWeight: "bold" }}>View Project</a>
      </p>
      <hr style={{ width: "65%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />

      <h2 style={{ color: "black", textAlign: "center", textShadow: "2px 2px #9dd5c0", marginTop: "2%", marginBottom: "1%" }}>Post Bank</h2>
      <hr style={{ width: "10%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />
      <img src={postbank} alt="Post Bank" style={{ width: "70%", marginLeft: "15%", marginRight: "15%", marginTop: "1%", marginBottom: "1%", borderRadius: "12px" }} />
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginLeft: "15%", marginRight: "10%", width: "55%" }}>Post Bank is a basic social media / forum application that lets users form topics to have discussions about, with topic specific live chat. For this project I did most front end development through Handlebars.js, as well as back end and database debugging.
      </p>
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign: "center" }}> <a href="http://frozen-dawn-64061.herokuapp.com/" target="_blank" style={{ textShadow: "3px 3px #9dd5c0", color: "black", textDecoration: "none", fontWeight: "bold" }}>View Project</a>
      </p>
      <hr style={{ width: "65%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />

      <h2 style={{ color: "black", textAlign: "center", textShadow: "2px 2px #9dd5c0", marginTop: "2%", marginBottom: "1%" }}>ENYware</h2>
      <hr style={{ width: "10%", color: "#9dd5c0", backgroundColor: "#9dd5c0", borderColor: "#9dd5c0" }} />
      <img src={enyware} alt="ENYware" style={{ width: "70%", marginLeft: "15%", marginRight: "15%", marginTop: "1%", marginBottom: "1%", borderRadius: "12px" }} />
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", marginLeft: "15%", marginRight: "10%", width: "55%" }}>ENYware is an event finding application for most major cities, searching by event type, location, and time and populating local weather and nearby restaurants. For this project I did all front end development through standard HTML, CSS, and JavaScript, as well as aiding in implementation of multiple external API calls with AJAX.
      </p>
      <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign: "center" }}> <a href="https://bruceh88.github.io/EventsNearYou/" target="_blank" style={{ textShadow: "3px 3px #9dd5c0", color: "black", textDecoration: "none", fontWeight: "bold" }}>View Project</a>
      </p>


    </div>
  )
}


export default Portfolio;