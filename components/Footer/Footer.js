import React from 'react';
import './Footer.css';
import linkConfig from './linkConfig.json';  // import your configuration file

function LinkList({ links }) {
  return (
    <div className="rad-footer__link-col">
      {links.map(link => <a href={link.url}>{link.name}</a>)}
    </div>
  );
}

function Footer() {
  const { linkList1, linkList2 } = linkConfig;
  
  return (
    <footer className="rad-footer">
      <div className="rad-footer__content">
        <div className="rad-footer__links">
          <LinkList links={linkList1} />
          <LinkList links={linkList2} />
        </div>
        <p className="rad-footer__copyright">© 2023 Your Consulting Business</p>
      </div>
    </footer>
  );
}

export default Footer;
