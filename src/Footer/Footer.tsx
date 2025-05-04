import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <div className='mainDiv'>
      <div className='parentDiv'>
        <img className='logo' src='./Logo.png' alt='courses logo' />
        <div className='coursesWrapper'>
          <div className='courses'>
            <p>Web Programming</p>
            <p>Mobile Programming</p>
            <p>Java Beginner</p>
            <p>PHP Beginner</p>
          </div>
          <div className='courses'>
            <p>Adobe Illustrator</p>
            <p>Adobe Photoshop</p>
            <p>Design Logo</p>
          </div>
          <div className='courses'>
            <p>Writing Course</p>
            <p>Photography</p>
            <p>Video Making</p>
          </div>
        </div>
      </div>
      <hr className='hr' />
      <div className='contactInfo'>
        <h3>Copyright © MyCourse.io 2024. All Rights Reserved</h3>
        <div className='socials'>
          <img src='./Twitter.svg' alt='' />
          <img src='./Instagram.svg' alt='' />
          <img src='./Facebook.svg' alt='' />
        </div>
      </div>
    </div>
  );
}
