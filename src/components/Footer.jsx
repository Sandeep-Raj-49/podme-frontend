import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>PodMe</h4>
              </div>
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a to="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our NewsLetter</h5>
                  <p>Monthly digest of whats new and exiciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button
                      className="btn btn-primary rounded-pill px-4"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex jsutify-content-between pt-4 mt-4 border-top">
              <p>PodMe Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-light" href="https://www.facebook.com/profile.php?id=61553282892141&mibextid=ZbWKwL" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-light" href="https://instagram.com/podmeco?igshid=NzZlODBkYWE4Ng==" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-instagram fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-light" href="https://x.com/PODMECO?t=ZVz-9JaqV6YQ5jALdFmn3Q&s=08" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="link-light"
                    href="https://www.youtube.com/channel/UCRFmuvlvvEgwMlMhlKVBUIw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-youtube fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
