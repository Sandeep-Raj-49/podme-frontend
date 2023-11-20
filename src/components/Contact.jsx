import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";



const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // Update the state dynamically based on the input name
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/send-message", data);
      console.log(response.data);
      toast.success("Message sent successfully to PodMe!");
      setData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message", error.message);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://fusioninternationalschool.in/wp-content/uploads/2023/06/Cont-reg.png"
                alt="Contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={sendMessage}>
                {/* Use the handleChange function to handle input changes */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={data.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
