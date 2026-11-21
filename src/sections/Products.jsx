import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiArrowRight,
    FiCheck,
    FiPackage,
    FiLayers,
    FiShoppingBag,
    FiBox,
    FiSettings,
    FiShield,
    FiX,
} from "react-icons/fi";

import "../styles/products.css";

const products = [
    {
        id: 1,
        name: "Poly Bags",
        category: "Packaging",
        description:
            "Reliable polythene bags designed for everyday packaging, storage, and commercial use.",
        image: "/images/poly-bags.jpg",
        icon: FiPackage,
        features: ["Strong material", "Flexible design", "Different sizes"],
    },
    {
        id: 2,
        name: "Nylon Rolls",
        category: "Nylon",
        description:
            "High-quality nylon rolls suitable for businesses that need flexible and dependable packaging material.",
        image: "/images/nylon-rolls.jpg",
        icon: FiLayers,
        features: ["Multiple thicknesses", "Easy to cut", "Commercial grade"],
    },
    {
        id: 3,
        name: "Shopping Bags",
        category: "Bags",
        description:
            "Clean and durable shopping bags made for retail stores, supermarkets, boutiques, and businesses.",
        image: "/images/shopping-bags.jpg",
        icon: FiShoppingBag,
        features: ["Retail ready", "Custom sizes", "Durable handles"],
    },
    {
        id: 4,
        name: "Packaging Film",
        category: "Packaging",
        description:
            "Versatile packaging film for protecting, wrapping, and securing different products.",
        image: "/images/packaging-film.jpg",
        icon: FiBox,
        features: ["Protective", "Flexible", "Easy handling"],
    },
    {
        id: 5,
        name: "Industrial Nylon",
        category: "Industrial",
        description:
            "Heavy-duty nylon solutions designed for demanding commercial and industrial applications.",
        image: "/images/industrial-nylon.jpg",
        icon: FiSettings,
        features: ["Heavy duty", "Long lasting", "Reliable strength"],
    },
    {
        id: 6,
        name: "Transparent Bags",
        category: "Bags",
        description:
            "Clear polythene bags that provide simple product visibility while keeping items protected.",
        image: "/images/transparent-bags.jpg",
        icon: FiShield,
        features: ["Crystal clear", "Lightweight", "Protective"],
    },
    {
        id: 7,
        name: "Custom Printed Bags",
        category: "Custom",
        description:
            "Custom packaging bags that can help businesses present their brand professionally.",
        image: "/images/custom-bags.jpg",
        icon: FiPackage,
        features: ["Custom branding", "Professional finish", "Various sizes"],
    },
    {
        id: 8,
        name: "Heavy-Duty Polythene",
        category: "Industrial",
        description:
            "Extra-strong polythene designed for applications where durability and protection matter.",
        image: "/images/heavy-duty.jpg",
        icon: FiShield,
        features: ["Extra strong", "Durable", "Industrial use"],
    },
];

