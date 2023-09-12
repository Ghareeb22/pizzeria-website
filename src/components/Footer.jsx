import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Slice Squad newsletter to receive our best pizza deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe from our Slice Squad newsletter at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up" className="linko">
              Our Story
            </Link>
            <Link to="/" className="linko">
              Mission and Vision
            </Link>
            <Link to="/" className="linko">
              Team Members
            </Link>
            <Link to="/" className="linko">
              Core Values
            </Link>
            <Link to="/" className="linko">
              Terms of Service
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/" className="linko">
              Contact Information
            </Link>
            <Link to="/" className="linko">
              Get in Touch
            </Link>
            <Link to="/" className="linko">
              Customer Support
            </Link>
            <Link to="/" className="linko">
              Office Locations
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Jobs</h2>
            <Link to="/" className="linko">
              {" "}
              Current Job Openings
            </Link>
            <Link to="/" className="linko">
              Why Work With Us
            </Link>
            <Link to="/" className="linko">
              Application Process
            </Link>
            <Link to="/" className="linko">
              Frequently Asked Questions (FAQ)
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>

            <a href="https://www.instagram.com/" className="linko">
              Instagram
            </a>
            <a href="https://www.facebook.com/" className="linko">
              Facebook
            </a>
            <a href="https://www.youtube.com/" className="linko">
              YouTube
            </a>
            <a href="https://twitter.com/?lang=en" className="linko">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Old Town
            </Link>
          </div>
          <small class="website-rights">OldTown © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
