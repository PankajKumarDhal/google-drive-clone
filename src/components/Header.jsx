import React from "react";
import styles from "../css/Header.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <img
            src="	https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
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
            {/* <IoIosHelpCircle /> */}
            <IoIosHelpCircle />
          </span>
          <span>
            <IoMdSettings />
          </span>
          <span>
            <IoMdApps />
            <MdAccountCircle />

          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
