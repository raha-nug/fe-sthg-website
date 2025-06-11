"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import JudulComponent from "@/items/judulPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "@/components/selecton/cardBerita";
import { data } from "autoprefixer";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";

const BeritaSTHG = () => {
  const [berita, setBerita] = useState([]);
  const [beritaSet, setBeritaSet] = useState(false);

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
    fetchData();
  }, []);

  console.log("Berita", berita);

  return (
    <div className="w-full relative px-6 md:px-16 mx-auto bg-white border-b-2 pb-20">
      {/* Custom navigation buttons */}
      <div className="flex justify-between w-full items-center py-10">
        <h1
          className={`font-bold text-3xl md:text-3xl text-start text-[#01012e]`}
        >
          BERITA STHG
        </h1>
        <Button className="flex justify-center items-center bg-gradient-to-r from-red-700 to-black hover:bg-gradient-to-r hover:from-black hover:to-red-700  py-3 text-sm font-medium text-white transition hover:shadow focus:ring focus:ring-yellow-400">
          <a href="/berita">Berita Lainnya</a>
          <ChevronRight />
        </Button>
      </div>

      <div className=" relative">
        <div className="w-full relative  mx-auto  pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {berita.length === 0 && <CardPlacehoderSkeleton />}

          {berita.map((item, key) => (
            <Card className="mt-6 w-full">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={item.foto} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.judul}
                </Typography>
                <Typography>
                  {item.deskripsi.split(" ").slice(0, 100).join(" ")}
                  {item.deskripsi.split(" ").length > 100 && "..."}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href={`/detail-berita/${item.slug}`}>
                  <Button> Read More</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaSTHG;
