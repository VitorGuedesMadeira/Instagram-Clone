import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

import postNewPost from '../../redux/thunks/newPostThunk';
import uploadIcon from '../../assets/icons/upload.png';
import closeIcon from '../../assets/icons/cross.png';
import './NewPost.scss';

const NewPost = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [fileLabel, setFileLabel] = useState('Select From Computer');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[user_id]', 1);
    formData.append('post[title]', title);
    images.forEach((image) => {
      formData.append('post[images][]', image);
    });
    dispatch(postNewPost(formData));
    setShowSharePopup(false);
    navigate('/');
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
    setFileLabel(`Uploaded ${files.length} file${files.length > 1 ? 's' : ''}`);
    setSelectedImage(URL.createObjectURL(files[0]));
    setShowPopup(true);
  };

  const handleNextClick = () => {
    setShowPopup(false);
    setShowSharePopup(true);
  };

  return (
    <div className="modal">
      <NavLink to="/">
        <img className="close" src={closeIcon} alt="close button" />
      </NavLink>
      <div className="modal-content">
        <div className="modal-head">
          <h2>Create new post</h2>
        </div>
        <div className="modal-body">
          <form id="new-post-form" onSubmit={handleSubmit}>
            {showPopup && (
              <div className="image-popup">
                <div className="popup-head">
                  <button type="button">Crop</button>
                  <button
                    type="button"
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                </div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="upload-img"
                />
              </div>
            )}
            {showSharePopup && (
              <div className="share-popup">
                <div className="popup-head">
                  <button type="button">Create new post</button>
                  <button type="submit" onClick={handleSubmit}>Share</button>
                </div>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="upload-img"
                />
                <input
                  id="new-post-input"
                  type="text"
                  placeholder="Caption"
                  name="title"
                  className="title-input-box"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            )}

            {!showPopup && (
              <div id="drag-and-drop">
                <img id="upload-image-icon" src={uploadIcon} alt="Drag images symbol" />
                <h3>Drag photos and videos here</h3>
              </div>
            )}

            <label htmlFor="file-upload" className="custom-file-upload">
              {fileLabel}
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                multiple
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
