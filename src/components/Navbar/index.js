import "./index.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { motion } from "framer-motion"; // Importing framer-motion for animations

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
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
          <li className="navbar-item">About</li>
          <li className="navbar-item">Menu</li>
          <li className="navbar-item">Contact</li>
          <li className="navbar-item">
            <button type="button" className="navbar-button">
              BOOK A TABLE
            </button>
          </li>
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
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <li className="drawer-item">About</li>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <li className="drawer-item">Menu</li>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <li className="drawer-item">Contact</li>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <li className="drawer-item">
                      <button type="button" className="drawer-button">
                        BOOK A TABLE
                      </button>
                    </li>
                  </motion.div>
                </ul>
                <div className="drawer-footer">
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
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
