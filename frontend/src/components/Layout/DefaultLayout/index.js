import Header from '~/components/Layout/components/Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function DefaultLayout({ children }) {
   const location = useLocation();
   let contentHeight = 'auto';

   switch (location.pathname) {
      case '/':
         contentHeight = '3500px';
         break;
      default:
         contentHeight = 'auto';
         break;
   }

   return (
      <div>
         <Header />
         <div style={{ minHeight: contentHeight }}>{children}</div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
