import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import styles from "../css/Sidebar.module.css";
import SidebarOptions from "./SidebarOptions";
import {
  MdMobileScreenShare,
  MdDevices,
  MdOutlinePeopleAlt,
  MdQueryBuilder,
  MdDeleteOutline,
  MdOutlineCloudQueue,
} from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Sidebar({ setActiveOption }) {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [activeOption, setLocalActiveOption] = useState("My Drive");

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    setUploading(true);
    if (!file) {
      console.warn("No file selected");
      setUploading(false);
      return;
    }
    try {
      const storageRef = ref(storage, `files/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await addDoc(collection(db, "myfiles"), {
        timestamp: serverTimestamp(),
        filename: file.name,
        fileURL: downloadURL,
        size: file.size,
      });
      setUploading(false);
      setFile(null);
      setOpen(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  const handleOptionClick = (option) => {
    setLocalActiveOption(option);
    setActiveOption(option);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modal__pop}>
          <form>
            <div className={styles.modalHeading}>
              <h3>Select file you want to upload</h3>
            </div>
            <div className={styles.modalBody}>
              {uploading ? (
                <p className={styles.uploading}>Uploading...</p>
              ) : (
                <>
                  <input type="file" onChange={handleChange} />
                  <input
                    type="submit"
                    className={styles.post__submit}
                    onClick={handleUpload}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </Modal>

      <div className={styles.sidebar}>
        <div className={styles.sidebar__btn}>
          <button onClick={handleOpen}>
            <img
              src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"
              alt=""
            />
            <span>New</span>
          </button>
        </div>

        <SidebarOptions
          activeOption={activeOption}
          handleOptionClick={handleOptionClick}
        />

        <hr />
        <div className={styles.sidebar__options}>
          <div className={styles.sidebar__option}>
            <MdOutlineCloudQueue />
            <span>Storage</span>
          </div>
          <div className={styles.progress__bar}>
            <progress size="tiny" value="50" max="100" />
            <span>6.45 GB of 15 GB used</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
