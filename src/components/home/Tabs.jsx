import React, { useState } from "react";
// import ReactPlayer from "react-player/vimeo";
import VideoComponent from "./tabs_content/VideoComponent";

// Images
import Image1 from "../../assets/image_apartment.jpeg";
import Image2 from "../../assets/image_apartment6.webp";
import Image3 from "../../assets/image_apartment3.png";
import Image4 from "../../assets/image_apartment4.png";
import Image5 from "../../assets/image_apartment5.jpeg";
import Image6 from "../../assets/image_apartment6.jpeg";
import Image7 from "../../assets/image_apartment6.webp";
import Image8 from "../../assets/image_apartment.jpeg";

import FirstCarousel from "./tabs_content/FirstCarousel";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabLabels = [
    "Āriene",
    "Interjers",
    "Animācijas",
    "Pirms un Pēc",
    "Produktu vizualizācijas",
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="">
          <div className="flex flex-row items-center">
            <div className="">
              <h2 className="text-4xl pr-4">VIZUALIZĀCIJAS</h2>
            </div>
            <div className="ml-14 grow tab-buttons grid grid-flow-col text-center items-center text-gray-500 bg-gray-100 rounded-lg p-1">
              {tabLabels.map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  isActive={index === activeTab}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="tab-content animate-fade pt-5">
            <div className={activeTab === 0 ? "animate-fade block" : "hidden"}>
              <FirstCarousel images={[Image1, Image2, Image3, Image4]} />
            </div>
            <div className={activeTab === 1 ? "animate-fade block" : "hidden"}>
              <FirstCarousel images={[Image5, Image6, Image7, Image8]} />
            </div>
            <div className={activeTab === 2 ? "animate-fade block" : "hidden"}>
              {/* <ReactPlayer
                url="https://vimeo.com/917278056"
                controls
                muted
                playing
                loop
                width={`100%`}
              /> */}
              <VideoComponent />
            </div>
            <div className={activeTab === 3 ? "animate-fade block" : "hidden"}>
              <FirstCarousel images={[Image1, Image2, Image3, Image4]} />
            </div>
            <div className={activeTab === 4 ? "animate-fade block" : "hidden"}>
              <FirstCarousel images={[Image1, Image2, Image3, Image4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ label, isActive, onClick }) {
  return (
    <a
      href={`/services`}
      className={
        isActive
          ? "text-primary-950 dark:text-primary-200 dark:bg-primary-400/10 bg-primary-500/10 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 border-b-2 p-2"
          : "p-2 text-primary-400 dark:text-primary-500"
      }
      onMouseEnter={onClick}
    >
      {label}
    </a>
  );
}
