import { Icon } from "@iconify/react";
import React from "react";

const ContactSection = () => {
  return (
    <div className="custom-container">
      <h1 className="contact-section-heading">check our contact</h1>
      <div className="contact-section-division">
        <div className="contact-section-division-left">
          <div className="contact-us">
            <div className="icon-contact">
              <Icon icon="tdesign:location" />
            </div>
            <div className="contact-us-address">
              <h1>Location</h1>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>

          <div className="contact-us">
            <div className="icon-contact">
              <Icon icon="material-symbols:call-outline" />
            </div>
            <div className="contact-us-address">
              <h1>Call</h1>
              <p>+1 5589 55488 55</p>
            </div>
          </div>

          <div className="contact-us">
            <div className="icon-contact">
              <Icon icon="ic:outline-email" />
            </div>
            <div className="contact-us-address">
              <h1>Email Us</h1>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        <div className="contact-section-division-right">
          <form>
            <div className="input-row">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="custom-input"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="custom-input"
              />
            </div>
            <div className="input-padding">
              <input
                type="text"
                placeholder="Subject"
                className="custom-input"
              />
            </div>
            <div className="input-padding">
              <textarea
                className="custom-input"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="btn-send-msg">
              <button className="form-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
