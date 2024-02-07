//Activity.js
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Activity.module.scss';
// import { useAuth } from '~/store/AuthContext';
// import { Navigate } from 'react-router-dom';
import { IoAddCircle } from 'react-icons/io5';
import { FaMinusCircle } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
const cx = classNames.bind(styles);
function Activity() {
   // const { isLoggedIn } = useAuth();
   // if (!isLoggedIn) {
   //    return <Navigate to="/login" />;
   // }
   const [showModalAdd, setShowModalAdd] = useState(false);
   const openModalAdd = () => {
      setShowModalAdd(true);
   };
   const closeModalAdd = () => {
      setShowModalAdd(false);
   };
   const [showModalDelete, setShowModalDelete] = useState(false);
   const openModalDelete = () => {
      setShowModalDelete(true);
   };
   const closeModalDelete = () => {
      setShowModalDelete(false);
   };
   const [showModalEdit, setShowModalEdit] = useState(false);
   const openModalEdit = () => {
      setShowModalEdit(true);
   };
   const closeModalEdit = () => {
      setShowModalEdit(false);
   };
   return (
      <div className={cx('content')}>
         <div className={cx('container')}>
            <div className={cx('table-responsive')}>
               <div className={cx('table-wrapper')}>
                  <div className={cx('table-title')}>
                     <div className={cx('row')}>
                        <div className={cx('item-row')}>
                           <h2>
                              Manage <b>Activities</b>
                           </h2>
                        </div>
                        <div className={cx('item-row')}>
                           <div className={cx('btn-danger')} onClick={openModalDelete}>
                              <i className={cx('material-icons')}>
                                 <FaMinusCircle />
                              </i>
                              <span>Delete</span>
                           </div>
                           <div className={cx('btn-success')} onClick={openModalAdd}>
                              <i className={cx('material-icons')}>
                                 <IoAddCircle />
                              </i>
                              <span>Add New Activity</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <table className={cx('table')}>
                     <thead>
                        <tr>
                           <th>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="selectAll" />
                                 <label for="selectAll"></label>
                              </span>
                           </th>
                           <th>Name</th>
                           <th>Image</th>
                           <th>Date</th>
                           <th>Actions</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                 <label for="checkbox1"></label>
                              </span>
                           </td>
                           <td>Thomas Hardy</td>
                           <td>thomashardy@mail.com</td>
                           <td>89 Chiaroscuro Rd, Portland, USA</td>
                           <td className={cx('icon-action')}>
                              <div className={cx('icons-hover')} onClick={openModalEdit}>
                                 <i className={cx('icons-edit')}>
                                    <CiEdit />
                                 </i>
                                 <div className={cx('edit')}>Edit</div>
                              </div>
                              <div className={cx('icons-hover')} onClick={openModalDelete}>
                                 <i className={cx('icons-delete')}>
                                    <MdDelete />
                                 </i>
                                 <div className={cx('delete')}>Delete</div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="checkbox2" name="options[]" value="1" />
                                 <label for="checkbox2"></label>
                              </span>
                           </td>
                           <td>Dominique Perrier</td>
                           <td>dominiqueperrier@mail.com</td>
                           <td>Obere Str. 57, Berlin, Germany</td>
                           <td className={cx('icon-action')}>
                              <div className={cx('icons-hover')} onClick={openModalEdit}>
                                 <i className={cx('icons-edit')}>
                                    <CiEdit />
                                 </i>
                                 <div className={cx('edit')}>Edit</div>
                              </div>
                              <div className={cx('icons-hover')} onClick={openModalDelete}>
                                 <i className={cx('icons-delete')}>
                                    <MdDelete />
                                 </i>
                                 <div className={cx('delete')}>Delete</div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="checkbox3" name="options[]" value="1" />
                                 <label for="checkbox3"></label>
                              </span>
                           </td>
                           <td>Maria Anders</td>
                           <td>mariaanders@mail.com</td>
                           <td>25, rue Lauriston, Paris, France</td>
                           <td className={cx('icon-action')}>
                              <div className={cx('icons-hover')} onClick={openModalEdit}>
                                 <i className={cx('icons-edit')}>
                                    <CiEdit />
                                 </i>
                                 <div className={cx('edit')}>Edit</div>
                              </div>
                              <div className={cx('icons-hover')} onClick={openModalDelete}>
                                 <i className={cx('icons-delete')}>
                                    <MdDelete />
                                 </i>
                                 <div className={cx('delete')}>Delete</div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="checkbox4" name="options[]" value="1" />
                                 <label for="checkbox4"></label>
                              </span>
                           </td>
                           <td>Fran Wilson</td>
                           <td>franwilson@mail.com</td>
                           <td>C/ Araquil, 67, Madrid, Spain</td>
                           <td className={cx('icon-action')}>
                              <div className={cx('icons-hover')} onClick={openModalEdit}>
                                 <i className={cx('icons-edit')}>
                                    <CiEdit />
                                 </i>
                                 <div className={cx('edit')}>Edit</div>
                              </div>
                              <div className={cx('icons-hover')} onClick={openModalDelete}>
                                 <i className={cx('icons-delete')}>
                                    <MdDelete />
                                 </i>
                                 <div className={cx('delete')}>Delete</div>
                              </div>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <span className={cx('custom-checkbox')}>
                                 <input type="checkbox" id="checkbox5" name="options[]" value="1" />
                                 <label for="checkbox5"></label>
                              </span>
                           </td>
                           <td>Martin Blank</td>
                           <td>martinblank@mail.com</td>
                           <td>Via Monte Bianco 34, Turin, Italy</td>
                           <td className={cx('icon-action')}>
                              <div className={cx('icons-hover')} onClick={openModalEdit}>
                                 <i className={cx('icons-edit')}>
                                    <CiEdit />
                                 </i>
                                 <div className={cx('edit')}>Edit</div>
                              </div>
                              <div className={cx('icons-hover')} onClick={openModalDelete}>
                                 <i className={cx('icons-delete')}>
                                    <MdDelete />
                                 </i>
                                 <div className={cx('delete')}>Delete</div>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <div className={cx('clearfix')}>
                     <div className={cx('hint-text')}>
                        Showing <b>5</b> out of <b>25</b> entries
                     </div>
                     <ul className={cx('pagination')}>
                        <li className={cx('page-item-pre')}>
                           <a href="#">Previous</a>
                        </li>
                        <li className={cx('page-item')}>
                           <a href="#" className={cx('page-link')}>
                              1
                           </a>
                        </li>
                        <li className={cx('page-item')}>
                           <a href="#" className={cx('page-link')}>
                              2
                           </a>
                        </li>
                        <li className={cx('page-item-active')}>
                           <a href="#" className={cx('page-link')}>
                              3
                           </a>
                        </li>
                        <li className={cx('page-item')}>
                           <a href="#" className={cx('page-link')}>
                              4
                           </a>
                        </li>
                        <li className={cx('page-item')}>
                           <a href="#" className={cx('page-link')}>
                              5
                           </a>
                        </li>
                        <li className={cx('page-item-next')}>
                           <a href="#" className={cx('page-link')}>
                              Next
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         {showModalAdd && (
            <div className={cx('modal')} onClick={closeModalAdd}>
               <div className={cx('modal-overlay')}></div>
               <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                  <div className={cx('modal-inner')}>
                     <form>
                        <div className={cx('modal-header')}>
                           <h4 className={cx('modal-title')}>Add Activity</h4>
                           <AiOutlineClose className={cx('btn-close')} onClick={closeModalAdd} />
                        </div>
                        <div className={cx('modal-body')}>
                           <div className={cx('form-group')}>
                              <label>Name:</label>
                              <input type="text" placeholder="Enter activity's name" required></input>
                           </div>
                           <div className={cx('form-group')}>
                              <label>Image:</label>
                              <textarea placeholder="Enter link image" required></textarea>
                           </div>
                           <div className={cx('form-group')}>
                              <label>Date:</label>
                              <br></br>
                              <input type="date"></input>
                           </div>
                        </div>
                        <div className={cx('modal-footer')}>
                           <div className={cx('btn-cancel')} onClick={closeModalAdd}>
                              Cancel
                           </div>
                           <div className={cx('btn-submit')}>Add</div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
         {showModalEdit && (
            <div className={cx('modal')} onClick={closeModalEdit}>
               <div className={cx('modal-overlay')}></div>
               <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                  <div className={cx('modal-inner')}>
                     <form>
                        <div className={cx('modal-header')}>
                           <h4 className={cx('modal-title')}>Edit Activity</h4>
                           <AiOutlineClose className={cx('btn-close')} onClick={closeModalEdit} />
                        </div>
                        <div className={cx('modal-body')}>
                           <div className={cx('form-group')}>
                              <label>Name:</label>
                              <input type="text" placeholder="Enter activity's name" required></input>
                           </div>
                           <div className={cx('form-group')}>
                              <label>Image:</label>
                              <textarea placeholder="Enter link image" required></textarea>
                           </div>
                           <div className={cx('form-group')}>
                              <label>Date:</label>
                              <br></br>
                              <input type="date"></input>
                           </div>
                        </div>
                        <div className={cx('modal-footer')}>
                           <div className={cx('btn-cancel')} onClick={closeModalEdit}>
                              Cancel
                           </div>
                           <div className={cx('btn-save')}>Save</div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
         {showModalDelete && (
            <div className={cx('modal')} onClick={closeModalDelete}>
               <div className={cx('modal-overlay')}></div>
               <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                  <div className={cx('modal-inner')}>
                     <form>
                        <div className={cx('modal-header')}>
                           <h4 className={cx('modal-title')}>Delete Activity</h4>
                           <AiOutlineClose className={cx('btn-close')} onClick={closeModalDelete} />
                        </div>
                        <div className={cx('modal-body')}>
                           <p>Are you sure you want to delete these activities?</p>
                           <p className={cx('text-warning')}>
                              <small>This action cannot be undone.</small>
                           </p>
                        </div>
                        <div className={cx('modal-footer')}>
                           <div className={cx('btn-cancel')} onClick={closeModalDelete}>
                              Cancel
                           </div>
                           <div className={cx('btn-delete')}>Delete</div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Activity;