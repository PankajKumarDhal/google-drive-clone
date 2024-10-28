import React, { useState, useEffect } from "react"; // Add useEffect here
import styles from "../css/Data.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { FaFile } from "react-icons/fa6";
import { IoArrowDownSharp } from "react-icons/io5";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Data() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "myfiles"), (snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  
    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <>
      <div className={styles.data}>
        <div className={styles.data__header}>
          <div className={styles.data__headerLeft}>
            <p>My Drive</p>
            <IoMdArrowDropdown />
          </div>
          <div className={styles.data__headerRight}>
            <FaList />
            <MdInfoOutline />
          </div>
        </div>
        <div className={styles.data__content}>
          <div className={styles.data__grid}>
            {files.map((file) => (
              <div className={styles.data__file} key={file.id}>
                <FaFile />
                <p>{file.data.filename}</p>
              </div>
            ))}
          </div>

          <div className={styles.data__list}>
            <div className={styles.detailsRow}>
              <p>
                <b>
                  Name <IoArrowDownSharp />
                </b>
              </p>
              <p>
                <b>Owner</b>
              </p>
              <p>
                <b>Last Modified</b>
              </p>
              <p>
                <b>File Size</b>
              </p>
            </div>

            {files.map((file) => (
              <div className={styles.detailsRow} key={file.id}>
                <p>
                  <a href={file.data.fileURL} target="_blank" rel="noopener noreferrer">
                    <FaFile /> {file.data.filename}
                  </a>
                </p>
                <p>Me</p>
                <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
                <p>{formatBytes(file.data.size)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
