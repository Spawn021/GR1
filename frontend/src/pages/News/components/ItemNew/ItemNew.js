import classNames from 'classnames/bind';
import styles from './ItemNew.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const ItemNew = ({ img, actname, actdate }) => {
   return (
      <div className={cx('item-activity')}>
         <div className={cx('image-activity')}>
            <img className={cx('image')} src={img}></img>
         </div>
         <div className={cx('info-activity')}>
            <div className={cx('name-activity')}>{actname}</div>
            <div className={cx('date-activity')}>{actdate}</div>
         </div>
      </div>
   );
};
ItemNew.propTypes = {
   img: PropTypes.string.isRequired,
   actname: PropTypes.string.isRequired,
   actdate: PropTypes.string.isRequired,
};

export default ItemNew;
