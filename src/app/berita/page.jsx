"use client";
import Jumbotron from "@/items/jumbotron";
import axios from "axios";
import { useEffect, useState } from "react";

const Berita = () => {
  const [berita, setBerita] = useState([]);

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
  console.log(berita);
  return (
    <>
      <Jumbotron judul="Berita STHG" />
      <div className="mx-auto max-w-3xl text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl uppercase">
          Berita Sekolah Tinggi Hukum Galunggung
        </h2>
      </div>
      <div className="w-full relative px-6 md:px-16 py-10 mx-auto bg-white pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {berita.map((item, key) => (
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
            <img alt="" src={item.foto} className="h-56 w-full object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                {item.tanggal_berita}{" "}
              </time>

              <a href={`/detail-berita/${item.slug}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">{item.judul}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.deskripsi.slice(0, 100)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Berita;
