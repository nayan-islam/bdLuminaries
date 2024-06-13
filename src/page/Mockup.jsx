import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mockup = () => {
  return (
    <div>
      <div className="main h-screen ">
        <div className="absolute top-0 left-0 bg-teal-300 h-14">
          <marquee behavior="" direction="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            laboriosam labore doloribus impedit adipisci enim veritatis
            provident rerum dolor ducimus harum, iusto repellendus distinctio
            temporibus beatae vel, iure sunt culpa.
          </marquee>
        </div>
        <div className="top grid gap-2 grid-cols-4 grid-rows-2 bg-slate-200 h-2/3">
          <div className="one row-span-2 bg-slate-400 pt-14">
            <div className="bg-red-300 h-full overflow-scroll">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                soluta sint voluptate eum maiores vel beatae? Sequi sunt
                accusantium provident vel ab, nostrum molestias nisi veniam
                totam accusamus quo? Magnam. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Omnis soluta sint voluptate eum
                maiores vel beatae? Sequi sunt accusantium provident vel ab,
                nostrum molestias nisi veniam totam accusamus quo? Magnam. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Omnis soluta
                sint voluptate eum maiores vel beatae? Sequi sunt accusantium
                provident vel ab, nostrum molestias nisi veniam totam accusamus
                quo? Magnam. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Omnis soluta sint voluptate eum maiores vel beatae? Sequi
                sunt accusantium provident vel ab, nostrum molestias nisi veniam
                totam accusamus quo? Magnam.
              </p>
            </div>
          </div>
          <div className="one col-span-3 bg-slate-400 pt-14">
            <div className="bg-orange-500 h-full">image</div>
          </div>
          <div className="one col-span-3 bg-slate-400">
            <div className="bg-blue-300 h-full overflow-scroll">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              incidunt hic beatae alias eveniet possimus eaque soluta assumenda
              doloribus odio esse asperiores quo vero, nulla aliquid. Officia,
              fugit nisi? Esse. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Illum incidunt hic beatae alias eveniet possimus
              eaque soluta assumenda doloribus odio esse asperiores quo vero,
              nulla aliquid. Officia, fugit nisi? Esse. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Illum incidunt hic beatae
              alias eveniet possimus eaque soluta assumenda doloribus odio esse
              asperiores quo vero, nulla aliquid. Officia, fugit nisi? Esse.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              incidunt hic beatae alias eveniet possimus eaque soluta assumenda
              doloribus odio esse asperiores quo vero, nulla aliquid. Officia,
              fugit nisi? Esse.
            </div>
          </div>
        </div>
        <div className="bottom  h-1/3 pb-10 pt-2">
          <div className="h-full bg-slate-300 "></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Mockup;
