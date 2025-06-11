import Navbar from "../../Navbar";
import Footer from "../../../Item/footer";
import { IconButtonCustomStyles } from "./IconBTN";
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router";
const DetailBerita = () => {
  const [berita, setBerita] = useState([]);
  const [detail, setDetail] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getBerita"
        );
        setBerita(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+`/api/cms/detailBerita/${slug}`
        );
        setDetail(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetail();
    fetchData();
  }, []);
  console.log(detail);
  console.log(berita);
  return (
    <>
      <Navbar />
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
                    Berita
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
                    Detail-Berita
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
                  {detail.tanggal_berita}
                </dt>
                <dd className="text-gray-700 sm:col-span-2">Mr</dd>
              </div>
            </dl>
          </div>

          <div className="flex gap-4">
            <div className="w-full lg:w-[70%]">
              <img src={detail.foto} alt="" className="py-8" />
              <p className="text-justify">{detail.deskripsi}</p>
            </div>
            <div className="hidden lg:block lg:w-[30%] mt-8">
              <ul className="w-full h-max-w-screen-xl overflow-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {berita.map((item, key) => (
                  <li
                    key={key}
                    className="w-full  px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                  >
                    <article className="flex flex-col  bg-white transition hover:shadow-xl">
                      <div className=" p-2 ">
                        <time
                          dateTime={item.tanggal_berita}
                          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                          <span>{item.tanggal_berita}</span>
                        </time>
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                          <a href="#">
                            <h3 className="font-bold uppercase text-gray-900">
                              {item.judul}
                            </h3>
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae dolores, possimus pariatur animi
                            temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus
                            soluta, voluptates neque explicabo tempora nisi
                            culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                          </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">
                          <a
                            href="#"
                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                          >
                            Read Blog
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailBerita;
