// src/App.jsx
import React from "react";
import Footer from "../components/Footer";
import p1 from "../assets/product/01.png";

function ProductDetailNext() {
  const minimalistSeries = [
    {
      id: 1,
      name: "Minimalist 8 Watt Led spot light",
      image: "/src/assets/product/01.png",
    },
    { id: 2, name: "Minimalist Series B", image: "/src/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/src/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/src/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 2, name: "Minimalist Series B", image: "/src/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/src/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/src/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    {
      id: 1,
      name: "Minimalist 8 Watt Led spot light",
      image: "/src/assets/product/01.png",
    },
    { id: 2, name: "Minimalist Series B", image: "/src/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/src/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/src/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 2, name: "Minimalist Series B", image: "/src/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/src/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/src/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/src/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/src/assets/product/01.png" },
  ];

  const ledSpotLightSeries = [
    {
      id: 1,
      name: "Elegant",
      nameBottom: "Series A",
      image: "/src/assets/product/01.png",
    },
    {
      id: 2,
      name: "Elegant",
      nameBottom: "Series B",
      image: "/src/assets/product/02.png",
    },
    {
      id: 3,
      name: "Slic",
      nameBottom: "Series",
      image: "/src/assets/product/03.png",
    },
    {
      id: 4,
      name: "Titanium",
      nameBottom: "Series A",
      image: "/src/assets/product/04.png",
    },
    {
      id: 5,
      name: "Titanium",
      nameBottom: "Series B",
      image: "/src/assets/product/01.png",
    },
    {
      id: 6,
      name: "Titanium",
      nameBottom: "Series C",
      image: "/src/assets/product/02.png",
    },
    {
      id: 7,
      name: "Platinum",
      nameBottom: "Series",
      image: "/src/assets/product/03.png",
    },
    {
      id: 8,
      name: "Gold",
      nameBottom: "Series A",
      image: "/src/assets/product/04.png",
    },
  ];

  const photoVideo = [
    { id: 1, image: "/src/assets/product/01.png" },
    { id: 2, image: "/src/assets/product/01.png" },
  ];

  return (
    <div className="bg-green-100 h-screen grid gap-y-3 ">
      <div className="top row-span-6 grid gap-1 grid-cols-5 grid-rows-4">
        <div className="one col-span-4 row-span-3 bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
        <div className="one bg-slate-300"></div>
      </div>
      <div className="top row-span-3 bg-[#8ab7e1]">
        <h2 className="bg-slate-900 text-white py-3 px-4 mb-2 text-center font-semibold text-lg">Remaining Specication</h2>
        {/* <table className="border w-full">
          <tr>
            <td className="border">1</td>
            <td className="border">1</td>
            <td className="border">1</td>
            <td className="border">1</td>
            <td className="border">1</td>
            <td className="border">1</td>
          </tr>
          <tr>
            <td className="border flex flex-col">
              <tr className="border">
                <td>2</td>
              </tr>
              <tr className="border">
                <td>2</td>
              </tr>
              <tr className="border">
                <td>2</td>
              </tr>
            </td>
            <td>1</td>
            <td>1</td>
            <td>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </td>
            <td>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </td>
            <td>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </td>
          </tr>
        </table> */}

        <div className="main grid grid-cols-5 grid-rows-6  ">
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">2</div>
          <div className="one row-span-2 p-1 border bg-orange-400">3</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-10 p-1 border bg-orange-400">1</div>
          <div className="one row-span-10 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">55</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
          <div className="one row-span-2 p-1 border bg-orange-400">1</div>
        </div>
      </div>
      <div className="top row-span-4 bg-[#30877e]">c</div>
      <Footer />
    </div>
  );
}

export default ProductDetailNext;
