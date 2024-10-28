import React from "react";
import styles from "../css/Header.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

function Header({ photoURL }) {
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
        <input type="text" placeholder="Search in Drive" />
        <MdFormatAlignCenter />
      </div>
      <div className={styles.header__icons}>
        <span>
          <IoIosHelpCircle />
        </span>
        <span>
          <IoMdSettings />
        </span>
        <span>
          <IoMdApps />
          {/* <MdAccountCircle src={photoURL} className={styles.profilePicture} /> */}

          <img
            src={photoURL}
            alt="User Profile"
            className={styles.profilePicture} 
          />
        </span>
      </div>
    </div>
  );
}

export default Header;
