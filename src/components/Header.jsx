// import React from "react";
// import styles from "../css/Header.module.css";
// import { IoSearchSharp } from "react-icons/io5";
// import { MdFormatAlignCenter } from "react-icons/md";
// import { IoIosHelpCircle, IoMdSettings, IoMdApps } from "react-icons/io";
// import { MdOutlineHelpOutline } from "react-icons/md";


// function Header({ photoURL, setSearchTerm }) {
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className={styles.header}>
//       <div className={styles.header__logo}>
//         <img
//           src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
//           alt=""
//         />
//         <span>Drive</span>
//       </div>
//       <div className={styles.header__search}>
//         <IoSearchSharp />
//         <input
//           type="text"
//           placeholder="Search in Drive"
//           onChange={handleSearchChange}
//         />
//         <MdFormatAlignCenter />
//       </div>
//       <div className={styles.header__icons}>
//         <span><MdOutlineHelpOutline />
//         </span>
//         <span><IoMdSettings /></span>
//         <span>
//           <IoMdApps />
//           <img src={photoURL} alt="User Profile" className={styles.profilePicture} />
//           {/* <img src={photoURL || "https://via.placeholder.com/32"} alt="User Profile" className={styles.profilePicture} /> */}

//         </span>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import styles from "../css/Header.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { IoMdSettings, IoMdApps } from "react-icons/io";
import { MdOutlineHelpOutline } from "react-icons/md";
import HelpModal from "./HelpModal"; // Import the modal component

function Header({ photoURL, setSearchTerm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img
          src="https://static-00.iconduck.com/assets.00/google-drive-icon-2048x2048-j5sa1hcp.png"
          alt="Drive Logo"
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
        <span onClick={toggleModal}>
          <MdOutlineHelpOutline />
        </span>
        <span><IoMdSettings /></span>
        <span>
          <IoMdApps />
          <img src={photoURL} alt="User Profile" className={styles.profilePicture} />
        </span>
      </div>
      {isModalOpen && <HelpModal toggleModal={toggleModal} />} {/* Show modal if open */}
    </div>
  );
}

export default Header;
