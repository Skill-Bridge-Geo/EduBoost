import { useRef, useState } from "react";
import Profile_picture from "../../../assets/registration/pfp.svg";
import Add_picture from "../../../assets/registration/addphoto.png";
import "./Pfp.css";

const Pfp = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<File | null>(null);
  const addImage = () => {
    inputRef.current?.click();
  };
  
  const changeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(file);
    }
  };

  return (
    <div className="profile_picture_container">
      {avatar ? (
        <img src={URL.createObjectURL(avatar)} alt="" />
      ) : (
        <img src={Profile_picture} alt="" />
      )}
      <div className="add_pfp" onClick={addImage}>
        <img src={Add_picture} alt="" />
        <input type="file" onChange={changeImage} ref={inputRef} />
      </div>
    </div>
  );
};

export default Pfp;
