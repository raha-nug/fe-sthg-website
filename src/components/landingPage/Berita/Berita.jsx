"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "@/components/selecton/cardBerita";
import { data } from "autoprefixer";

const BeritaSTHG = () => {
  const [berita, setBerita] = useState([]);
  const [beritaSet, setBeritaSet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getBerita"
        );
        setBerita(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log("Berita", berita);

  return (
    <div className="w-full relative px-6 md:px-16 mx-auto bg-white pb-20">
      {/* Custom navigation buttons */}
      <div className="flex justify-center w-full items-center relative py-10 md:py-16 md:px-16 ">
        <h1
          className={`font-bold text-3xl md:text-3xl text-center text-[#01012e]`}
        >
          Berita STHG
        </h1>
      </div>

      <div className=" relative">
        <div className="w-full relative  mx-auto  pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {berita.length === 0 && <CardPlacehoderSkeleton />}
          {berita.map((item, key) => (
            <article className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-lg">
              <img
                alt=""
                src={item.foto}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <a href={`/detail-berita/${item.slug}`}>
                  <h3 className="mt-0.5 text-lg text-gray-900">{item.judul}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {data.deskripsi}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/berita"
            className="mt-8 inline-block rounded bg-gradient-to-r from-red-700 to-black hover:bg-gradient-to-r hover:from-black hover:to-red-700 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:ring focus:ring-yellow-400"
          >
            Berita Lainnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeritaSTHG;
