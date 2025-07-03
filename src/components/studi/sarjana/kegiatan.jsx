"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Kegiatan = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getKegiatanS1Hukum`
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {data.map((item, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm w-full"
          >
            <img alt="" src={item.foto} className="w-full h-48 object-cover" />

            <div className="bg-white p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">{item.judul}</h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {item.deskripsi_kegiatan}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Kegiatan;
