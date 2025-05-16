"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const MengapaSTHG = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKenapaSTHG"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="bg-[#01012e]">
        <div className="w-full px-4 py-8 sm:px-6 md:px-16 sm:py-12 lg:py-16">
          <div className="items-center w-full text-white">
            <h2 className="text-3xl text-start font-bold sm:text-4xl">
              Kenapa Memilih STHG ?
            </h2>

            <p className="mt-4  text-justify">
              Dengan masih memegang semangat serupa itu, STHG Tasikmalaya kini
              berusaha untuk melayani masyarakat Tasikmalaya dengan lebih baik
              dengan cara mendidik para generasi muda maupun memberi pencerahan
              kepada khalayak masyarakat yang lebih luas untuk memahami hak dan
              kewajibannya sebagai warga negara Indonesia.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-gradient-to-r from-red-700 to-black hover:bg-gradient-to-r hover:from-black hover:to-red-700 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:ring focus:ring-yellow-400"
            >
              Daftar Sekrang
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-8">
            {data.map((item, key) => (
              <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                <span className="inline-block rounded bg-blue-600 p-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    {item.judul}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {item.judul}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MengapaSTHG;
