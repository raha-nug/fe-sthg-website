"use client";
import { useEffect, useState } from "react";
import TabsAkreditasi from "./panel";
import Jumbotron from "@/items/jumbotron";
import axios from "axios";
const Akreditasi = () => {
  const [akreditasiS1Hukum, setAkreditasiS1Hukum] = useState([]);
  const [akreditasiS2Hukum, setAkreditasiS2Hukum] = useState([]);
  const [akreditasiKampus, setAkreditasiKampus] = useState([]);
  useEffect(() => {
    console.log("🔄 useEffect dijalankan...");
    const fetchData = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getAkreditasiS1",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiS1Hukum(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    const fetchDataKampus = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getAkreditasiKampus",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiKampus(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    const fetchDataS2 = async () => {
      try {
        console.log("🔄 Fetching data...");
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getAkreditasiKampus",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("✅ Data fetched:", response.data);
        setAkreditasiS2Hukum(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchDataS2();
    fetchDataKampus();
    fetchData();
  }, []);
  return (
    <div className="font-sans pb-16">
      <Jumbotron judul="Akreditasi" />
      <div className="px-6 md:px-16">
        <nav
          className="flex py-6   md:border-b shadow-md md:shadow-none"
          aria-label="Breadcrumb"
        >
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
                  Profile
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
                  Akreditasi
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="text-justify my-10">
          <p>
            Badan Akreditasi Nasional Pendidikan Tinggi (BAN-PT) adalah
            satu-satunya lembaga akreditasi yang diakui oleh Kementerian
            Pendidikan Nasional Republik Indonesia. BAN-PT mengawasi kualitas
            dan efisiensi pendidikan tinggi melalui proses akreditasi semua
            program studi di institusi pendidikan tinggi di Indonesia. BAN PT
            telah memberikan informasi kepada publik tentang status akreditasi
            mata kuliah atau program studi di institusi tersebut, sehingga
            masyarakat meyakini tentang kualitas pendidikan yang ditawarkan dan
            kualitas program-program ini dapat dipertahankan dan ditingkatkan.
          </p>
        </div>
        <TabsAkreditasi
          akreditasiS1={akreditasiS1Hukum}
          akreditasiKampus={akreditasiKampus}
          akreditasiS2={akreditasiS2Hukum}
        />
      </div>
    </div>
  );
};

export default Akreditasi;
