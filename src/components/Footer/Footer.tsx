import Logo from "../../assets/Logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <section className='firstSection'>
        <img className='logo' src={Logo} alt='courses logo' />
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
      </section>
      <hr className='hr' />
      <div className='secondSection'>
        <h3 className='copyright'>
          Copyright © MyCourse.io 2024. All Rights Reserved
        </h3>
        <div className='socials'>
          <img src='./Twitter.svg' alt='Twitter logo' />
          <img src='./Instagram.svg' alt='Instagram logo' />
          <img src='./Facebook.svg' alt='Facebook logo' />
        </div>
      </div>
    </footer>
  );
}
