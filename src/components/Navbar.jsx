import React, { useState } from "react";

const Navbar = () => {
  let [navShow, setNavShow] = useState(false);
  return (
    <div
      className="w-40 h-40 bg-black text-white relative text-center font-bold"
      onClick={() => setNavShow(!navShow)}
    >
      <div
        className={`w-40 h-40 bg-slate-700 absolute left-0 transition-all duration-500  ${
          navShow ? "top-full" : "top-0"
        }`}
      ></div>
      <div
        className={`w-40 h-40 bg-slate-200 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[200%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-40 h-40 bg-slate-400 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[300%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-40 h-40 bg-slate-900 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[400%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-40 h-40 bg-slate-300 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[500%]" : "top-0"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
