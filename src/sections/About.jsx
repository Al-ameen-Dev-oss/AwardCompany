import { FiArrowRight, FiCheckCircle, FiLayers, FiShield, FiTarget, FiTruck, FiUsers, FiAward, FiPackage, FiTrendingUp, FiSettings, FiBriefcase, FiStar, } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/about.css";

const highlights = [
  {
    icon: <FiShield />,
    title: "Reliable Quality",
    text: "We focus on providing dependable polythene and nylon solutions suitable for everyday packaging and business operations.",
  },
  {
    icon: <FiLayers />,
    title: "Flexible Solutions",
    text: "Our product range is designed to serve different packaging requirements, from everyday retail needs to larger business demands.",
  },
  {
    icon: <FiTruck />,
    title: "Dependable Supply",
    text: "We understand the importance of having packaging materials available when your business needs them.",
  },
];

const companyFeatures = [
  {
    icon: <FiPackage />,
    title: "Polythene Products",
    text: "Practical packaging materials designed for different commercial and everyday applications.",
  },
  {
    icon: <FiBriefcase />,
    title: "Business Focused",
    text: "Solutions created with the needs of retailers, manufacturers, distributors, and businesses in mind.",
  },
  {
    icon: <FiSettings />,
    title: "Practical Solutions",
    text: "We focus on providing useful packaging options rather than making the process unnecessarily complicated.",
  },
  {
    icon: <FiUsers />,
    title: "Customer Support",
    text: "We value communication and aim to make it easy for customers to discuss their packaging requirements.",
  },
  {
    icon: <FiStar />,
    title: "Quality Mindset",
    text: "Quality remains an important part of how we approach our products and customer relationships.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Continuous Growth",
    text: "We believe in improving our products, service, and approach as customer needs continue to change.",
  },
];

const reasons = [
  "Quality-focused polythene solutions",
  "Products for different business needs",
  "Customer-focused service",
  "Flexible supply options",
  "Practical packaging solutions",
  "Clear and dependable communication",
];

const values = [
  {
    icon: <FiAward />,
    title: "Quality",
    text: "We maintain a strong focus on providing products that meet the expectations of the customers we serve.",
  },
  {
    icon: <FiUsers />,
    title: "Customer First",
    text: "We listen to our customers and work to understand their requirements before recommending suitable solutions.",
  },
  {
    icon: <FiShield />,
    title: "Reliability",
    text: "We understand that businesses depend on their suppliers, which is why dependable service matters to us.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth",
    text: "We continuously look for ways to improve our products, service, and overall customer experience.",
  },
];

const industries = [
  "Retail businesses",
  "Manufacturing businesses",
  "Food & packaging",
  "Wholesale & distribution",
  "Small businesses",
  "Commercial customers",
];

