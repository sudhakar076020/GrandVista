import { useState } from "react";

import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion"; // Importing framer-motion for animations

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const NavLinkList = [
  { id: "HOME", linkName: "Home", routePathName: "/", delayTime: 0.2 },
  { id: "MENU", linkName: "Menu", routePathName: "/menu", delayTime: 0.4 },
  { id: "ABOUT", linkName: "About", routePathName: "/about", delayTime: 0.6 },
  {
    id: "CONTACT",
    linkName: "Contact",
    routePathName: "/contact",
    delayTime: 0.8,
  },
  {
    id: "BOOKTABLE",
    linkName: "Book Table",
    routePathName: "/tableReservation",
    delayTime: 1.0,
  },
];

const Navbar = () => {
  const [active, setActive] = useState(NavLinkList[0].id);
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <nav className="navbar-container">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="navbar-logo">GrandVista.</div>
        </motion.div>

        {/* Desktop menu */}
        <ul className="navbar-list">
          {NavLinkList.map((link) => (
            <Link to={link.routePathName}>
              <li
                key={link.id}
                className={`nav-item ${active === "home" ? "active" : ""}`}
                onClick={() => setActive(link.id)}
              >
                {link.linkName}
              </li>
            </Link>
          ))}
        </ul>

        {/* Small device menu */}
        <div className="popup-wrapper">
          <Popup
            trigger={(open) => (
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button className="hamburger_close-button" type="button">
                  {open ? (
                    <IoCloseOutline className="close-icon" />
                  ) : (
                    <RxHamburgerMenu className="hamburger-icon" />
                  )}
                </button>
              </motion.div>
            )}
            modal
            closeOnDocumentClick
            overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
            contentStyle={{
              padding: 0,
              border: "none",
              background: "transparent",
            }}
          >
            {(close) => (
              <div className="drawer-popup">
                <button className="drawer-close-btn" onClick={close}>
                  <IoCloseOutline className="close-icon" />
                </button>
                <ul className="drawer-menu-list">
                  {NavLinkList.map((link) => (
                    <motion.div
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: link.delayTime }}
                    >
                      <Link to={link.routePathName} onClick={close}>
                        <li className="drawer-item">{link.linkName}</li>
                      </Link>
                    </motion.div>
                  ))}
                </ul>
                <div className="drawer-footer">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <div className="drawer-footer-line"></div>
                    <p>© 2025 GrandVista by Sudhakar</p>
                  </motion.div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
