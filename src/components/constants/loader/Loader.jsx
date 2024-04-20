import React from "react";
import styles from "./Loader.module.css"

const Loader = () => {

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
