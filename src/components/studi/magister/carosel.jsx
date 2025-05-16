"use client";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const JumbotronKaprodi = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getStafS2Hukum"
        );

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Carousel
      className="h-[600px]"
      autoplay={true}
      loop={true}
      autoplayDelay={3000} // Durasi jeda antar slide dalam milidetik (3000ms = 3 detik)
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
          className="h-full w-full flex flex-col  items-center justify-center md:flex-row"
        >
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={item.foto}
              alt="image 1"
              className="h-96 w-96 lg:h-[450px] lg:w-[450px] object-cover p-10 rounded-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-black">{item.nama}</h2>
            <p className=" text-2xl text-black">{item.jabatan}</p>
            <p className="text-2xl text-black">{item.deskripsi_jabatan}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default JumbotronKaprodi;
