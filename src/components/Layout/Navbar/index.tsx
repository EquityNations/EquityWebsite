import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from './navbar.module.css';
import { AppIcon, HamburgetMenuClose, HamburgetMenuOpen } from "../Icons";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [serviceMenuClick, setServiceMenuClick] = useState(false);
  const [supportMenuClick, setSupportMenuClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleServiceMenuClick = () => {
    setServiceMenuClick(!serviceMenuClick);
    setSupportMenuClick(false); 
  };
  const handleSupportMenuClick = () => {
    setSupportMenuClick(!supportMenuClick);
    setServiceMenuClick(false); 
  };

  const activeClass = `${classes.navLinks} ${classes.active} `;
  const activeMenuClass = `${classes.navMenu} ${classes.active} `;  
  const activeNavBarClass = `${classes.navbar} ${classes.active} `;

  return (
    <nav className={click ? activeNavBarClass : classes.navbar}>
      <div className={classes.navContainer}>
        <NavLink to="/" className={classes.navLogo}>
          <span className={classes.icon}>
            <AppIcon />
          </span>
          <span className={classes.navSpace}></span>
          <span className={classes.navAppText}>Equity Nations</span>
        </NavLink>

        <ul className={click ? activeMenuClass : classes.navMenu}>
          <li className={classes.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) => { return isActive ? activeClass : classes.navLinks }}
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) => { return isActive ? activeClass : classes.navLinks }}
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <div className={classes.navService}>
            <div>
              <li className={classes.navSerlist}>
                <div className={classes.navSerbuttonDiv}>
                  <button type="button" className={classes.navSerbutton} onClick={handleServiceMenuClick}>
                    <span className={classes.navLinks} >What We Offer</span>
                    <span className={classes.navSerSvgDiv}>
                      <svg height="12" width="12" className={serviceMenuClick ? classes.navServiceIconTilt : classes.navServiceIcon}>
                        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" className={classes.navSerSvg} />
                      </svg>
                    </span>
                  </button>
                </div>
                {serviceMenuClick && (
                  <div className={classes.navSerDropMenu}>
                    <li className={classes.navSerDropMenuBlock}>
                     
                      <a data-testid="navigation-link-Global-Investing" className={classes.navSerDropMenuItem} href="https://www.indiainxga.com/" target="_blank">
                        <span className={classes.navDropDownText}>Global Investing</span>
                      </a>
                    </li>
                  </div>
                )}
              </li>
            </div>
          </div>
          <div className={classes.navMobileSeviceList}>
            <li className={classes.navItem}>
              <NavLink
                to="https://www.indiainxga.com/"
                className={({ isActive }) => { return isActive ? activeClass : classes.navLinks }}
                onClick={handleClick}
                target="_blank"
              >
                Global Investing
              </NavLink>
            </li>
          </div>
          <li className={classes.navItem}>
            <NavLink
              to="/pricing"
              className={({ isActive }) => { return isActive ? activeClass : classes.navLinks }}
              onClick={handleClick}
            >
              Pricing
            </NavLink>
          </li>
          <div className={classes.navService}>
            <div>
              <li className={classes.navSerlist}>
                <div className={classes.navSerbuttonDiv}>
                  <button type="button" className={classes.navSerbutton} onClick={handleSupportMenuClick}>
                    <span className={classes.navLinks} >Support</span>
                    <span className={classes.navSerSvgDiv}>
                      <svg height="12" width="12" className={supportMenuClick ? classes.navServiceIconTilt : classes.navServiceIcon}>
                        <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" className={classes.navSerSvg} />
                      </svg>
                    </span>
                  </button>
                </div>
                {supportMenuClick && (
                  <div className={classes.navSerDropMenu}>
                    <li className={classes.navSerDropMenuBlock}>
                      <a data-testid="navigation-link-FAQ" className={classes.navSerDropMenuItem} href="./support" target="_blank">
                        <span className={classes.navDropDownText}>FAQ</span>
                      </a>
                      <a data-testid="navigation-link-contactUs" className={classes.navSerDropMenuItem} href="/contact" target="_blank">
                        <span className={classes.navDropDownText}>Contact Us</span>
                      </a>
                    </li>
                  </div>
                )}
              </li>
            </div>
          </div>
          <li className={classes.navButtonItem}>
            <a type="anchor" href="/login" className={classes.navLogin}>
              <span className={classes.text}>Log in</span>
            </a>
          </li>
          <span className={classes.navSpace}></span>
          <li className={classes.navButtonItem}>
            <a type="anchor" href="/signup" className={classes.navSignUp}>
              <span className={classes.signUpText}>Sign Up</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={classes.navIcon} onClick={handleClick}>
        {click ? (
          <span className={classes.icon}>
            <HamburgetMenuClose />{" "}
          </span>
        ) : (
          <span className={classes.icon}>
            <HamburgetMenuOpen />
          </span>
        )}
      </div>
    </nav>
  );
}
