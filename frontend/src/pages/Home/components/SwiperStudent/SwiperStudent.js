import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import classNames from 'classnames/bind';
import styles from './SwiperStudent.module.scss';
import './custom-pagination.css';
import { useState, useEffect } from 'react';
import { fetchStudentMembers } from '~/services/students';

const cx = classNames.bind(styles);

export default function SwiperStudent() {
   const [members, setMembers] = useState(null);

   const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   };

   useEffect(() => {
      const getMembers = async () => {
         const members = await fetchStudentMembers();
         setMembers(members);
      };

      if (!members) {
         getMembers();
      }
   }, []);

   return (
      <Swiper
         slidesPerView={2}
         spaceBetween={20}
         slidesPerGroup={2}
         loop={true}
         pagination={pagination}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         modules={[Pagination]}
         className="mySwiperSlide"
         breakpoints={{
            // khi màn hình rộng hơn 740px
            740: {
               slidesPerView: 3,
               slidesPerGroup: 3,
            },
            // khi màn hình rộng hơn 1024px
            1024: {
               slidesPerView: 4,
               slidesPerGroup: 4,
            },
         }}
      >
         {members &&
            members.map((member) => (
               <SwiperSlide key={member._id}>
                  <div>
                     <div className={cx('container')}>
                        <div className={cx('name')}>{member.name}</div>
                        <img
                           style={{ left: '0px' }}
                           className={cx('image-item')}
                           src={member.image}
                           alt="ImageMember"
                        ></img>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
      </Swiper>
   );
}
