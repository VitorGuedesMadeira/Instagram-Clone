import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postNewPost from '../../redux/thunks/newPostThunk';
import uploadIcon from '../../assets/icons/upload.png';
import './NewPost.scss';

const NewPost = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [fileLabel, setFileLabel] = useState('Select From Computer');
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
    navigate('/');
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
    setFileLabel(`Uploaded ${files.length} file${files.length > 1 ? 's' : ''}`);
  };

  const handleRedirection = () => navigate('/');

  return (
    <div className="modal">
      <button type="submit" className="close" onClick={handleRedirection}>
        &times;
      </button>
      <div className="modal-content">
        <div className="modal-head">
          <h2>Create new post</h2>
        </div>
        <div className="modal-body">
          <img src={uploadIcon} alt="Drag images symbol" />
          <h3>Drag photos and videos here</h3>
          <form onSubmit={handleSubmit}>
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

            {images.length > 0 && (
              <input
                type="text"
                placeholder="title"
                name="title"
                className="title-input-box"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            )}
            {title !== '' && (
              <input className="post-submit" type="submit" value="Post" />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
