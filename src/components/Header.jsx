import React from "react";
import styles from "../css/Header.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { IoIosHelpCircle, IoMdSettings, IoMdApps } from "react-icons/io";

function Header({ photoURL, setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
          alt=""
        />
        <span>Drive</span>
      </div>
      <div className={styles.header__search}>
        <IoSearchSharp />
        <input
          type="text"
          placeholder="Search in Drive"
          onChange={handleSearchChange}
        />
        <MdFormatAlignCenter />
      </div>
      <div className={styles.header__icons}>
        <span><IoIosHelpCircle /></span>
        <span><IoMdSettings /></span>
        <span>
          <IoMdApps />
          <img src={photoURL} alt="User Profile" className={styles.profilePicture} />
        </span>
      </div>
    </div>
  );
}

export default Header;
