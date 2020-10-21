import React from "react";
import DarkThemeToggle from "../DarkThemeToggle/DarkThemeToggle.view";
import SocialLinks from "../SocialLinks/SocialLinks.view";

import "./Header.style.scss";

type Props = {
  darkModeFlag: boolean;
  setDarkModeFlag: (flag: boolean) => void;
};
const Header = ({ darkModeFlag, setDarkModeFlag }: Props) => {
  return (
    <header className="Header">
      <DarkThemeToggle
        darkModeFlag={darkModeFlag}
        setDarkModeFlag={setDarkModeFlag}
      />
      <SocialLinks />
    </header>
  );
};

Header.defaultProps = {
  darkModeFlag: false,
};

export default Header;
