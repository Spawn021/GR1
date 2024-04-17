import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { MdOutlineLocationOn } from 'react-icons/md';
import IconYtb from '../../../../assets/images/icons/youtube.svg';
import IconFb from '../../../../assets/images/icons/fb.svg';
import IconTiktok from '../../../../assets/images/icons/tiktok.svg';
import IconIns from '../../../../assets/images/icons/ins.webp';

const cx = classNames.bind(styles);

function Footer({ activeLink, handleLinkClick }) {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('footer-panel')}>
            <div className={cx('footer-container')}>
               <div className={cx('big-column')}>
                  <div className={cx('big-column-item')}>
                     <div className={cx('big-column-item-left')}>
                        <div className={cx('small-column-item-left')}>
                           <div className={cx('big-text')}>Thông tin</div>
                           <div className={cx('small-text')}>Email: chien.trinhvan@hust.edu.vn</div>
                           <div className={cx('small-text')}>Hotline: 0123456789</div>
                           <div className={cx('small-text')}>Giờ làm việc: 8h00 - 11h30, 14h - 17h30</div>
                        </div>

                        <div className={cx('small-column-item-right')}>
                           <div className={cx('big-text')}>Tiện ích</div>
                           <Link
                              to="/"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/')}
                              className={cx('small-text', 'text-hover', { 'active-class': activeLink === '/' })}
                           >
                              Introduction
                           </Link>
                           <a
                              href="/#member"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/#member')}
                              className={cx('small-text', 'text-hover', { 'active-class': activeLink === '/#member' })}
                           >
                              Instructor
                           </a>
                           <a
                              href="/#student"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/#student')}
                              className={cx('small-text', 'text-hover', { 'active-class': activeLink === '/#student' })}
                           >
                              Student
                           </a>
                           <Link
                              smooth
                              to="/research/main_research"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/research')}
                              className={cx('small-text', 'text-hover', { 'active-class': activeLink === '/research' })}
                           >
                              Research
                           </Link>
                           <Link
                              smooth
                              to="/publication"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/publication')}
                              className={cx('small-text', 'text-hover', {
                                 'active-class': activeLink === '/publication',
                              })}
                           >
                              Publication
                           </Link>
                           <Link
                              smooth
                              to="/news"
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleLinkClick('/news')}
                              className={cx('small-text', 'text-hover', { 'active-class': activeLink === '/news' })}
                           >
                              News
                           </Link>
                        </div>
                     </div>
                     <div className={cx('big-column-item-right')}>
                        <div className={cx('small-column-item-left')}>
                           <div className={cx('big-text')}>Chính sách</div>
                           <div className={cx('small-text')}>Chính sách chung</div>
                           <div className={cx('small-text')}>Chính sách bảo mật thông tin</div>
                           <div className={cx('small-text')}>Vi phạm chính sách</div>
                        </div>
                        <div className={cx('small-column-item-right')}>
                           <div className={cx('big-text')}>Kết nối với chúng tôi</div>
                           <div className={cx('list-logo')}>
                              <img src={IconYtb}></img>
                              <img src={IconIns}></img>
                              <img src={IconFb}></img>
                              <img src={IconTiktok}></img>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('box')}>
                  <MdOutlineLocationOn className={cx('icon-location')} />
                  <div className={cx('small-text')}>
                     Địa chỉ: Phòng 408, Tòa B1 - SoICT, số 1, Đại Cồ Việt, Q.Hai Bà Trưng, TP. Hà Nội
                  </div>
               </div>
            </div>
         </div>
         <div className={cx('footer2')}>
            Copyright 2024 © MCN.CTLab
            <br></br>
            Modern Computer Networks and Communications Technology Lab
         </div>
      </header>
   );
}

export default Footer;
