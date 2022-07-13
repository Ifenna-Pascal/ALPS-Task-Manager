import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme =  theme === 'system' ? systemTheme : theme;
  const [mount, setMount] = useState(false);

  useEffect(()=> {
    setMount(true);
  },[])
  if  (!mount) return null
  if (currentTheme === 'dark') {
    return (
      <div>
        <i
          className={`ri-sun-fill text-gray-500 text-xl`}
          onClick={() => setTheme('light')}
        ></i>
      </div>
    );
  } else {
    return (
      <div>
      <i
        className={`ri-moon-fill text-gray-500 text-xl`}
        onClick={() => setTheme('dark')}
      ></i>
    </div>
    )
  }
 
}

export default ThemeButton;
