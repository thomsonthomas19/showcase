import React from 'react';
// import picture from './images/accioURL.png';

const styles = {
  hero: {
  }
}

const Home = () => {
  return (

    <div style={{marginTop: "3%"}}>
    <h1 style={{color: "black", textAlign: "center", textShadow: "1px 1px #27a4dd", fontSize: "2.4rem"}}>A Full Stack Dev with an eye for Debugging</h1>
    <hr style={{width: "65%", color: "#27a4dd", backgroundColor: "#27a4dd", borderColor: "#27a4dd"}}/>
    <h2 style={{color: "black", textAlign: "center", textShadow: "1px 1px #27a4dd", marginTop: "2%", marginBottom: "1%"}}>Who I Am</h2>
    <hr style={{width: "10%", color: "#27a4dd", backgroundColor: "#27a4dd", borderColor: "#27a4dd"}}/>
    <p style={{lineHeight: "1.6", fontSize:"1.1rem", marginLeft: "10%", marginRight: "10%", width: "55%"}}>I am a Full-Stack web developer in Central Jersey, currently working independently. My current specialty is the SERN stack, utilising SQL, Express, React, and Node. I am also experienced in Mongo, AJAX, Firebase, jQuery, as well as the basics such as HTML5, CSS3 and JavaScript.
    </p>
    <p style={{lineHeight: "1.6", fontSize:"1.1rem", marginLeft: "10%", marginRight: "10%", width: "55%"}}>I graduated from the Rutgers Full Stack Flex Web Development Course in early 2019. I have always had an interest in web development and the course provided me with the tools I needed to make myself a competent developer in both the front and back end. My favorite aspect of web dev is debugging, as almost nothing compares to the satisfaction of fixing a difficult issue.
    </p>
    <hr style={{width: "65%", color: "#27a4dd", backgroundColor: "#27a4dd", borderColor: "#27a4dd", marginTop: "2%"}}/>
    <h2 style={{color: "black", textAlign: "center", textShadow: "1px 1px #27a4dd", marginTop: "2%", marginBottom: "1%"}}>Current Projects</h2>
    <hr style={{width: "15%", color: "#27a4dd", backgroundColor: "#27a4dd", borderColor: "#27a4dd"}}/>
    <p style={{lineHeight: "1.6", fontSize:"1.1rem", marginLeft: "10%", marginRight: "10%", width: "55%"}}>I am currently learning and creating a mobile app with <a href="http://www.reactnative.com/" target="_blank" style={{textShadow: "1px 1px #27a4dd", color: "black", textDecoration: "none"}}>React Native</a>
    </p>
    {/* <p style={{lineHeight: "1.6", fontSize:"1.1rem", paddingLeft: "10%", paddingRight: "10%", width: "60%", marginLeft: "40%"}}>I graduated from the Rutgers Full Stack Flex Web Development Course in early 2019. I have always had an interest in web development and the course provided me with the tools I needed to make myself a competent developer in both the front and back end.</p> */}
    

    </div>
  )
}


export default Home;
