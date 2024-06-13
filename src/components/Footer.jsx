import React from 'react'
import {  FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter, } from 'react-icons/fa'
import {  FaMapLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = ({ className }) => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div
      className={`bg-black absolute w-full bottom-0 py-2 px-3 flex justify-between items-center ${className}`}
    >
      <p className="text-white/70 text-[12px]">
        Copyright © {year} •{" "}
        <Link className="text-green-700 font-bold">BD Luminaries</Link>
      </p>
      <div className="icon flex gap-x-2">
        <Link to="/contact" className="text-[12px] text-[#EA4335]">
          {/* <FaLocationDot /> */}
          <FaMapLocationDot />
        </Link>
        <Link to="/" className="text-[12px] text-[#1877F2]">
          {/* <FaFacebookF /> */}
          <FaFacebookSquare />
        </Link>
        <Link to="/" className="text-[12px] text-[#ffc273]">
          <FaInstagram />
        </Link>
        <Link to="/" className="text-[12px] text-[#1DA1F2]">
          <FaTwitter />
        </Link>
        <Link to="/" className="text-[12px] text-[#0077B5]">
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
};

export default Footer
