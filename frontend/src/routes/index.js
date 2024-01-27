//Layout
import { HeaderOnly } from '~/components/Layout';
//Page
import Home from '~/pages/Home';
import News from '~/pages/News';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Member from '~/pages/Member';
import Research from '~/pages/Research';
import Publication from '~/pages/Publication';
import Contact from '~/pages/Contact';
import MainResearch from '~/pages/Research/MainResearch';
import PastProject from '~/pages/Research/PastProject';
//public routes
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/news', component: News },
   { path: '/member', component: Member },
   // { path: '/research/main_research', component: MainResearch },
   {
      path: '/research',
      component: Research,
      children: [
         { path: 'main_research', element: <MainResearch /> },
         { path: 'past_project', element: <PastProject /> },
      ],
   },

   { path: '/publication', component: Publication },
   { path: '/contact', component: Contact },
   { path: '/upload', component: Upload, layout: HeaderOnly },
   { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
