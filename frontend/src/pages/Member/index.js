import classNames from 'classnames/bind';
import styles from './Member.module.scss';

const cx = classNames.bind(styles);
function Member() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('member-container')}>
            <div className={cx('left-column')}>
               <div className={cx('item-left-column')}>
                  <div className={cx('member-avatar')}>
                     <img src="https://soict.hust.edu.vn/wp-content/uploads/TrinhVanChien.png" alt="ImageMember"></img>
                  </div>
                  <div className={cx('member-info')}>
                     <div className={cx('member-info__name')}>Trịnh Văn Chiến</div>
                     <div className={cx('member-info__position')}>Giảng viên, Khoa Kỹ thuật máy tính</div>
                     <div className={cx('member-info__degree')}>
                        <p>Tiến sỹ (Đại học Linköping, vương quốc Thụy Điển, năm 2020)</p>
                        <p>Thạc sỹ (Đại học Sungkyunkwan, Hàn Quốc, năm 2014)</p>
                        <p>Đại học (Đại học Bách Khoa Hà Nội năm 2012)</p>
                     </div>
                     <div className={cx('member-info__email')}>
                        <p>
                           Email: <span>chientv@soict.hust.edu.vn</span>
                        </p>
                     </div>
                  </div>
               </div>
               <div className={cx('item-left-column')}>
                  <div className={cx('research-interest')}>LĨNH VỰC NGHIÊN CỨU</div>
                  <ul className={cx('list')}>
                     <li className={cx('item')}>Hệ thống truyền dẫn thông tin</li>
                     <li className={cx('item')}>Học máy</li>
                     <li className={cx('item')}>Xử lý tín hiệu</li>
                     <li className={cx('item')}>Bảo mật lớp vật lý</li>
                  </ul>
               </div>
               <div className={cx('item-left-column')}>
                  <div className={cx('studies-interest')}>CÁC NGHIÊN CỨU QUAN TÂM</div>
                  <ul className={cx('list')}>
                     <li className={cx('item')}>Các công nghệ tiên tiến cho mạng 5G/6G và các thế hệ mạng tiếp theo</li>
                     <li className={cx('item')}>Hệ thống thông tin vệ tinh</li>
                     <li className={cx('item')}>
                        Ứng dụng của học máy cho hệ thống truyền dẫn thông tin và xử lý tín hiệu
                     </li>
                     <li className={cx('item')}>Truyền thông ngữ nghĩa</li>
                     <li className={cx('item')}>Bảo mật lớp vật lý</li>
                  </ul>
               </div>
            </div>
            <div className={cx('right-column')}>
               <div className={cx('item-right-column')}>
                  <div className={cx('intro')}>GIỚI THIỆU</div>
                  <p>
                     TS. Trịnh Văn Chiến nhận bằng kỹ sư chuyên ngành Điện Tử- Viễn Thông của Đại học Bách Khoa Hà Nội
                     năm 2012, bằng thạc sỹ chuyên ngành điện và kỹ thuật máy tính của Đại học Sungkyunkwan, Hàn Quốc,
                     năm 2014, và bằng tiến sỹ chuyên ngành hệ thống thông tin của Đại học Linköping, vương quốc Thụy
                     Điển, năm 2020. Trước khi công tác tại Đại học Bách Khoa Hà Nội, anh có gần 2 năm là nghiên cứu
                     sinh sau tiến sỹ tại Đại học Luxembourg, Luxembourg. Các lĩnh vực nghiên cứu của anh bao gồm các
                     bài toán tôi ưu hóa, phân tích lý thuyết, và các ứng dụng của học máy cho hệ thống thông tin và xử
                     lý tín hiệu ảnh, video.
                  </p>
                  <p>
                     Anh đã nhận được giải thưởng phản biện gương mẫu cho tạp chí IEEE communications letters vào các
                     năm 2016, 2017, và 2021. Anh cũng nhận được giải thưởng nghiên cứu khoa học xuất sắc cho năm đầu
                     tiên của dự án triển khai mạng 5G từ liên minh Châu Âu. Đồng thời, anh cũng tham gia phản biện cho
                     nhiều hội nghị và tạp chí khoa học uy tín.
                  </p>
               </div>
               <div className={cx('item-right-column')}>
                  <div className={cx('research-project')}>DỰ ÁN NGHIÊN CỨU</div>
                  <ul>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Hiền Quốc Ngô, Symeon Chatzinotas và Björn Ottersten, “MIMO lớn hỗ trợ bề mặt
                        thông minh có thể cấu hình lại: Tuyên truyền thuận lợi, Làm cứng kênh và Thiếu xếp hạng,” Tạp
                        chí xử lý tín hiệu IEEE, 2022, đã chấp nhận, IF: 12.551.
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Ngô Hiển Quốc, Symeon Chatzinotas, Marco Di Renzo và Björn Ottersten, “Các hệ
                        thống MIMO khổng lồ không có tế bào hỗ trợ bề mặt thông minh có thể cấu hình lại trên các kênh
                        tương quan không gian,” Giao dịch IEEE trên Truyền thông Không dây, 2022, được chấp nhận, NẾU:
                        7.016.
                     </li>
                     <li className={cx('item')}>
                        Tiep M. Hoang, Trinh Van Chien , Thiên Văn Lương, Symeon Chatzinotas, Björn Ottersten và Lajos
                        Hanzo, “Phát hiện các cuộc tấn công giả mạo trong mạng Ad-hoc hàng không bằng cách sử dụng bộ mã
                        hóa tự động sâu,” Giao dịch của IEEE về pháp y và bảo mật thông tin, tập. 17, trang 1010-1023,
                        tháng 3 năm 2022, NẾU. 7.178.
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Ngô Hiển Quốc, Symeon Chatzinotas, Björn Ottersten và Merouane Debbah, “Kiểm
                        soát năng lượng đường lên trong MIMO lớn với các kênh tán xạ kép,” Giao dịch IEEE trên truyền
                        thông không dây, tập. 21, không. 3, trang 1989-2005, tháng 3 năm 2022, NẾU. 7.016.
                     </li>
                     <li className={cx('item')}>
                        Amin Ghazanfari, Trinh Văn Chiến , Emil Björnson và Erik G. Larsson, “Các phương pháp tiếp cận
                        dựa trên mô hình và dựa trên dữ liệu để ước tính kênh MIMO lớn đường xuống,” Giao dịch IEEE trên
                        truyền thông, tập. 70, số 3, trang 2085 – 2101, tháng 3 năm 2022, IF. 5.083.
                     </li>
                     <li className={cx('item')}>
                        Tiến Hoa Nguyễn, Trinh Văn Chiến , Hiền Quốc Ngô, Xuân Nam Trần và Emil Björnson, “Nhiệm vụ thí
                        điểm để nâng cao hiệu quả quang phổ đường lên và đường xuống chung trong các hệ thống MIMO lớn
                        có tương quan không gian,” Giao dịch của IEEE về công nghệ xe cộ, tập. 70, không. 8, trang 8292
                        – 8297, tháng 8 năm 2021, NẾU. 978 .
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Emil Björnson và Erik G. Larsson, “Tối ưu hóa cân bằng tải và phân bổ năng
                        lượng chung cho các mạng MIMO khổng lồ không dùng tế bào tiết kiệm năng lượng,” Giao dịch IEEE
                        trên truyền thông không dây, tập. 19, không. 10, trang 6798-6812, tháng 10 năm 2020, NẾU. 7.016.
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Thượng Nguyên Cảnh, Emil Björnson và Erik G. Larsson, “Kiểm soát năng lượng
                        trong MIMO lớn di động với hoạt động người dùng thay đổi: Giải pháp học sâu,” Giao dịch IEEE
                        trên truyền thông không dây, tập. 19, không. 9, trang 5732 – 5748, tháng 9 năm 2020, IF. 7.016.
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Christopher Mollén và Emil Björnson, “Giải mã Fading quy mô lớn trong các hệ
                        thống MIMO lớn di động với các kênh tương quan không gian,” Giao dịch IEEE về Truyền thông, tập.
                        67, không. 4, trang 2746 – 2762, tháng 4 năm 2019, NẾU. 5.083.
                     </li>
                     <li className={cx('item')}>
                        Trinh Văn Chiến , Emil Björnson và Erik G. Larsson, “Thiết kế thí điểm chung và phân bổ nguồn
                        đường lên trong các hệ thống MIMO lớn đa ô,” Giao dịch IEEE về truyền thông không dây, tập. 17,
                        không. 3, trang 2000-2015, tháng 3 năm 2018, NẾU. 7.016.
                     </li>
                  </ul>
               </div>
               <div className={cx('item-right-column')}>
                  <div className={cx('prize')}>GIẢI THƯỞNG</div>
                  <ul>
                     <li className={cx('item')}>
                        Giải thưởng phản biện gương mẫu của IEEE wireless communications letters trong 3 năm 2016, 2017,
                        và 2021
                     </li>
                     <li className={cx('item')}>
                        Giải thưởng nghiên cứu xuất sắc của dự án dự án triển khai mạng 5G từ liên minh Châu Âu
                     </li>
                  </ul>
               </div>
               <div className={cx('item-right-column')}>
                  <div className={cx('teaching')}>GIẢNG DẠY</div>
                  <ul>
                     <li className={cx('item')}>Tin học đại cương</li>
                     <li className={cx('item')}>Thực hành kiến trúc máy tính</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Member;
