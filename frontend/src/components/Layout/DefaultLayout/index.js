import React, { useState } from 'react';
import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
   const [activeLink, setActiveLink] = useState(null);

   const handleLinkClick = (link) => {
      setActiveLink(link);
      window.scrollTo(0, 0);
   };
   return (
      <div>
         <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
         <div>{children}</div>
         <Footer activeLink={activeLink} handleLinkClick={handleLinkClick} />
      </div>
   );
}

export default DefaultLayout;
