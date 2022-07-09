import Link from "next/link";
import React from "react";

function SidedashbaordIcon({ icon, name, path, classes, class_text, close=() => {}  }) {
  return (
   <div>
      <Link href={path} as={path}>
      <div className={`flex  items-center dark:pl-3 dark:rounded-l-full mb-4 py-2 hover:cursor-pointer justify-start ${classes}`} onClick={() => close(false)}>
        <div className={`flex items-center mr-2 text-[#6B6D72] dark:text-white text-xl ${class_text}`}>
          <i className={icon}></i>
        </div>
        <span className={`text-[#6B6D72] font-[400] dark:text-white text-sm uppercase ${class_text}`}>
          {name}
        </span>
      </div>
    </Link>
   </div>
  );
}

export default SidedashbaordIcon;
