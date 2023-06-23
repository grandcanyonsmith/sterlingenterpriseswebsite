import React, { useState, useEffect, useCallback } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './Header.css';



const NavigationLink = ({ href, children, dropdown, setDropdown }) => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const toggleDropdownMobile = (e, href) => {
        e.preventDefault();
        setDropdown(dropdown === href ? null : href);
    };
  
    const toggleDropdown = useCallback(() => {
      setDropdown(dropdown === href ? null : href);
    }, [dropdown, href, setDropdown]);
  
    return (
        <a 
          className="cmp-global-header__nav-menu-label-button" 
          href={href} 
          onClick={isMobile ? (e) => toggleDropdownMobile(e, href) : toggleDropdown}
        >
          <span className="nav-chevron">
            <span className="nav-text">{children}</span>
            {dropdown === href ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </a>
      );
    };

  

const DropdownMenuItem = ({ href, children }) => (
  <div className="cmp-global-header__nav-menu-item-content">
    <a role="menuitem" href={href}>
      {children}
    </a>
  </div>
);

const Header = () => {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [dropdown, setDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleDropdownMobile = (e, href) => {
        e.preventDefault();
        setDropdown(dropdown === href ? null : href);
      };
    useEffect(() => {
      const handleResize = () => {
        setIsMobileMenuOpen(false);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleMobileMenu = useCallback(() => {
      setIsMobileMenuOpen(prevState => !prevState);
    }, []);

  

    const navLinks = ["#insights", "#services", "#industries", "#careers", "#about"].map((link, index) => (

    <li key={index} className="cmp-global-header__nav-menu-item">
      <NavigationLink href={link} dropdown={dropdown} setDropdown={setDropdown}>
        {link.charAt(1).toUpperCase() + link.slice(2)}
      </NavigationLink>
      {dropdown === link && <DropdownMenuItem href={link}>Sublink for {link.charAt(1).toUpperCase() + link.slice(2)}</DropdownMenuItem>}
    </li>
  ));

  return (
    <header className="header">
      <div className="header-content">
        {/* Render logo */}
        {!isMobile || (isMobile && !isMobileMenuOpen) ? (
          <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png" alt="Logo" />
        ) : null}
        
        {/* Render hamburger menu icon only on mobile */}
        {isMobile && !isMobileMenuOpen && (
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <GiHamburgerMenu />
          </div>
        )}
        
        {/* Render close icon when mobile menu is open */}
        {isMobile && isMobileMenuOpen && (
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <MdClose />
          </div>
        )}
        
        {!isMobile || isMobileMenuOpen ? (
          <nav className={isMobile && "mobile-nav"}>
            <ul className="aem-Grid aem-GridColumn">
              {navLinks}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
};


export default Header;