const categories = ["All", "Packaging", "Nylon", "Bags", "Industrial", "Custom"];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Products() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                  (product) => product.category === activeCategory
              );

    return (
        <main className="products-page">

            {/* ================= HERO ================= */}

            <section className="products-hero">
                <div className="products-hero-pattern" />

                <div className="products-container products-hero-content">

                    <motion.div
                        className="products-hero-text"
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-label">
                            AWARD POLYTHENE COMPANY
                        </span>

                        <h1>
                            Packaging made
                            <span> better.</span>
                        </h1>

                        <p>
                            Explore our range of dependable polythene and
                            nylon products created for businesses, retailers,
                            manufacturers, and everyday packaging needs.
                        </p>

                        <div className="products-hero-buttons">
                            <Link to="/contact" className="primary-btn">
                                Request a Quote
                                <FiArrowRight />
                            </Link>

                            <a
                                href="#collection"
                                className="secondary-btn"
                            >
                                Explore Products
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="products-hero-card"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <div className="hero-image-placeholder">
                            <span>PRODUCT IMAGE</span>
                        </div>

                        <div className="hero-card-info">
                            <span>OUR COLLECTION</span>
                            <strong>Quality packaging solutions</strong>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ================= INTRO ================= */}

            <section className="products-intro">
                <div className="products-container">

                    <div className="intro-heading">
                        <div>
                            <span className="section-label">
                                WHAT WE OFFER
                            </span>

                            <h2>
                                Built for your
                                <span> business.</span>
                            </h2>
                        </div>

                        <p>
                            From everyday shopping bags to heavy-duty
                            industrial materials, Award Polythene Company
                            provides practical packaging solutions for
                            different business needs.
                        </p>
                    </div>

                    <div className="product-stats">
                        <div>
                            <strong>08+</strong>
                            <span>Product categories</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Quality focused</span>
                        </div>

                        <div>
                            <strong>01</strong>
                            <span>Reliable supplier</span>
                        </div>

                        <div>
                            <strong>∞</strong>
                            <span>Custom possibilities</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= COLLECTION ================= */}

            <section className="product-collection" id="collection">
                <div className="products-container">

                    <div className="collection-heading">
                        <div>
                            <span className="section-label">
                                OUR PRODUCTS
                            </span>

                            <h2>
                                Find what you
                                <span> need.</span>
                            </h2>
                        </div>

                        <p>
                            Browse our collection and find the packaging
                            solution that fits your requirements.
                        </p>
                    </div>

                    {/* Categories */}

                    <div className="category-filter">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? "category active"
                                        : "category"
                                }
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Cards */}

                    <motion.div
                        className="products-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {filteredProducts.map((product) => {
                            const Icon = product.icon;

                            return (
                                <motion.article
                                    className="product-card"
                                    key={product.id}
                                    variants={cardVariants}
                                    layout
                                >
                                    <div className="product-image">
                                        <div className="image-placeholder">
                                            <span>PRODUCT IMAGE</span>
                                        </div>

                                        <span className="product-number">
                                            0{product.id}
                                        </span>

                                        <span className="product-category">
                                            {product.category}
                                        </span>
                                    </div>

                                    <div className="product-content">

                                        <div className="product-icon">
                                            <Icon />
                                        </div>

                                        <h3>{product.name}</h3>

                                        <p>{product.description}</p>

                                        <div className="product-features">
                                            {product.features.map(
                                                (feature) => (
                                                    <span key={feature}>
                                                        <FiCheck />
                                                        {feature}
                                                    </span>
                                                )
                                            )}
                                        </div>

                                        <button
                                            type="button"
                                            className="product-link"
                                            onClick={() =>
                                                setSelectedProduct(product)
                                            }
                                        >
                                            View Product
                                            <FiArrowRight />
                                        </button>

                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>

                </div>
            </section>

            {/* ================= FEATURED ================= */}

            <section className="featured-product">
                <div className="products-container featured-layout">

                    <div className="featured-image">
                        <div className="featured-placeholder">
                            <span>FEATURED PRODUCT IMAGE</span>
                        </div>

                        <span className="featured-tag">
                            FEATURED
                        </span>
                    </div>

                    <div className="featured-content">
                        <span className="section-label">
                            WHY CUSTOM PACKAGING
                        </span>

                        <h2>
                            Make your packaging
                            <span> part of your brand.</span>
                        </h2>

                        <p>
                            Your packaging is often one of the first things
                            customers see. We can provide practical packaging
                            solutions that help your products look clean,
                            professional, and ready for business.
                        </p>

                        <div className="featured-list">
                            <div>
                                <FiCheck />
                                <span>Professional appearance</span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>Flexible sizes and designs</span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>Suitable for different businesses</span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>Reliable packaging material</span>
                            </div>
                        </div>

                        <Link to="/contact" className="primary-btn">
                            Discuss Your Requirement
                            <FiArrowRight />
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= QUALITY ================= */}

            <section className="quality-section">
                <div className="products-container">

                    <div className="quality-heading">
                        <span className="section-label">
                            THE AWARD STANDARD
                        </span>

                        <h2>
                            Simple products.
                            <span> Serious quality.</span>
                        </h2>
                    </div>

                    <div className="quality-grid">

                        <div className="quality-card">
                            <div className="quality-icon">
                                <FiShield />
                            </div>

                            <h3>Reliable Materials</h3>

                            <p>
                                We focus on providing dependable packaging
                                materials suitable for different applications.
                            </p>
                        </div>

                        <div className="quality-card">
                            <div className="quality-icon">
                                <FiSettings />
                            </div>

                            <h3>Flexible Solutions</h3>

                            <p>
                                Different sizes, thicknesses, and packaging
                                requirements can be handled according to need.
                            </p>
                        </div>

                        <div className="quality-card">
                            <div className="quality-icon">
                                <FiPackage />
                            </div>

                            <h3>Business Ready</h3>

                            <p>
                                Our products are suitable for retailers,
                                manufacturers, businesses, and everyday users.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ================= PROCESS ================= */}

            <section className="product-process">
                <div className="products-container">

                    <div className="process-heading">
                        <span className="section-label">
                            HOW IT WORKS
                        </span>

                        <h2>
                            Need packaging?
                            <span> Let's make it simple.</span>
                        </h2>
                    </div>

                    <div className="process-list">

                        <div className="process-row">
                            <span>01</span>

                            <div>
                                <h3>Tell us what you need</h3>
                                <p>
                                    Share the type, size, quantity, or
                                    packaging requirement you have.
                                </p>
                            </div>

                            <FiArrowRight />
                        </div>

                        <div className="process-row">
                            <span>02</span>

                            <div>
                                <h3>Get the right solution</h3>
                                <p>
                                    We help identify a suitable product for
                                    your specific requirement.
                                </p>
                            </div>

                            <FiArrowRight />
                        </div>

                        <div className="process-row">
                            <span>03</span>

                            <div>
                                <h3>Place your request</h3>
                                <p>
                                    Confirm your requirements and let us
                                    handle the next step.
                                </p>
                            </div>

                            <FiArrowRight />
                        </div>

                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}

            <section className="products-cta">
                <div className="products-container">

                    <div className="cta-content">
                        <span className="section-label">
                            HAVE A REQUIREMENT?
                        </span>

                        <h2>
                            Let's package
                            <em> your business.</em>
                        </h2>

                        <p>
                            Tell us what you're looking for and let's discuss
                            the right polythene or nylon solution for you.
                        </p>

                        <Link to="/contact" className="cta-btn">
                            Get In Touch
                            <FiArrowRight />
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= MODAL ================= */}

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        className="product-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            className="product-modal"
                            initial={{ opacity: 0, scale: 0.94, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="modal-close"
                                onClick={() => setSelectedProduct(null)}
                                aria-label="Close"
                            >
                                <FiX />
                            </button>

                            <div className="modal-image">
                                <div className="image-placeholder">
                                    <span>PRODUCT IMAGE</span>
                                </div>
                            </div>

                            <div className="modal-content">

                                <span>
                                    {selectedProduct.category}
                                </span>

                                <h2>{selectedProduct.name}</h2>

                                <p>
                                    {selectedProduct.description}
                                </p>

                                <div className="modal-features">
                                    {selectedProduct.features.map(
                                        (feature) => (
                                            <div key={feature}>
                                                <FiCheck />
                                                {feature}
                                            </div>
                                        )
                                    )}
                                </div>

                                <Link
                                    to="/contact"
                                    className="primary-btn"
                                    onClick={() =>
                                        setSelectedProduct(null)
                                    }
                                >
                                    Request Information
                                    <FiArrowRight />
                                </Link>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}

export default Products;
