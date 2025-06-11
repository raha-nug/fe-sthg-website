"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
const CardSwiper = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getFasilitas"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto mt-10 relative">
      {/* Custom navigation buttons */}
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
        {data.map((card) => (
          <SwiperSlide key={card.id} className="swiper-slide-container">
            <article className="relative overflow-hidden rounded-lg shadow-lg ">
              <img
                src={card.foto}
                alt={card.nama}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 transition-opacity duration-300 ease-in-out hover:bg-gradient-to-t hover:from-gray-900/60 hover:to-gray-900/30">
                <div className="p-4 sm:p-6">
                  <time
                    datetime="2022-10-10"
                    className="block text-xs text-white/90"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg font-bold text-white">
                      {card.nama}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95 w-30 truncate">
                    {card.deskripsi}
                  </p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;
