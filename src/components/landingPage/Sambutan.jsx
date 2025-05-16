"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import SkeletonTekst from "../selecton/text";
import useLanguageStore from "@/store/useLanguageStore";
import LanguageSwitcher from "../LanguageSwitcher";

const Sambutan = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguageStore();

  const texts = {
    id: {
      greeting: "Sambutan Ketua STHG",
      description: "Silakan pilih bahasa yang Anda inginkan.",
    },
    en: {
      greeting: "English greeting",
      description: "Please select the language you prefer.",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getSambutan"
        );

        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#fff] w-full relative">
      {/* <JudulComponent title="Sambutan Ketua" /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute top-0"
      >
        <defs>
          <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#171717" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradientFill)"
          fillOpacity="1"
          d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg> */}

      {data.length === 0 && (
        <div className="flex justify-center items-center p-8 md:p-12  lg:px-16 lg:py-24"></div>
      )}
      {data.map((data, key) => (
        <section
          key={key}
          className="overflow-hidden flex flex-col md:flex-row md:items-center md:justify-center"
        >
          <div className="p-8 md:p-12  lg:px-16 lg:py-24 order-2 sm:order-1 md:w-1/2">
            <div className="mx-auto  max-w-xl text-center sm:text-left ">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {/* {data.judul} */}
                {texts[language].greeting}
              </h2>

              <p className=" text-gray-500 md:mt-4 md:block text-justify">
                {data.sambutan}
              </p>
            </div>
          </div>

          <img
            alt=""
            src={data.foto}
            className="h-full w-full md:w-1/2 sm:rounded-ss-[30px]  md:rounded-ss-[60px] order-1 sm:order-2"
          />
        </section>
      ))}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L80,144C160,160,320,192,480,202.7C640,213,800,203,960,192C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default Sambutan;
