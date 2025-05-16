"use client";
import "animate.css";

import { SidebarWithBurgerMenu } from "./Sidebar";
import { useEffect, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowStickyNavbar(true);
    } else {
      setShowStickyNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar1 = document.getElementById("navbar1");
      const navbar2 = document.getElementById("navbar2");

      if (window.scrollY > 50) {
        navbar1.classList.remove("h-14");
        navbar1.classList.add("h-10");
        navbar2.classList.add("h-14");
        navbar2.classList.remove("h-20");
        navbar2.classList.remove("h-20");
      } else {
        navbar1.classList.remove("h-10");
        navbar1.classList.add("h-14");
        navbar2.classList.add("h-20");
        navbar2.classList.remove("h-14");
      }
    });
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`top-0 fixed font-sans dark:bg-gray-900 w-full z-[9999] transition-transform animate__animated animate__fadeInDown`}
      >
        {/* Hide */}
        <div
          id="blackspot"
          className="w-full h-screen bg-black opacity-50 z-[1]  absolute hidden"
        ></div>
        <div
          id="navbar1"
          className=" hidden lg:flex w-full bg-black px-16 justify-between items-center h-14 transition-all duration-300 ease-in-out"
        >
          <div className="flex gap-6 items-center py-3 text-sm">
            <span className="text-yellow-300 flex items-center">
              <svg
                className="w-6 h-6 text-yellow-300 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <p>0265-330092</p>
            </span>
            <span className="text-yellow-300">Informasi@sthg.ac.id</span>
            <ul className="flex justify-center gap-4 sm:justify-start md:gap-4">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-yellow-300 transition hover:text-teal-700/75"
                >
                  <span className="sr-only ">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-yellow-300 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-yellow-300 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="text-yellow-300 flex gap-4 text-sm">
              <li>
                <a href="">Kerjasama</a>
              </li>

              <li>
                <a href="">Berita</a>
              </li>
              <li>
                <a href="">Pengumuman</a>
              </li>
            </ul>

            <LanguageSwitcher />
          </div>
        </div>
        <div
          id="navbar2"
          className="w-full h-20 flex  items-center transition-all duration-300 ease-in-out justify-between mx-auto  bg-gradient-to-r from-neutral-900 to-red-700 md:text-sm md:px-16"
        >
          <div className=" w-full lg:w-[20%]  flex justify-between items-center px-4">
            <div className=" flex items-center gap-2 ">
              <Image
                src="/gambar/newLogo.png"
                alt=""
                width={80}
                height={80}
                className="w-14"
              />
              <Image
                src="/MBKM-logo.png"
                alt=""
                width={80}
                height={80}
                className="w-14"
              />
            </div>

            <div className=" lg:hidden">
              <SidebarWithBurgerMenu />
            </div>
          </div>
          <div className="hidden lg:flex items-center  gap-4 w-full  h-full">
            <ul className="flex gap-4 items-center justify-end  text-white w-full  h-full ">
              <li className="uppercase">
                <a href="/">Home</a>
              </li>
              <li className="dropdown dropdown-hover h-full flex items-center relative group">
                <div className="">
                  <div tabIndex={0} role="button" className="m-1 uppercase">
                    PROFILE
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-0 shadow top-[100%] transform translate-y-[-16px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/visi-misi"
                        className="w-full h-full rounded-none"
                      >
                        Visi & Misi
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/tentang-sthg"
                        className="w-full h-full rounded-none"
                      >
                        Tentang STHG
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/fasilitas"
                        className="w-full h-full rounded-none"
                      >
                        Fasilitas
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/akreditasi"
                        className="w-full h-full rounded-none"
                      >
                        Akreditasi
                      </a>
                    </li>
                  </ul>
                  <div className="absolute left-0 right-0 bottom-3 h-[4px] bg-transparent group-hover:bg-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                </div>
              </li>
              <li className="dropdown dropdown-hover h-full flex items-center relative group">
                <div className="">
                  <div tabIndex={0} role="button" className="w-full uppercase ">
                    Program studi
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-0 shadow top-[100%] transform translate-y-[-16px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full ">
                      <a
                        href="/program-studi/sarjana"
                        className="w-full h-full rounded-none"
                      >
                        Sarjana Hukum
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/program-studi/master"
                        className="w-full h-full rounded-none"
                      >
                        Master Hukum
                      </a>
                    </li>
                  </ul>
                  <div className="absolute left-0 right-0 bottom-3 h-[4px] bg-transparent group-hover:bg-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                </div>
              </li>
              <li className="">
                <a href="">PMB</a>
              </li>
              <li className="dropdown dropdown-hover h-full flex items-center relative group">
                <div>
                  <div tabIndex={0} role="button" className="m-1 uppercase">
                    Akademik
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-sm z-[1] w-52 p-0 shadow top-[100%] transform translate-y-[-16px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/akademik/tracer-study"
                        className="w-full h-full rounded-none"
                      >
                        Tracer Study
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="https://pustaka.sthg.ac.id/"
                        className="w-full h-full rounded-none"
                      >
                        Perpustakaan
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="https://siakadbjbs.sthg.ac.id/"
                        className="w-full h-full rounded-none"
                      >
                        Siakad
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a href="" className="w-full h-full rounded-none">
                        Peraktik Peradilan Lapangan
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r  text-black from-red-700 to-black hover:text-white w-full">
                      <a
                        href="/akademik/tatacara-pembayaran"
                        className="w-full h-full rounded-none"
                      >
                        Tata Cara Pembayaran
                      </a>
                    </li>
                  </ul>
                  <div className="absolute left-0 right-0 bottom-3 h-[4px] bg-transparent group-hover:bg-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                </div>
              </li>

              <li>
                <a href="/kontak" className="uppercase">
                  Kontak
                </a>
              </li>
              <li>
                <a
                  href="https://jurnal.sthg.ac.id/index.php/jurnal/index"
                  className="uppercase"
                >
                  E-Jurnal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
