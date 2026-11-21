import { Link } from "react-router-dom";
import { FiArrowUpRight, FiFacebook, FiInstagram, FiMapPin, FiPhone, FiMail, } from "react-icons/fi";
import "../styles/footer.css";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">AP</span>

            <span className="footer-logo-text">
              <strong>AWARD</strong>
              <small>POLYTHENE COMPANY</small>
            </span>
          </Link>

          <p>
            Reliable polythene and nylon solutions designed
            to meet the packaging needs of businesses,
            manufacturers, retailers, and individuals.
          </p>

          <Link
            to="/contact"
            className="footer-contact-link"
          >
            Let's work together
            <FiArrowUpRight />
          </Link>

        </div>

        {/* Navigation */}

        <div className="footer-column">

          <h3>Navigation</h3>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/why-us">Why Choose Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact</h3>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <span>
                <FiPhone />
              </span>

              <div>
                <small>Call us</small>
                <p>+234 000 000 0000</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span>
                <FiMail />
              </span>

              <div>
                <small>Email us</small>
                <p>info@awardpolythene.com</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span>
                <FiMapPin />
              </span>

              <div>
                <small>Our location</small>
                <p>Nigeria</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          FOOTER BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} Award Polythene Company.
            All rights reserved.
          </p>

          <div className="footer-socials">

            <a
              href="#"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;