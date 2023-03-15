/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import crossIcon from '../../../../assets/icons/cross.png';
import likeIcon from '../../../../assets/icons/like.png';
import directIcon from '../../../../assets/icons/direct.png';
import './StoryPost.scss';

const StoryPost = () => {
  const [currentImage, setcurrentImage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { stories } = location.state;
  const { index } = location.state;

  const slide = () => {
    const mySlide = document.getElementById(index);
    if (mySlide) {
      mySlide.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
    }
  };

  useEffect(() => {
    slide();

    const carrousel = document.querySelector('#story-post-wrapper');
    carrousel.addEventListener('scroll', () => {
      setcurrentImage(0);
    });
  }, []);

  const handleClick = (length, father) => {
    if (currentImage < length) {
      setcurrentImage(currentImage + 1);
    } else {
      const currentDiv = document.getElementById(father.id);
      const nextDiv = currentDiv.nextElementSibling;
      if (nextDiv) {
        nextDiv.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div id="story-post-wrapper">
      {stories.map((item, index) => (
        <div id={index} key={item[0].id} className="story-post-wrapper__carrousel">
          <div id="story-post-wrapper__navigation">
            <div id="story-post-wrapper__timeline-div">
              {item.map((element) => (
                <div key={element.id} className="story-post-wrapper__timeline" />))}
            </div>

            <div id="story-post-wrapper__information">
              <div id="story-post-wrapper__flex">
                <img src={item[0].story_user.image} alt="story" />
                <div>
                  <p>{item[0].story_user.name}</p>
                  <p>music</p>
                </div>
              </div>
              <NavLink to="/">
                <img id="story-post-wrapper__close" src={crossIcon} alt="close" />
              </NavLink>
            </div>
          </div>

          <div id="story-post-wrapper__image">
            {item.map((element, index) => {
              if (currentImage === index) {
                return <img key={element.id} onClick={(e) => handleClick((item.length - 1), e.target.parentElement.parentElement)} src={element.image_url} alt="story" />;
              }
              return null;
            })}
          </div>

          <div id="story-post-wrapper__inputs">
            <input type="text" placeholder="Send message" />
            <div id="story-post-wrapper__buttons">
              <img src={likeIcon} alt="like" />
              <img src={directIcon} alt="direct" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryPost;
