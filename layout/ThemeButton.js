import React, { useEffect, useState } from "react";

function ThemeButton() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);
  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("vidyaDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("vidyaDarkMode", "false");
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <i
        className={`${darkMode ? "ri-sun-fill" : "ri-moon-fill"} text-gray-500 text-xl`}
        onClick={onClick}
      ></i>
    </div>
  );
}

export default ThemeButton;
