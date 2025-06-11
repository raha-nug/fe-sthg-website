"use client";
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import useLanguageStore from "@/store/useLanguageStore";

export function Pengmuman() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const [data, setData] = useState([]);
  const { language } = useLanguageStore();

  const texts = {
    id: {
      greeting: "Halo, selamat datang di aplikasi kami!",
      description: "Silakan pilih bahasa yang Anda inginkan.",
    },
    en: {
      greeting: "Hello, welcome to our application!",
      description: "Please select the language you prefer.",
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/cms/getPengumuman`);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="h-[700px] w-full pt-0 bg-yellow-300">
      <JudulComponent title={"Pengumuman & Informasi"} />
      <div className="w-full  flex items-center justify-center ">
        <div className="h-[300px] border-4 md:h-[400px] md:mx-16">
          <Carousel
            autoplay={true}
            loop={true}
            autoplayDelay={6000}
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
            transition={{ duration: 2 }}
            className=""
          >
            {data.map((item, key) => (
              <img
                key={key}
                src={item.foto}
                alt="image 1"
                className="h-full w-full"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
