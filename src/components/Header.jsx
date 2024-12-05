import React, { useState } from "react";
import styles from "../css/Header.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { IoMdSettings, IoMdApps } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import HelpModal from "./HelpModal";
import { auth } from "../firebase";

function Header({ photoURL, setSearchTerm, setUser, theme, toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  // const userPhotoURL = user?.reloadUserInfo?.photoURL || user?.photoURL;


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSignOut = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.header__logo}>
        <img
          src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
          alt="Drive Logo"
        />
        <span>Drive</span>
      </div>
      <div className={styles.header__search}>
        <IoSearchSharp aria-label="Search Icon" />
        <input
          type="text"
          placeholder="Search in Drive"
          onChange={handleSearchChange}
          aria-label="Search in Drive"
        />
        <MdFormatAlignCenter aria-label="Align Center Icon" />
      </div>
      <div className={styles.header__icons}>
        <span onClick={toggleModal} aria-label="Help">
          <MdOutlineHelpOutline />
        </span>
        <span
          onClick={() => setShowThemeOptions(!showThemeOptions)}
          aria-label="Settings"
        >
          <IoMdSettings />
        </span>
        {showThemeOptions && (
          <div className={styles.themeOptions} role="menu">
            <button
              onClick={() => toggleTheme("dark")}
              aria-label="Switch to Light Mode"
            >
              Light Mode
            </button>
            <button
              onClick={() => toggleTheme("light")}
              aria-label="Switch to Dark Mode"
            >
              Dark Mode
            </button>
          </div>
        )}
        <span>
          <IoMdApps aria-label="Apps Icon" />
          <img
            src={photoURL || "https://via.placeholder.com/150"} // Placeholder if `photoURL` is missing
            alt="User Profile"
            className={styles.profilePicture}
            onClick={toggleSignOut}
          />
          {showSignOut && (
            <div
              className={styles.signOutDropdown}
              onClick={handleSignOut}
              role="button"
            >
              Sign Out
            </div>
          )}
        </span>
      </div>
      {isModalOpen && <HelpModal toggleModal={toggleModal} />}
    </div>
  );
}

export default Header;
