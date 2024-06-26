//Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/store/AuthContext';
import styles from './Login.module.scss'; // Import CSS module
import classNames from 'classnames/bind';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchLogin } from '~/services/admin';
import LeftImg from '~/assets/images/login.jpg';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Login() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const { login } = useAuth();
   const navigate = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const result = await fetchLogin(username, password);
         console.log('result', result.status);
         if (result.status) {
            toast.success('Logged in successfully');
            login();
            setTimeout(() => {
               navigate('/admin');
            }, 2000);
         } else {
            toast.error('Invalid username or password');
         }
      } catch (error) {
         console.error('Error fetching activities:', error);
      }
   };

   return (
      <div className={cx('wrapper')}>
         <ToastContainer />
         <div className={cx('login')}>
            <img className={cx('left-img')} src={LeftImg} alt="leftImg" />
            <form className={cx('right')} onSubmit={handleSubmit}>
               <h3>Login Here</h3>
               <p>Welcome back! Login to your account to manage website:</p>
               <div className={cx('login-field')}>
                  <div className={cx('login-icon')}>
                     <FaUser />
                  </div>
                  <input
                     className={cx('login-input')}
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div className={cx('login-field')}>
                  <div className={cx('login-icon')}>
                     <FaLock />
                  </div>
                  <input
                     className={cx('login-input')}
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <button className={cx('btn-submit')} type="submit">
                  Login
               </button>
            </form>
         </div>
      </div>
   );
}

export default Login;
