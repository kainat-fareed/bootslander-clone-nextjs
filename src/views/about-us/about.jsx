import { Icon } from "@iconify/react";
import React from "react";

const AboutSection = () => {
  return (
    <div className="about-us-section custom-container">
      {/* <!-- left side --> */}
      <div className="about-us-left-section">
        <div>
          <span className="about-btn">About Us</span>
          <h1>Ducimus rerum libero reprehenderit cumque</h1>
          <p>
            Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque
            alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum
            quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
            tempora deleniti soluta.
          </p>

          <button className="btn-read">
            Read More
            <Icon
              icon="fluent:arrow-right-12-filled"
              className="right-arrow-icon"
            />
          </button>
        </div>
      </div>
      {/* <!-- Right Side --> */}
      <div>
        <div className="about-us-cards-1">
          <div className="icon-box">
            <Icon icon="bi:buildings" className="icon" />
            <h3>Eius provident</h3>
            <p>
              Magni repellendus vel ullam hic officia accusantium ipsa dolor
              omnis dolor voluptatem
            </p>
          </div>
          <div className="icon-box">
            <Icon icon="bi-clipboard-pulse" className="icon" />
            <h3>Rerum aperiam</h3>
            <p>
              Autem saepe animi et aut aspernatur culpa facere. Rerum saepe
              rerum voluptates quia
            </p>
          </div>
        </div>
        <div className="about-us-cards-1">
          <div className="icon-box">
            <Icon icon="bi-command" className="icon" />
            <h3>Veniam omnis</h3>
            <p>
              Omnis perferendis molestias culpa sed. Recusandae quas possimus.
              Quod consequatur corrupti
            </p>
          </div>
          <div className="icon-box">
            <Icon icon="bi-graph-up-arrow" className="icon" />
            <h3>Delares sapiente</h3>
            <p>
              Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi
              eligendi omnis quideme lorenda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
