import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import ItemNew from './components/ItemNew/ItemNew';
import newsData from './data/newsData';

const cx = classNames.bind(styles);

function News() {
   const [newsToShow, setNewsToShow] = useState(6);
   const [showMoreButton, setShowMoreButton] = useState(true);
   const [showLessButton, setShowLessButton] = useState(false);

   const toggleShowMore = () => {
      const newNewsToShow = newsToShow + 3;
      setNewsToShow(newNewsToShow);

      // Check if all news items are displayed
      if (newNewsToShow >= newsData.length) {
         setShowMoreButton(false);
         setShowLessButton(true);
      }
   };

   const toggleShowLess = () => {
      // Chỉ hiển thị 6 item như lúc đầu
      setNewsToShow(6);

      // Ẩn nút "Thu gọn" và hiển thị nút "Xem thêm"
      setShowLessButton(false);
      setShowMoreButton(true);
   };

   const allNews = newsData;

   return (
      <div className={cx('wrapper-activity')}>
         <div className={cx('container-activity')}>
            <div className={cx('title-activity')}>
               <h2>TYPICAL ACTIVITIES</h2>
               {/* <p>These are the events and activities that marked MCN.CTLab during the year</p> */}
               <div className={cx('list-activity')}>
                  {allNews.slice(0, newsToShow).map((news, index) => (
                     <ItemNew key={news.id} id={news.id} img={news.img} actname={news.actname} actdate={news.actdate} />
                  ))}
               </div>
            </div>
            {showMoreButton && (
               <div className={cx('show-more')}>
                  <button onClick={toggleShowMore}>
                     Xem thêm
                     <BiChevronRight className={cx('icon-chev')} />
                  </button>
               </div>
            )}
            {showLessButton && (
               <div className={cx('show-more')}>
                  <button onClick={toggleShowLess}>
                     Thu gọn
                     <BiChevronLeft className={cx('icon-chev')} />
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}

export default News;
