import Link from "next/link";
import React from "react";

function SidedashbaordIcon({ icon, name, path, classes, class_text, close=() => {}  }) {
  return (
   <div>
      <Link href={path} as={path}>
      <div className={`flex  items-center mb-4 py-2 justify-start ${classes}`} onClick={() => close(false)}>
        <div className={`flex items-center mr-2 text-[#6B6D72] text-xl ${class_text}`}>
          <i className={icon}></i>
        </div>
        <span className={`text-[#6B6D72] font-[400] text-sm uppercase ${class_text}`}>
          {name}
        </span>
      </div>
    </Link>
   </div>
  );
}

export default SidedashbaordIcon;
