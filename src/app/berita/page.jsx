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
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2022{" "}
              </time>

              <a href={`/detail-berita/${item.slug}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">
                  How to position your furniture for positivity
                </h3>
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
    </>
  );
};

export default Berita;
