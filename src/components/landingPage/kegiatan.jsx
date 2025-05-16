"use client";
import JudulComponent from "@/items/judulPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "@/items/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "../selecton/cardBerita";

export function KegiatanSTHG() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKegiatan"
        );
        setKegiatan(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("Kegiatan", kegiatan);
  return (
    <div className="w-full bg-white pb-20">
      <div className="flex justify-center w-full items-center relative py-10 md:py-16 md:px-16 ">
        <h1
          className={`font-bold text-3xl md:text-3xl text-center text-[#01012e]`}
        >
          Kegiatan STHG
        </h1>
      </div>

      <div className="w-full relative px-6 md:px-16 py-10 mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kegiatan.length === 0 && <CardPlacehoderSkeleton />}
        {kegiatan.map((item, index) => (
          <article className="overflow-hidden rounded-lg shadow-lg transition bg-white hover:shadow-lg">
            <img alt="" src={item.foto} className="h-56 w-full object-cover" />

            <div className="p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href={`/detail-kegiatan/${item.id_kegiatan}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">{item.judul}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="#"
          className="mt-8 inline-block rounded bg-gradient-to-r from-red-700 to-black hover:bg-gradient-to-r hover:from-black hover:to-red-700 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:ring focus:ring-yellow-400"
        >
          Kegiatan Lainnya
        </a>
      </div>
    </div>
  );
}
