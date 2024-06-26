import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { HiBars3 } from 'react-icons/hi2';
import Logo from '~/assets/images/logo.jpg';
import { fetchInstructorMembers } from '~/services/instructors';
const cx = classNames.bind(styles);
function Header({ activeLink, handleLinkClick }) {
   const [isScrolled, setIsScrolled] = useState(false);
   const [members, setMembers] = useState(null);
   const mobileMenuRef = useRef(null);

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   useEffect(() => {
      const handleOutsideClick = (event) => {
         if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setIsMobileMenuOpen(false);
         }
      };

      document.addEventListener('mousedown', handleOutsideClick);

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      };
   }, []);
   const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   useEffect(() => {
      const getMembers = async () => {
         const members = await fetchInstructorMembers();
         setMembers(members);
      };

      if (!members) {
         getMembers();
      }
   }, []);

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
                     <HiBars3 className={cx('header__navbar-bars')} onClick={handleMobileMenuToggle} />
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        to="/"
                        onClick={() => handleLinkClick('/')}
                        className={cx('header__navbar-item-link', 'header__navbar-home-page', {
                           'active-class': activeLink === '/',
                        })}
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
                     <Link
                        smooth
                        to="/#member"
                        onClick={() => handleLinkClick('/#member')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/#member',
                        })}
                     >
                        INSTRUCTOR
                     </Link>
                     <div className={cx('header__member')}>
                        <ul className={cx('header__member-list')}>
                           {members &&
                              members.map((member) => (
                                 <li className={cx('header__member-item')} key={member._id}>
                                    {/* eslint-disable-next-line */}
                                    <Link
                                       to={`/member/${member._id}`}
                                       onClick={() => window.scrollTo(0, 0)}
                                       className={cx('header__member-item-name')}
                                    >
                                       {member.name}
                                    </Link>
                                 </li>
                              ))}
                        </ul>
                     </div>
                  </li>
                  <li
                     className={cx(
                        'header__navbar-item',
                        'header__navbar-item--has-list',
                        'header__navbar-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <Link
                        smooth
                        to="/#student"
                        onClick={() => handleLinkClick('/#student')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/#student',
                        })}
                     >
                        STUDENT
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        smooth
                        to="/research/main_research"
                        onClick={() => handleLinkClick('/research')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/research',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        RESEARCH
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        smooth
                        to="/publication"
                        onClick={() => handleLinkClick('/publication')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/publication',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        PUBLICATION
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        smooth
                        to="/news"
                        onClick={() => handleLinkClick('/news')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/news',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        NEWS
                     </Link>
                  </li>
                  <li className={cx('header__navbar-item')}>
                     <Link
                        smooth
                        to="/contact"
                        onClick={() => handleLinkClick('/contact')}
                        className={cx('header__navbar-item-link', {
                           'active-class': activeLink === '/contact',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        CONTACT
                     </Link>
                  </li>
               </ul>
               <ul
                  ref={mobileMenuRef}
                  className={cx('navbar-responsive-list', { 'navbar-responsive-list--open': isMobileMenuOpen })}
               >
                  <li className={cx('navbar-responsive-item')}>
                     <Link
                        to="/"
                        onClick={() => handleLinkClick('/')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/',
                        })}
                     >
                        INTRODUCTION
                     </Link>
                  </li>
                  <li
                     className={cx(
                        'navbar-responsive-item',
                        'navbar-responsive-item--has-list',
                        'navbar-responsive-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <Link
                        smooth
                        to="/#member"
                        onClick={() => handleLinkClick('/#member')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/#member',
                        })}
                     >
                        INSTRUCTOR
                     </Link>
                     <div className={cx('header__member')}>
                        <ul className={cx('header__member-list')}>
                           {members &&
                              members.map((member) => (
                                 <li className={cx('header__member-item')} key={member._id}>
                                    {/* eslint-disable-next-line */}
                                    <Link
                                       to={`/member/${member._id}`}
                                       onClick={() => window.scrollTo(0, 0)}
                                       className={cx('header__member-item-name')}
                                    >
                                       {member.name}
                                    </Link>
                                 </li>
                              ))}
                        </ul>
                     </div>
                  </li>
                  <li
                     className={cx(
                        'navbar-responsive-item',
                        'navbar-responsive-item--has-list',
                        'navbar-responsive-item--separate',
                     )}
                  >
                     {/* eslint-disable-next-line */}
                     <Link
                        smooth
                        to="/#student"
                        onClick={() => handleLinkClick('/#student')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/#student',
                        })}
                     >
                        STUDENT
                     </Link>
                  </li>
                  <li className={cx('navbar-responsive-item')}>
                     <Link
                        smooth
                        to="/research/main_research"
                        onClick={() => handleLinkClick('/research')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/research',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        RESEARCH
                     </Link>
                  </li>
                  <li className={cx('navbar-responsive-item')}>
                     <Link
                        smooth
                        to="/publication"
                        onClick={() => handleLinkClick('/publication')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/publication',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        PUBLICATION
                     </Link>
                  </li>
                  <li className={cx('navbar-responsive-item')}>
                     <Link
                        smooth
                        to="/news"
                        onClick={() => handleLinkClick('/news')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/news',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
                        NEWS
                     </Link>
                  </li>
                  <li className={cx('navbar-responsive-item')}>
                     <Link
                        smooth
                        to="/contact"
                        onClick={() => handleLinkClick('/contact')}
                        className={cx('navbar-responsive-item-link', {
                           'active-class': activeLink === '/contact',
                        })}
                        style={{ textDecoration: 'none' }}
                     >
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
