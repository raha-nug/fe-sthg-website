"use client";
import { IconButtonCustomStyles } from "@/components/landingPage/Berita/IconBTN";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "next/navigation";

const DetailKegiatan = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.post(
          `https://sthg.labtekcmr.com/api/cms/detailKegiatan`,
          {
            id_kegiatan: id,
          }
        );
        setDetail(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetail();
  }, []);
  console.log(detail);
  console.log(kegiatan);

  const formatDate = (dateString) => {
    return dateString.split("T")[0];
  };

  return (
    <>
      <div className="w-full py-36 px-6  md:py-48 flex md:px-16">
        <div className="w-full flex flex-col justify-start items-start">
          <IconButtonCustomStyles />
          <nav className="flex py-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Kegiatan
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Detail-Kegiatan
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-center text-3xl font-semibold">{detail.judul}</h1>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">
                  {detail.created_at}
                </dt>
              </div>
            </dl>
          </div>

          <div className="flex gap-4">
            <div className="w-full lg:w-[70%]">
              <img src={detail.foto} alt="" className="py-8" />
              <p className="text-justify">{detail.deskripsi_kegiatan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailKegiatan;
