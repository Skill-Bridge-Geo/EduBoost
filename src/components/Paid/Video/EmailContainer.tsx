import searchIcon from "../../../assets/SearchIcon.svg";

export default function () {
  return (
    <div className='email-container'>
      <div>
        <h2>Join and get amazing discount</h2>
        <p>With our responsive themes and mobile and desktop apps</p>
      </div>
      <div>
        <input className='email' type='text' />
        <img className="search-icon" src={searchIcon} alt='search icon' />
      </div>
    </div>
  );
}
