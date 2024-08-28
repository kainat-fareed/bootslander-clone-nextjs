import Image from "next/image";
import React from "react";
import detailImg from '../../../public/details-1.png'

const DetailSection = () => {
  return (
    <div className="custom-container">
      <h1 className="detail-section-main-heading">Check our details</h1>
      <div className="detail-section">
        <div>
          <Image
            className="detail-section-img"
            src={detailImg}
            alt="detail section"
            height={500}
            width={600}
          />
        </div>
        {/* <!-- Left Section --> */}
        <div>
          <h1>
            Quas et necessitatibus eaque impedit ipsum animi consequatur
            incidunt in
          </h1>
          <p className="detail-section-para1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="detail-section-para2">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
