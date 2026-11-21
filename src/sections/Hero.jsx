import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowRight, FiCheck, FiPackage, FiShield, FiTruck } from "react-icons/fi";
import { motion } from "framer-motion";
import "../styles/hero.css";

const heroStats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "500+",
    label: "Clients Served",
  },
  {
    value: "100%",
    label: "Quality Focus",
  },
];

const trustItems = [
  {
    icon: FiShield,
    text: "Quality Assured",
  },
  {
    icon: FiPackage,
    text: "Reliable Packaging",
  },
  {
    icon: FiTruck,
    text: "Dependable Supply",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Decorative Background */}
      <div className="hero-background">
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <motion.div className="hero-content" initial={{ opacity: 0, x: -45 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", }} >

          <motion.div
            className="hero-label" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, }} >
            <span className="hero-label-line"></span>

            <span>Trusted Polythene Solutions</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, }} >
            Packaging
            <br />

            <span>made to perform.</span>
          </motion.h1>

          <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, }} >

            Quality polythene and nylon solutions for businesses,
            manufacturers, retailers, and everyday packaging needs.
            Reliable materials, dependable supply, and service you
            can count on.
          </motion.p>

          {/* Buttons */}

          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }} >
            <Link to="/contact" className="hero-primary-btn" >
              Request a Quote
              <FiArrowRight />
            </Link>

            <Link to="/products" className="hero-secondary-btn" >
              View Products
            </Link>
          </motion.div>

          {/* Trust Items */}

          <motion.div className="hero-trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, }} >
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="hero-trust-item"
                  key={item.text}
                >
                  <span className="hero-trust-icon">
                    <Icon />
                  </span>

                  <span>{item.text}</span>
                </div>
              );
            })}
          </motion.div>

        </motion.div>

        {/* =========================
            RIGHT VISUAL
        ========================= */}

        <motion.div className="hero-visual" initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9, delay: 0.15, ease: "easeOut",
          }} >

          <div className="hero-visual-wrapper">

            {/* Main Product Visual */}

            <div className="hero-product-visual">

              <div className="product-visual-pattern pattern-one"></div>
              <div className="product-visual-pattern pattern-two"></div>

              <div className="product-visual-top">
                <span>AWARD</span>

                <span>POLYTHENE COMPANY</span>
              </div>

              <div className="product-visual-content">

                <motion.div
                  className="product-icon"
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }} >
                  <FiPackage />
                </motion.div>

                <span className="product-category">
                  PACKAGING SOLUTIONS
                </span>

                <h2>
                  Quality <br /> materials.
                </h2>

                <p>
                  Designed for everyday packaging,
                  retail, manufacturing, and business needs.
                </p>

              </div>

              <div className="product-visual-footer">
                <div>
                  <span>01</span>
                  <small>QUALITY</small>
                </div>

                <div>
                  <span>02</span>
                  <small>RELIABILITY</small>
                </div>

                <div>
                  <span>03</span>
                  <small>SUPPLY</small>
                </div>
              </div>

            </div>

            {/* Quality Card */}

            <motion.div className="hero-quality-card" animate={{ y: [0, -8, 0], }}

              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", }} >

              <div className="quality-icon">
                <FiCheck />
              </div>

              <div className="quality-content">
                <strong>Quality Assured</strong>
                <span>Built for your business</span>
              </div>
            </motion.div>

            {/* Experience Card */}

            <motion.div
              className="hero-experience-card" initial={{ opacity: 0, scale: 0.8, }}
              animate={{ opacity: 1, scale: 1, }}
              transition={{ duration: 0.6, delay: 0.9, }} >
              <strong>10+</strong>

              <span>
                Years of <br /> Experience
              </span>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* =========================
          STATS
      ========================= */}

      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 20, }}
        animate={{ opacity: 1, y: 0, }}
        transition={{ duration: 0.7, delay: 0.9, }} >
        {heroStats.map((stat, index) => (
          <div
            className="hero-stat"
            key={stat.label}
          >
            <strong>{stat.value}</strong>

            <span>{stat.label}</span>

            {index < heroStats.length - 1 && (
              <div className="hero-stat-divider"></div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.6, delay: 1.2, }} >
        <span>Explore</span>

        <FiArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;