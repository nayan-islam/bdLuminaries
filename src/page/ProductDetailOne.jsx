// src/App.jsx
import React from "react";
import Footer from "../components/Footer";
import p1 from "../assets/product/01.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ProductDetailOne() {

  let navigate = useNavigate()

  

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
    <div className="bg-green-100 h-screen flex flex-col">
      {/* <Navbar /> */}
      <header className="  flex justify-center   h-[65%]">
        <div className="w-[25%] p-1  flex flex-col gap-y-1">
          <div className="w-[100%] h-[18%] p-1  bg-green-900"></div>
          <div className="w-[100%]  grid grid-cols-1 gap-2 p-1   overflow-y-scroll h-[82%]">
            {ledSpotLightSeries.map((product) => (
              <div
                key={product.id}
                className="  shadow-md rounded bg-[#8ac249]"
              >
                <img
                  src={product.image}
                  className=" w-full h-14 object-contain"
                />
                <div className="text-[8px] tracking-widest font-semibold text-center bg-[#1d1d1d] text-white uppercase py-1">
                  <h3>{product.name}</h3>
                  <h3 className="-mt-0.5">{product.nameBottom}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[75%]">
          <div
            onClick={() => navigate("/product/detail/next")}
            className="flex space-x-4 h-[40%] bg-[#8ac249] relative"
          >
            <img src={p1} alt="Icon" />
            <div className=" p-1  pl-4  bg-black bg-opacity-20  shadow-lg backdrop-blur-[blur(5px)] backdrop-filter border border-black/10 border-r-0 border-opacity-30 rounded-s-3xl absolute right-0 bottom-3 text-[10px] font-semibold text-white flex flex-col justify-center items-end text-right leading-3">
              <p>Minimalist 8 Watt</p>
              <p>Led spot light</p>
              <p>Price # 1550 Tk.</p>
            </div>
          </div>
          <section className="mb-4 h-[60%] bg-slate-300">
            <h2 className="text-xs font-semibold uppercase mb-4 text-left bg-[#F15B26] pl-3 text-white py-1.5">
              Minimalist Series
            </h2>
            <div className="grid grid-cols-3 gap-4 px-3 overflow-y-scroll h-[83%]">
              {minimalistSeries.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#8ac249] p-1 shadow-md rounded"
                >
                  <img
                    src={product.image}
                    className=" w-full h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </header>

      <main className="flex-1 mt-2 overflow-x-scroll h-[35%]">
        <section className="h-full ">
          <h2 className="text-xs font-semibold uppercase mb-4 text-left bg-[#F15B26] pl-3 text-white py-1.5">
            Photo & Video
          </h2>
          <div className="grid grid-cols-2 gap-4 px-3 h-[80%] pb-7 ">
            {photoVideo.map((item) => (
              <div
                key={item.id}
                className="bg-[#8ac249] h-[100%]  shadow-md rounded"
              >
                <img
                  src={item.image}
                  alt="Photo"
                  className=" w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetailOne;
