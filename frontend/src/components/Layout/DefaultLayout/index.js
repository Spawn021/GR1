import { useLocation } from 'react-router-dom';
import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
   const location = useLocation();
   let contentHeight = 'auto';

   switch (location.pathname) {
      case '/':
         contentHeight = '3560px';
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
