import React from "react";

import "./DarkThemeToggle.style.scss";
import { saveToDB } from "../../helpers";

type Props = {
  darkModeFlag: boolean;
  setDarkModeFlag: (flag: boolean) => void;
};
const DarkThemeToggle = ({ darkModeFlag, setDarkModeFlag }: Props) => {
  const toggleDarkMode = () => {
    const newData = !darkModeFlag;

    setDarkModeFlag(newData);
    saveToDB("darkModeFlag", newData);
  };

  const getElementClasses = `DarkThemeToggle ${
    darkModeFlag ? "DarkThemeToggle--isActive" : ""
  }`;

  return (
    <div className={getElementClasses} onClick={toggleDarkMode}>
      {darkModeFlag ? (
        <span>إيقاف الوضع الليلي</span>
      ) : (
        <span>تفعيل الوضع الليلي</span>
      )}
    </div>
  );
};

export default DarkThemeToggle;
