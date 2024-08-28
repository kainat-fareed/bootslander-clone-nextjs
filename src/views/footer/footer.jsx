import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer custom-container">
      <div className="footer-section">
        <div>
          <h2>Bootslander</h2>
          <p>
            A108 Adam Street <br />
            New York, NY 535022
          </p>
          <div className="footer-contact-details">
            <h4>Phone:</h4>
            <p>+1 5589 55488 55</p>
          </div>
          <div className="footer-contact-details">
            <h4>Email:</h4>
            <p>info@example.com</p>
          </div>

          {/* <!-- Social Media Links --> */}
          <div className="footer-social">
            <Link href="#">
              <Icon icon="ic:outline-facebook" />
            </Link>
            <Link href="#">
              <Icon icon="mdi:twitter" />
            </Link>
            <Link href="#">
              <Icon icon="mdi:instagram" />
            </Link>
            <Link href="#">
              <Icon icon="mdi:linkedin" />
            </Link>
          </div>
        </div>

        {/* <!-- Links Section --> */}
        <div class="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Terms of service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* <!-- Services Section --> */}
        <div class="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link href="#">Web Design</Link>
            </li>
            <li>
              <Link href="#">Web Development</Link>
            </li>
            <li>
              <Link href="#">Product Management</Link>
            </li>
            <li>
              <Link href="#">Marketing</Link>
            </li>
            <li>
              <Link href="#">Graphic Design</Link>
            </li>
          </ul>
        </div>

        {/* <!-- Newsletter Section --> */}
        <div class="footer-contact">
          <h2>Our Newsletter</h2>
          <p>
            Subscribe to our newsletter and receive the latest news <br />
            about our products and services!
          </p>
          <div class="subscribe">
            <input type="email" />
            <button class="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer