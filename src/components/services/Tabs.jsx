import React, { useState } from "react";
// import { YouTube } from "@astro-community/astro-embed-youtube";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import Vimeo from "@u-wave/react-vimeo";
import ReactPlayer from "react-player/vimeo";
import ReactCompareImage from "react-compare-image";
import Vimeo from "@u-wave/react-vimeo";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// Images
import Image1 from "../../assets/image_apartment.jpeg";
import Image2 from "../../assets/image_apartment6.webp";
import Image3 from "../../assets/image_apartment3.png";
import Image4 from "../../assets/image_apartment4.png";
import Image5 from "../../assets/image_apartment5.jpeg";
import Image6 from "../../assets/image_apartment6.jpeg";
import Image7 from "../../assets/image_apartment6.webp";
import Image8 from "../../assets/image_apartment.jpeg";

import ClickCarousel from "./tabs_content/ClickCarousel";
// import VimeoPlayerComponent from "./tabs_content/VideoPlayer";

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
    <section id="click_tabs" className="py-16 sm:py-20">
      <div className="flex flex-col text-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="">
          <h2 className="text-5xl py-8 font-medium">VIZUALIZĀCIJAS SERVISI</h2>
        </div>
        <div className="">
          <div className="flex flex-row items-center">
            <div className="mx-24 grow tab-buttons grid grid-flow-col text-center items-center text-gray-500 bg-gray-100 rounded-lg p-1">
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
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ClickCarousel images={[Image1, Image2, Image3, Image4]} />
                </div>
                <div className="flex flex-col justify-end px-10 text-left">
                  <p className="pb-12">
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                  <div>
                    <a href="/contact" className="text text-2xl">
                      Piesakies
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={activeTab === 1 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ClickCarousel images={[Image5, Image6, Image7, Image8]} />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 2 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  {/* <LiteYouTubeEmbed
                    id="4Aqn7ubbeIY"
                    title="KLD_Solutions_aero"
                    params="autoPlay=1&controls=0&rel=0"
                    muted={true}
                    autoPlay={true}
                  /> */}
                  {/* <Vimeo video="https://vimeo.com/226260195" autoplay /> */}
                  {/* <VimeoPlayerComponent
                    videoId={`https://vimeo.com/226260195`}
                  /> */}
                  <Vimeo
                    video="917278056"
                    autoplay
                    muted
                    loop
                    quality="1080p"
                    responsive
                    // controls={false}
                  />
                  {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 3 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  {/* <ReactCompareImage leftImage={Image1} rightImage={Image2} /> */}
                  {/* <ReactBeforeSliderComponent
                    firstImage={Image1}
                    secondImage={Image2}
                  /> */}
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        src={Image1.src}
                        // srcSet="..."
                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={Image3.src}
                        // srcSet="..."
                        alt="Image two"
                      />
                    }
                  />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
            <div className={activeTab === 4 ? "animate-fade block" : "hidden"}>
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <ClickCarousel images={[Image1, Image2, Image3, Image4]} />
                </div>
                <div className="flex p-4 text-left items-end">
                  <p>
                    Izveidojiet vēlmi un stāstu par savu vēl neuzcelto projektu.
                    Patiesi detalizēta digitālā vide atspoguļos jūsu turpmākās
                    attīstības labākās iezīmes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={
        isActive
          ? "text-primary-950 dark:text-primary-200 dark:bg-primary-400/10 bg-primary-500/10 border-b-2 border-b-primary-500 dark:border-b-primary-200  p-2"
          : "p-2 border-b-2 border-b-primary-200 dark:border-b-primary-500 text-primary-500 dark:text-primary-500"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}
