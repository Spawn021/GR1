import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Publication.module.scss';
import { FaAngleDown } from 'react-icons/fa6';

const cx = classNames.bind(styles);

function Publication() {
   const [categoriesVisibility, setCategoriesVisibility] = useState({ 2024: true, 2023: true, 2022: true, 2021: true });

   const toggleCategoryVisibility = (year) => {
      setCategoriesVisibility((prevVisibility) => ({
         ...prevVisibility,
         [year]: !prevVisibility[year],
      }));
   };

   return (
      <div className={cx('wrapper')}>
         <div className={cx('publication_container')}>
            <h2>Publications</h2>
            <div className={cx('publication_category-list')}>
               <div className={cx('publication_category-item', { 'item-expand': categoriesVisibility[2024] })}>
                  <div className={cx('publication_category-title')} onClick={() => toggleCategoryVisibility(2024)}>
                     <div className={cx('icon', { 'icon-expanded': categoriesVisibility[2024] })}>
                        <FaAngleDown />
                     </div>
                     <div className={cx('year_publication', { 'year-expand': categoriesVisibility[2024] })}>
                        Publication in 2024
                     </div>
                  </div>
                  <ol
                     className={cx('publication_list', {
                        visible: categoriesVisibility[2024],
                     })}
                  >
                     <li className={cx('publication_item')}>
                        Duc Anh Nguyen, Ngo Van Linh, Nguyen Kim Anh, Canh Hao Nguyen, Khoat Than. Boosting prior
                        knowledge in streaming variational Bayes. Neurocomputing. 143-159. 01 February 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2024
                     </li>
                  </ol>
               </div>
               <div className={cx('publication_category-item', { 'item-expand': categoriesVisibility[2023] })}>
                  <div className={cx('publication_category-title')} onClick={() => toggleCategoryVisibility(2023)}>
                     <div className={cx('icon', { 'icon-expanded': categoriesVisibility[2023] })}>
                        <FaAngleDown />
                     </div>
                     <div className={cx('year_publication', { 'year-expand': categoriesVisibility[2023] })}>
                        Publication in 2023
                     </div>
                  </div>
                  <ol
                     className={cx('publication_list', {
                        visible: categoriesVisibility[2023],
                     })}
                  >
                     <li className={cx('publication_item')}>
                        Duc Anh Nguyen, Ngo Van Linh, Nguyen Kim Anh, Canh Hao Nguyen, Khoat Than. Boosting prior
                        knowledge in streaming variational Bayes. Neurocomputing. 143-159. 01 February 2023
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2024 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2023
                     </li>
                  </ol>
               </div>
               <div className={cx('publication_category-item', { 'item-expand': categoriesVisibility[2022] })}>
                  <div className={cx('publication_category-title')} onClick={() => toggleCategoryVisibility(2022)}>
                     <div className={cx('icon', { 'icon-expanded': categoriesVisibility[2022] })}>
                        <FaAngleDown />
                     </div>
                     <div className={cx('year_publication', { 'year-expand': categoriesVisibility[2022] })}>
                        Publication in 2022
                     </div>
                  </div>
                  <ol
                     className={cx('publication_list', {
                        visible: categoriesVisibility[2022],
                     })}
                  >
                     <li className={cx('publication_item')}>
                        Duc Anh Nguyen, Ngo Van Linh, Nguyen Kim Anh, Canh Hao Nguyen, Khoat Than. Boosting prior
                        knowledge in streaming variational Bayes. Neurocomputing. 143-159. 01 February 2022
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2021 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2022
                     </li>
                  </ol>
               </div>
               <div className={cx('publication_category-item', { 'item-expand': categoriesVisibility[2021] })}>
                  <div className={cx('publication_category-title')} onClick={() => toggleCategoryVisibility(2021)}>
                     <div className={cx('icon', { 'icon-expanded': categoriesVisibility[2021] })}>
                        <FaAngleDown />
                     </div>
                     <div className={cx('year_publication', { 'year-expand': categoriesVisibility[2021] })}>
                        Publication in 2021
                     </div>
                  </div>
                  <ol
                     className={cx('publication_list', {
                        visible: categoriesVisibility[2021],
                     })}
                  >
                     <li className={cx('publication_item')}>
                        Duc Anh Nguyen, Ngo Van Linh, Nguyen Kim Anh, Canh Hao Nguyen, Khoat Than. Boosting prior
                        knowledge in streaming variational Bayes. Neurocomputing. 143-159. 01 February 2021
                     </li>
                     <li className={cx('publication_item')}>
                        Tuan Linh Dang, Van Chuong Do. Fine-Grained Network Traffic Classification Using Machine
                        Learning: Evaluation and Comparison. AICI 2021 (kỷ yếu được đăng trong Studies in Computational
                        Intelligence Book Series, index bởi Scopus). 151-162. Viện Công nghệ thông tin, Viện Hàn lâm
                        KHCN Việt Nam, Hà Nội, Việt Nam. 15 January 2021
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Publication;
