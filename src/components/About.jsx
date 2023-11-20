import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://logicranks.com/wp-content/themes/LogicRanksTwentyTwentyOne/images/abt-intro.png"
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display-6 mb-2">
                Who <b>We</b> Are
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">Welcome to Podme! </p>
              <p className="lead mb-4">
                We are a passionate team at Podme, dedicated to the world of
                podcasting. Our mission is to create a space where voices are
                heard, stories are shared, and communities are built. We believe
                in the power of storytelling to connect, inspire, and entertain.
              </p>
              {/* Use Link to navigate to "/team" */}
              <Link to="/team">
                <button className="btn btn-primary rounded-pill px-4 py-2">
                  Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
