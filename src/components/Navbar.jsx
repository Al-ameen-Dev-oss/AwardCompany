import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiMenu,
    FiMoon,
    FiSun,
    FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

import awardLogo from "../assets/images/logo.png";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Us", path: "/why-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img
                        src={awardLogo}
                        alt="Award Polythene Company"
                        className="navbar-logo-image"
                    />

                    <div className="logo-text">
                        <span className="logo-name">AWARD</span>
                        <span className="logo-company">
                            POLYTHENE COMPANY
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="nav-link" onClick={closeMenu}>
                            {link.name}
                        </Link>
                    ))}

                    <Link to="/contact" className="navbar-cta" onClick={closeMenu} >
                        Get In Touch
                        <FiArrowRight />
                    </Link>
                </nav>

                {/* Actions */}
                <div className="navbar-actions">

                    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>

                    <button type="button" className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} >

                        <AnimatePresence mode="wait" initial={false} >
                            <motion.span
                                key={menuOpen ? "close" : "menu"}
                                initial={{ opacity: 0, rotate: -90, scale: 0.7, }}
                                animate={{ opacity: 1, rotate: 0, scale: 1, }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.7, }}
                                transition={{ duration: 0.2 }}
                            >
                                {menuOpen ? <FiX /> : <FiMenu />}
                            </motion.span>
                        </AnimatePresence>
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Navbar;