"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Kegiatan = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://sthg.labtekcmr.com/api/cms/getKegiatanS1Hukum"
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-6 md:mx-16 pb-10">
      <h1 className="text-3xl font-bold text-center py-10">Kegiatan Prodi</h1>

      <div className="flex gap-4 flex-col-reverse md:flex-row md:justify-center">
        {data.map((data, index) => (
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
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

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{data.judul}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {data.deskripsi_kegiatan}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Kegiatan;
