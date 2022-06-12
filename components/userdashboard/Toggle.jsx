import React from 'react'

export default function Toggle() {
  return (
    <>
      <span className="relative">
        <input id="Toggle1" type="checkbox" className="hidden peer" />
        <div className="w-10 h-6 rounded-full shadow-inner bg-green-800 peer-checked:bg-violet-400"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
      </span>
    </>
  );
}
