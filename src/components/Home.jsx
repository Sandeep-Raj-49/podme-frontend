import React from "react";
import About from "./About";  // Adjust the path based on the actual location
import Services from "./Services"; 
import Contact from "./Contact"; 


const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Elevate Your Listening Experience
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Welcome to PodMe, your go-to destination for an immersive and
                unparalleled podcast streaming experience. At PodMe, we believe
                in the power of storytelling, knowledge-sharing, and the joy of
                discovering new ideas through the spoken word.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
