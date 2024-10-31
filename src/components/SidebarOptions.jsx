// // SidebarOptions.js
// import React from "react";
// import styles from "../css/Sidebar.module.css";
// import {
//   MdMobileScreenShare,
//   MdDevices,
//   MdOutlinePeopleAlt,
//   MdQueryBuilder,
//   MdDeleteOutline
// } from "react-icons/md";
// import { IoStarOutline } from "react-icons/io5";

// function SidebarOptions({ activeOption, handleOptionClick }) {
//   return (
//     <div className={styles.sidebar__options}>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "My Drive" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("My Drive")}
//       >
//         <MdMobileScreenShare />
//         <span>My Drive</span>
//       </div>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "Computers" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("Computers")}
//       >
//         <MdDevices />
//         <span>Computers</span>
//       </div>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "Share with me" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("Share with me")}
//       >
//         <MdOutlinePeopleAlt />
//         <span>Share with me</span>
//       </div>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "Recent" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("Recent")}
//       >
//         <MdQueryBuilder />
//         <span>Recent</span>
//       </div>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "Starred" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("Starred")}
//       >
//         <IoStarOutline />
//         <span>Starred</span>
//       </div>
//       <div
//         className={`${styles.sidebar__option} ${activeOption === "Trash" ? styles.sidebar__option_Active : ""}`}
//         onClick={() => handleOptionClick("Trash")}
//       >
//         <MdDeleteOutline />
//         <span>Trash</span>
//       </div>
//     </div>
//   );
// }

// export default SidebarOptions;


// SidebarOptions.js
import React from "react";
import styles from "../css/Sidebar.module.css";
import {
  MdMobileScreenShare,
  MdDevices,
  MdOutlinePeopleAlt,
  MdQueryBuilder,
  MdDeleteOutline
} from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";

function SidebarOptions({ activeOption, handleOptionClick }) {
  return (
    <div className={styles.sidebar__options}>
      <div
        className={`${styles.sidebar__option} ${activeOption === "My Drive" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("My Drive")}
      >
        <MdMobileScreenShare />
        <span>My Drive</span>
      </div>
      <div
        className={`${styles.sidebar__option} ${activeOption === "Computers" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("Computers")}
      >
        <MdDevices />
        <span>Computers</span>
      </div>
      <div
        className={`${styles.sidebar__option} ${activeOption === "Share with me" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("Share with me")}
      >
        <MdOutlinePeopleAlt />
        <span>Share with me</span>
      </div>
      <div
        className={`${styles.sidebar__option} ${activeOption === "Recent" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("Recent")}
      >
        <MdQueryBuilder />
        <span>Recent</span>
      </div>
      <div
        className={`${styles.sidebar__option} ${activeOption === "Starred" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("Starred")}
      >
        <IoStarOutline />
        <span>Starred</span>
      </div>
      
      <div
        className={`${styles.sidebar__option} ${activeOption === "Trash" ? styles.sidebar__option_Active : ""}`}
        onClick={() => handleOptionClick("Trash")}
      >
        <MdDeleteOutline />
        <span>Trash</span>
      </div>
    </div>
  );
}

export default SidebarOptions;
