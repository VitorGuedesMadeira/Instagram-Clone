import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postNewPost from '../../redux/thunks/newPostThunk';
import uploadIcon from '../../assets/icons/upload.png';
import './NewPost.scss';

const NewPost = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [showTitleInput, setShowTitleInput] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[user_id]', 1);
    formData.append('post[title]', title);
    images.forEach((image) => {
      formData.append('post[images][]', image);
    });
    dispatch(postNewPost(formData));
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
    setShowTitleInput(true);
  };

  return (
    <div className="modal">
      <button type="submit" className="close">
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
              Select From Computer
              <input
                id="file-upload"
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                multiple
              />
            </label>
            {showTitleInput && (
              <input
                type="text"
                placeholder="caption"
                name="title"
                className="title-input-box"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            )}
            {showTitleInput && (
              <input className="post-submit" type="submit" value="Post" />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
