import React, { useState, useEffect, useRef } from "react";
import styles from "../css/Data.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FaList, FaFile, FaTrash, FaDownload, FaShareAlt, FaCopy,
} from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { IoArrowDownSharp } from "react-icons/io5";
import { db } from "../firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { SlOptions } from "react-icons/sl";

function Data({ searchTerm }) {
  const [files, setFiles] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const optionsMenuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "myfiles"), (snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsMenuRef.current && !optionsMenuRef.current.contains(event.target)) {
        setShowOptions(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const filteredFiles = files.filter(file =>
    file.data.filename.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOptions = (id) => {
    setShowOptions(showOptions === id ? null : id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "myfiles", id));
    alert("File deleted successfully");
  };

  const handleDownload = (fileURL, filename) => {
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = (fileURL) => {
    navigator.clipboard.writeText(fileURL);
    alert("Link copied to clipboard!");
  };

  const handleShare = (fileURL) => {
    if (navigator.share) {
      navigator
        .share({
          title: "File",
          url: fileURL,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  return (
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
          {filteredFiles.map((file) => (
            <div className={styles.data__file} key={file.id}>
              <FaFile />
              <p>{file.data.filename}</p>
            </div>
          ))}
        </div>
        <div className={styles.data__list}>
          <div className={styles.detailsRow}>
            <p><b>Name <IoArrowDownSharp /></b></p>
            <p><b>Owner</b></p>
            <p><b>Last Modified</b></p>
            <p><b>File Size</b></p>
            <p><b>Options</b></p>
          </div>

          {filteredFiles.map((file) => (
            <div className={styles.detailsRow} key={file.id}>
              <p>
                <a
                  href={file.data.fileURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFile /> {file.data.filename}
                </a>
              </p>
              <p>Me</p>
              <p>{new Date(file.data.timestamp?.seconds * 1000).toUTCString()}</p>
              <p>{formatBytes(file.data.size)}</p>
              <p>
                <SlOptions onClick={() => toggleOptions(file.id)} />
                {showOptions === file.id && (
                  <div className={styles.optionsMenu} ref={optionsMenuRef}>
                    <button onClick={() => handleDownload(file.data.fileURL, file.data.filename)}>
                      <FaDownload /> Download
                    </button>
                    <button onClick={() => handleDelete(file.id)}>
                      <FaTrash /> Delete
                    </button>
                    <button onClick={() => handleCopyLink(file.data.fileURL)}>
                      <FaCopy /> Copy Link
                    </button>
                    <button onClick={() => handleShare(file.data.fileURL)}>
                      <FaShareAlt /> Share
                    </button>
                  </div>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;

Data.js





