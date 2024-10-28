// import { Style } from "@mui/icons-material";
import React from "react";
import styles from "../css/Data.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { FaFile } from "react-icons/fa6";
import { IoArrowDownSharp } from "react-icons/io5";

function Data() {
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
            <div className={styles.data__file}>
              <FaFile />
              <p>File Name</p>
            </div>
            <div className={styles.data__file}>
              <FaFile />
              <p>File Name</p>
            </div>
            <div className={styles.data__file}>
              <FaFile />
              <p>File Name</p>
            </div>
            <div className={styles.data__file}>
              <FaFile />
              <p>File Name</p>
            </div>
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
          </div>

          <div className={styles.detailsRow}>
            <p>
              Name <FaFile />
            </p>

            <p>Me</p>

            <p>Yesterday</p>

            <p>1GB</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
