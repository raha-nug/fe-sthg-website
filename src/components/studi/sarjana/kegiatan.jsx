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
        {data.map((item, index) => (
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img alt="" src={item.foto} />

            <div className="bg-white p-4 sm:p-6">
              {/* <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th Oct 2022{" "}
              </time> */}

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">{item.judul}</h3>
              </a>

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
