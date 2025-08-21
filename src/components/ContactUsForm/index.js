import "./styles.css";

import { Parallax } from "react-parallax"; // Parallax effect images
import Swal from "sweetalert2"; // SweetAlert2

import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Send Email using EmailJS

// React Icons
import { FaUser } from "react-icons/fa"; // User profile and userFriends
import { MdEmail } from "react-icons/md"; //Email
import { FaPhone } from "react-icons/fa6"; // Phone

import Navbar from "../Navbar";
import Footer from "../Footer";

// Component parallax banner image
const parallaxBannerImage =
  "https://res.cloudinary.com/dehz5pshe/image/upload/v1755237835/table_reservation_image_sm_tmiwuk.jpg";

const ContactUsForm = () => {
  const [contactFormData, setContactFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  const sendContactForm = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "grandvistaofficial7602", // Service ID
        "grandvista7602", //Template ID
        contactFormData, //Send state object
        "BxAorOfOS2UT5oM5X" //Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message Sent Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setContactFormData({
            user_name: "",
            user_email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send, try again later",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <>
      <Navbar />
      <Parallax
        bgImage={parallaxBannerImage}
        strength={300}
        className="parallax-banner-card"
      >
        <div className="parallax-banner-box">
          <h2 className="section-header-title">Get in Touch</h2>
        </div>
      </Parallax>
      <div className="contact-us-container">
        <div className="form-card">
          {/* Contact Form */}
          <div className="form-container">
            <form className="contact-us-form" onSubmit={sendContactForm}>
              {/* Input Name */}
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <div className="input-card">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="user_name"
                    value={contactFormData.user_name}
                    onChange={handleChange}
                    required
                  />
                  <FaUser className="profile-icons" />
                </div>
              </div>
              {/* Input Email */}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="input-card">
                  <input
                    type="mail"
                    placeholder="Email"
                    id="email"
                    name="user_email"
                    value={contactFormData.user_email}
                    onChange={handleChange}
                    required
                  />
                  <MdEmail className="mail-icons" />
                </div>
              </div>
              {/* Input Phone Number */}
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <div className="input-card">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone No"
                    pattern="[0-9]{10}"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleChange}
                    required
                  />
                  <FaPhone className="phone-icons" />
                </div>
              </div>
              {/* Contact details Textarea */}
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <div className="message-card">
                  <textarea
                    className="contact-message"
                    value={contactFormData.message}
                    name="message"
                    onChange={handleChange}
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="contact-form-send-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsForm;
