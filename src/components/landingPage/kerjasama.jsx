"use client";
import axios from "axios";
import JudulComponent from "@/items/judulPage";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Kerjasama = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://sthg.labtekcmr.com/api/cms/getKerjasamaSTHG"
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);
  return (
    <div className="w-full relative px-6 md:px-16">
      <JudulComponent title={"Kerjasama Kami"} />
      <div className=" relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
          <button
            id="prevBtn"
            className="p-2 bg-gradient-to-r from-red-700 to-black text-white rounded-full shadow-lg"
          >
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
          <button
            id="nextBtn"
            className="p-2 bg-gradient-to-r from-red-700 to-black text-white rounded-full shadow-lg"
          >
            <svg
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1} // Default untuk layar kecil
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide pada layar mobile
            },
            768: {
              slidesPerView: 3, // 3 slides pada layar medium
            },
            1024: {
              slidesPerView: 4, // 4 slides pada layar besar
            },
          }}
          className="swiper-container"
        >
          {data.map((data, index) => (
            <SwiperSlide key={data.id} className="swiper-slide-container">
              <a
                href={data.link}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <img src={data.foto_or_logo} alt="Kerjasama" className="h-32" />
                <span className="font-semibold">{data.judul}</span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Kerjasama;
