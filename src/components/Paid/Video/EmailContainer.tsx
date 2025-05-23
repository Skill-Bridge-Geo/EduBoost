import searchIcon from "../../../assets/SearchIcon.svg";
import  "./email.css"

export default function () {
  return (
    <div className='email-container'>
      <div className='email-text-div'>
        <h2 className='email-header'>
          Join and get amazing discount
        </h2>
        <p className='email-description'>
          With our responsive themes and mobile and desktop apps
        </p>
      </div>
      <div className='email-subscribe-wrapper'>
        <div className='email-input-container'>
          <input
            className='email'
            placeholder='Email Address'
            type='text'
          />
          <img
            className='search-icon'
            src={searchIcon}
            alt='search icon'
          />
        </div>
        <button className='subscribe'>Subscribe</button>
      </div>
    </div>
  );
}
