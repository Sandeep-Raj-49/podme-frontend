import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b>Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-database fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">
                    Podcast Hosting and Distribution
                  </h5>
                  <p className="card-text lead">
                    Podme offers reliable hosting services for your podcasts,
                    ensuring they are accessible to a global audience on popular
                    streaming platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                  <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Content Monetization
                  </h5>
                  <p class="card-text lead">
                    Unlock the potential of your content with Podme's
                    monetization features. Earn revenue through sponsorships,
                    ads, and exclusive subscriber content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                  <i className="fa fa-bar-chart fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Analytics and Insights
                  </h5>
                  <p class="card-text lead">
                    Gain valuable insights into your podcast performance. Podme
                    provides analytics tools to track listener demographics,
                    episode popularity, and audience engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                  <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Community Building
                  </h5>
                  <p class="card-text lead">
                    Foster a vibrant community around your podcast. Podme
                    enables creators to engage with their audience through
                    forums, discussions, and exclusive events.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                  <i className="fa fa-television fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Professional Production Services
                  </h5>
                  <p class="card-text lead">
                    Elevate your podcasting experience with Podme's professional
                    production services. From editing to sound design, we ensure
                    your content meets the highest standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3">
                <div class="card-body text-center">
                  <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Promotion and Marketing
                  </h5>
                  <p class="card-text lead">
                    Increase your podcast's visibility with Podme's promotion
                    and marketing services. Leverage social media integration,
                    cross-promotion, and targeted advertising to grow your
                    audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
