"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "@/items/jumbotron";

export default function VisiMisi() {
  const [data, setData] = useState([]);

  const dataTabs = [
    {
      label: "Visi",
      value: "html",
      desc: data[0]?.visi,
    },
    {
      label: "Misi",
      value: "react",
      desc: data[0]?.misi,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/cms/getVisiMisi"
        );
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil detail visi dan misi:", error.message);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <Jumbotron judul="Visi dan Misi" />

      <section className="bg-white text-black max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-14">
          <div className="mx-auto max-w-3xl ">
            <h2 className="text-3xl font-bold sm:text-4xl uppercase">
              {data[0]?.judul || "Visi dan Misi"}
            </h2>
            <p className="mt-4 text-black">
              Sekolah Tinggi Hukum Galunggung (STHG) Tasikmalaya memiliki visi
              dan misi yang jelas untuk menghasilkan lulusan yang berkompeten
              dan siap berkontribusi bagi masyarakat.
            </p>
          </div>
          <div className="mx-auto max-w-3xl  mt-5">
            <h2 className="text-xl font-bold sm:text-2xl ">Visi</h2>
            <p className="mt-4 text-black">{data[0]?.visi || "Visi"}</p>
          </div>
          <div className="mx-auto max-w-3xl  mt-5">
            <h2 className="text-xl font-bold sm:text-2xl ">Misi</h2>
            <p className="mt-4 text-black">{data[0]?.misi || "Misi"}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
