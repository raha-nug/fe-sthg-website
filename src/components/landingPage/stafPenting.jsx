"use client";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function CaroselStaf() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getStaf"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full">
      <Carousel
        className="h-[600px] bg-staf-bg bg-cover bg-center"
        autoplay={true}
        loop={true}
        interval={3000}
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-neutral-900 to-red-700 text-white p-2 rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-neutral-900 to-red-700 text-white p-2 rounded-full"
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        )}
      >
        {data.map((item, key) => (
          <div
            key={key}
            className="relative h-full w-full flex flex-col items-center justify-center md:flex-row"
          >
            <div className="absolute inset-0 bg-gray-900/50 z-0 sm:bg-gradient-to-r from-gray-900/95 to-gray-900/25"></div>
            <div className="md:w-1/2 flex items-center justify-center z-10">
              <img
                src={item.foto}
                alt={`Image of ${item.nama}`}
                className="h-96 w-96 lg:h-[450px] lg:w-[450px] object-cover p-10 rounded-full"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 items-center justify-center z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">
                {item.nama}
              </h2>
              <p className="text-white text-2xl font-semibold">
                {item.jabatan}
              </p>
              <p className="text-white text-xl font-semibold">
                {item.deskripsi_jabatan}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
