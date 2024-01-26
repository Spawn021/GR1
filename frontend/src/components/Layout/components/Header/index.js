import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.module.scss';

import Logo from '~/assets/images/logo.jpg';

const cx = classNames.bind(styles);
function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         // Kiểm tra vị trí cuộn và cập nhật trạng thái
         const scrolled = window.scrollY > 0;
         setIsScrolled(scrolled);
      };

      // Thêm sự kiện cuộn
      window.addEventListener('scroll', handleScroll);

      // Làm sạch sự kiện khi component unmount
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Sử dụng classNames để quản lý class và thêm class 'scrolled' nếu đã cuộn
   const wrapperClasses = cx('wrapper', { scrolled: isScrolled });
   return (
      <header className={wrapperClasses}>
         <div className={cx('grid')}>
            <div className={cx('header__navbar')}>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className={cx('header__navbar-logo')}>
                           <img src={Logo} alt="Trang chủ" className={cx('header__navbar-logo-img')} />
                        </div>
                     </Link>
                     <span className={cx('header__navbar-slogan')}>
                        Modern Computer Networks and
                        <br></br>Communications Technology Lab
                     </span>
                  </li>
               </ul>
               <ul className={cx('header__navbar-list')}>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        to="/"
                        className={cx('header__navbar-item-link', 'header__navbar-home-page')}
                        style={{ textDecoration: 'none' }}
                     >
                        INTRODUCTION
                     </Link>
                  </li>
                  <li
                     className={cx(
                        'header__navbar-item',
                        'header__navbar-item--has-list',
                        'header__navbar-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <Link smooth to="/#member" className={cx('header__navbar-item-link')}>
                        MEMBER
                     </Link>
                     <div className={cx('header__member')}>
                        <ul className={cx('header__member-list')}>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Huynh Thi Thanh Binh
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                           <li className={cx('header__member-item')}>
                              {/* eslint-disable-next-line */}
                              <a href="" className={cx('header__member-item-name')}>
                                 Trịnh Văn Chiến
                              </a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link to="/research" className={cx('header__navbar-item-link')} style={{ textDecoration: 'none' }}>
                        RESEARCH
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        to="/publication"
                        className={cx('header__navbar-item-link')}
                        style={{ textDecoration: 'none' }}
                     >
                        PUBLICATION
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link to="/news" className={cx('header__navbar-item-link')} style={{ textDecoration: 'none' }}>
                        NEWS
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link to="/contact" className={cx('header__navbar-item-link')} style={{ textDecoration: 'none' }}>
                        CONTACT
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default Header;
