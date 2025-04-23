"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Event {
  day: string;
  location: string;
  description: string;
}

interface DateData {
  month: string;
  events: Event[];
}

interface ScheduleData {
  dates: DateData[];
}

const artists = [
  "Mamamoo",
  "Momoland",
  "NewJeans",
  "Exo",
  "StrayKids",
  "Aespa",
  "Red Velvet",
  "Twice",
  "Itzy",
  "GirlsGenera",
];

const Schedule: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(2);
  const [scheduleData, setScheduleData] = useState<ScheduleData[]>([]);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const res = await fetch("/data.json");
        const data: ScheduleData[] = await res.json();
        setScheduleData(data);
      } catch (err) {
        console.error("Error fetching schedule data", err);
      }
    };
    fetchScheduleData();
  });

  const renderImage = () => {
    const images = [
      "/images/mamamoo.webp",
      "/images/momoland.jpg.avif",
      "/images/newjeans.jpeg",
      "/images/exo.jpg",
      "/images/straykid.png",
      "/images/aespa.jpg",
      "/images/redvelvet.jpg",
      "/images/twice.jpg",
      "/images/itzy.jpg",
      "/images/girlgeneration.jpg",
    ];

    return images.map((image, idx) => (
      <img
        src={image}
        key={idx}
        alt="image"
        className={`opacity-90 w-full h-auto max-h-[600px] object-cover object-top max-md:mb-20 ${
          selectedItem === idx ? "" : "hidden"
        }`}
      />
    ));
  };

  const renderDates = () => {
    if (!scheduleData[selectedItem]) return null;

    const dates = scheduleData[selectedItem].dates;
    return (
      <div className="md:absolute bottom-2 flex items-start justify-around w-full text-neutral-100 max-md:grid grid-cols-2 max-md:gap-6">
        {dates.map((date, idx) => (
          <div className="text-white" key={idx}>
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4">
              {date.month}
            </h1>
            <ul className="lg:space-y-4 space-y-2">
              {date.events.map((event, i) => (
                <li
                  key={i}
                  className="flex flex-row items-center lg:space-x-5 space-x-2"
                >
                  <h2 className="lg:text-3xl text-xl">{event.day}</h2>
                  <div className="max-md:text-sm ">
                    <h3>{event.location}</h3>
                    {event.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  // item click fnc
  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  // motion effects
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "keyframe", duration: 0.4 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={container}
      viewport={{ once: true }}
      className="mt-20 mb-40"
    >
      <motion.div variants={item}>
        <h1 className="lg:text-7xl text-4xl text-center mb-6">Schedule</h1>
        <p className="lg:text-2xl text-base text-center w-6/12 max-md:w-10/12 mx-auto text-neutral-400">
          Discover the schedule of your favorite idols and support them at the
          incredibly grand concert
        </p>
      </motion.div>
      <motion.div
        variants={item}
        className="mt-24 lg:text-xl text-base overflow-x-scroll h-[44px]"
      >
        <ul className=" flex items-center text-xl md:text-3xl uppercase space-x-9 whitespace-nowrap scrollbar-hide text-neutral-500">
          {Array.from({ length: 10 }, (_, idx) => (
            <li
              key={idx}
              onClick={() => handleItemClick(idx)}
              className={`${
                selectedItem === idx
                  ? "scale-125 text-yellow-500 shadow-xl"
                  : ""
              } transition-all ease-in duration-150 cursor-pointer`}
            >
              {artists[idx]}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div variants={item} className="mt-24">
        <div className="relative md:bg-gradient-to-tl from-black to-white z-10">
          {renderImage()}
          {renderDates()}
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="flex items-baseline mt-20 justify-center"
      >
        <button className="md:px-7 px-5 py-2 border-2 hover:bg-white hover:text-black transition-all ease-in  duration-150">
          Show All
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Schedule;
