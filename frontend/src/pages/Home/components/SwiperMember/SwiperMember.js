import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import classNames from 'classnames/bind';
import styles from './SwiperMember.module.scss';
import './custom-pagination.css';
const cx = classNames.bind(styles);

export default function SwiperMember() {
   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   return (
      <Swiper
         slidesPerView={4}
         spaceBetween={20}
         slidesPerGroup={4}
         loop={true}
         pagination={pagination}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         modules={[Pagination]}
         className="mySwiperSlide"
      >
         <SwiperSlide>
            <div className={cx('container-wrapper')}>
               <div className={cx('container')}>
                  <img
                     style={{ left: '0px' }}
                     className={cx('image-item')}
                     src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                     alt="ImageFeedback"
                  ></img>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F948541500-1649217432673-tranminhphuong.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F948541500-1649217432673-tranminhphuong.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F948541500-1649217432673-tranminhphuong.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F948541500-1649217432673-tranminhphuong.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F948541500-1649217432673-tranminhphuong.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F774990213-1649217469173-tranvan.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className={cx('container')}>
               <img
                  style={{ left: '0px' }}
                  className={cx('image-item')}
                  src="https://onthisinhvien.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fonthisinhvien.appspot.com%2Fimages%2F479012615-1649216916801-hohue.jpg&w=1920&q=75"
                  alt="ImageFeedback"
               ></img>
            </div>
         </SwiperSlide>
      </Swiper>
   );
}