const fadeUp = {
  hidden: { opacity: 0, y: 45, },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut", },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60, },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: "easeOut", },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: "easeOut", },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, },
  },
};

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================================
            SECTION INTRO
        ========================================= */}

        <motion.div
          className="about-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        >
          <div className="section-label">
            <span></span>
            About Award Polythene
          </div>

          <h2>
            Packaging solutions built
            <span> around your needs.</span>
          </h2>

          <p>
            We provide dependable polythene and nylon solutions for
            businesses, retailers, manufacturers, distributors, and
            individuals looking for practical packaging materials.
          </p>
        </motion.div>

        {/* =========================================
            COMPANY STORY
        ========================================= */}

        <div className="about-main">

          <motion.div className="about-visual" variants={fadeLeft}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} >

            <motion.div className="about-image-wrapper" whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }} >

              <div className="about-image-placeholder">

                <div className="about-image-pattern"></div>

                <div className="about-image-content">
                  <span className="about-image-number">
                    01
                  </span>

                  <div>
                    <strong>AWARD</strong>

                    <small>
                      POLYTHENE COMPANY
                    </small>
                  </div>
                </div>

              </div>

              <motion.div
                className="about-experience"
                animate={{ y: [0, -8, 0], }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }} >

                <span>Quality</span>
                <strong>First</strong>
                <small>Always</small>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="about-content" variants={staggerContainer} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} >

            <motion.span className="about-mini-title" variants={fadeUp}>
              WHO WE ARE
            </motion.span>

            <motion.h3 variants={fadeUp}>
              A dependable partner for
              <span> quality polythene solutions.</span>
            </motion.h3>

            <motion.p variants={fadeUp}>
              Award Polythene Company is focused on providing practical
              and dependable packaging solutions for businesses and
              customers with different requirements.
            </motion.p>

            <motion.p variants={fadeUp}>
              We understand that packaging plays an important role in
              everyday business operations. From protecting products
              during handling and transportation to providing simple
              packaging for customers, the right material can make a
              significant difference.
            </motion.p>

            <motion.p variants={fadeUp}>
              That is why we focus on combining product quality,
              dependable supply, responsive customer service, and
              solutions that are suitable for real-world business needs.
            </motion.p>

            <motion.div className="about-highlights" variants={staggerContainer} >
              {highlights.map((item) => (
                <motion.div
                  className="about-highlight" key={item.title} variants={fadeUp}
                  whileHover={{ y: -7, scale: 1.02, }} >
                  <div className="highlight-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link to="/contact" className="about-button" >
                Talk To Us
                <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            COMPANY APPROACH
        ========================================= */}

        <motion.div className="about-story" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} >

          <div className="about-story-heading">

            <span className="about-mini-title">
              OUR APPROACH
            </span>

            <h3>
              More than products.
              <span> We provide solutions.</span>
            </h3>
          </div>

          <div className="about-story-text">
            <p>
              Every business has different packaging requirements.
              Some customers need everyday nylon bags, while others
              require packaging materials for larger commercial
              operations.
            </p>

            <p>
              Our approach is therefore centered around understanding
              those requirements and helping customers find practical
              options that fit their needs.
            </p>
          </div>
        </motion.div>

        {/* =========================================
            WHAT WE OFFER
        ========================================= */}

        <motion.div
          className="about-features-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} >
          <div className="features-heading">

            <span className="about-mini-title">
              WHAT WE OFFER
            </span>

            <h3>
              Practical solutions for
              <span> everyday business.</span>
            </h3>

            <p>
              Our focus is on providing useful products and dependable
              service for customers across different business needs.
            </p>
          </div>

          <motion.div className="company-features-grid" variants={staggerContainer} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.15 }} >

            {companyFeatures.map((feature) => (
              <motion.div
                className="company-feature-card"
                key={feature.title}
                variants={fadeUp} whileHover={{ y: -8, }} >

                <div className="company-feature-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.text}</p>

                <FiArrowRight className="feature-arrow" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =========================================
            MISSION + VISION
        ========================================= */}

        <div className="about-purpose">

          <motion.div className="purpose-card purpose-mission" variants={fadeLeft}
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -7 }} >

            <div className="purpose-icon">
              <FiTarget />
            </div>

            <span>OUR MISSION</span>

            <h3>
              Delivering dependable
              packaging solutions.
            </h3>

            <p>
              Our mission is to provide practical, quality-focused
              polythene solutions while building strong and lasting
              relationships with the businesses and customers we serve.
            </p>

            <p>
              We want every customer interaction to be simple,
              professional, and focused on finding the right solution.
            </p>
          </motion.div>

          <motion.div className="purpose-card purpose-vision" variants={fadeRight} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -7 }} >

            <div className="purpose-icon">
              <FiTrendingUp />
            </div>

            <span>OUR VISION</span>

            <h3>
              Becoming a trusted
              packaging partner.
            </h3>

            <p>
              We aim to grow into a trusted name in the polythene
              industry by continuously improving our products,
              service, and customer experience.
            </p>

            <p>
              Our long-term goal is to become a dependable partner
              businesses can confidently turn to for their packaging
              requirements.
            </p>
          </motion.div>

        </div>

        {/* =========================================
            CORE VALUES
        ========================================= */}

        <motion.div
          className="about-values-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} >

          <div className="values-heading">
            <span className="about-mini-title">
              OUR CORE VALUES
            </span>

            <h3>
              Principles that guide
              <span> how we work.</span>
            </h3>

            <p>
              Our values influence how we approach our products,
              customers, partnerships, and everyday operations.
            </p>
          </div>

          <motion.div
            className="values-grid" variants={staggerContainer} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          >
            {values.map((value, index) => (
              <motion.div
                className="value-card"
                key={value.title}
                variants={fadeUp} whileHover={{ y: -8, }} >
                <div className="value-icon">
                  {value.icon}
                </div>

                <h4>{value.title}</h4>

                <p>{value.text}</p>

                <span className="value-number">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =========================================
            CUSTOMERS / INDUSTRIES
        ========================================= */}

        <div className="about-industries">

          <motion.div
            className="industries-content" variants={fadeLeft} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <span className="about-mini-title">
              WHO WE SERVE
            </span>

            <h3>
              Supporting different
              <span> types of businesses.</span>
            </h3>

            <p>
              Our packaging solutions can be useful across a variety
              of industries and business environments. Whether you
              operate a small retail business or manage larger
              commercial requirements, we aim to provide practical
              packaging options.
            </p>

            <Link to="/products" className="about-button" >
              Explore Products
              <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div
            className="industries-list" variants={staggerContainer} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            {industries.map((industry, index) => (
              <motion.div
                className="industry-item"
                key={industry}
                variants={fadeUp} whileHover={{ x: 8, }}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {industry}
                </strong>

                <FiArrowRight />
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* =========================================
            WHY CHOOSE US
        ========================================= */}

        <div className="about-bottom">

          <motion.div
            className="about-bottom-content" variants={staggerContainer} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              className="about-mini-title" variants={fadeUp}
            >
              WHY CHOOSE US
            </motion.span>

            <motion.h3 variants={fadeUp}>
              Simple solutions.
              <span> Dependable service.</span>
            </motion.h3>

            <motion.p variants={fadeUp}>
              We believe a good supplier should do more than simply
              provide products. Customers need a company that listens,
              communicates clearly, and understands the importance of
              reliable packaging materials.
            </motion.p>

            <motion.p variants={fadeUp}>
              Our approach is built around making the process easier
              for our customers while maintaining a strong focus on
              quality and dependable service.
            </motion.p>

            <motion.div
              className="about-check-list" variants={staggerContainer}
            >
              {reasons.map((reason) => (
                <motion.div
                  className="about-check"
                  key={reason} variants={fadeUp} whileHover={{ x: 7, }}
                >
                  <FiCheckCircle />

                  <span>
                    {reason}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-mission" variants={fadeRight} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -8, }}
          >
            <motion.div
              className="mission-icon" animate={{ rotate: [0, 5, -5, 0], }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", }}
            >
              <FiPackage />
            </motion.div>

            <span>OUR PROMISE</span>

            <h4>
              Built around quality,
              reliability and trust.
            </h4>

            <p>
              We aim to create lasting customer relationships by
              consistently improving the way we deliver products,
              communicate with customers, and respond to their needs.
            </p>

            <div className="mission-line"></div>

            <small>
              AWARD POLYTHENE COMPANY
            </small>
          </motion.div>

        </div>

        {/* =========================================
            QUALITY COMMITMENT
        ========================================= */}

        <motion.div
          className="quality-section" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}
        >
          <div className="quality-icon">
            <FiShield />
          </div>

          <div className="quality-content">
            <span>
              OUR QUALITY COMMITMENT
            </span>

            <h3>
              Packaging you can
              <strong> depend on.</strong>
            </h3>

            <p>
              We understand that packaging materials represent an
              important part of many businesses. Our focus is therefore
              on providing solutions that are practical, dependable,
              and suitable for the requirements of our customers.
            </p>
          </div>

          <div className="quality-badge">
            <FiCheckCircle />
            <span>QUALITY FOCUSED</span>
          </div>
        </motion.div>

        {/* =========================================
            FINAL CTA
        ========================================= */}

        <motion.div
          className="about-cta" initial={{ opacity: 0, y: 40, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true, amount: 0.2, }}
          transition={{ duration: 0.7, }}
        >
          <div className="cta-content">
            <span>
              HAVE A PACKAGING REQUIREMENT?
            </span>

            <h3>
              Let's find the right
              <strong> solution for you.</strong>
            </h3>

            <p>
              Talk to our team about your polythene and nylon
              requirements.
            </p>
          </div>

          <Link to="/contact" className="cta-button" >
            Contact Us
            <FiArrowRight />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
