"use client";
import JudulComponent from "@/items/judulPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCard } from "@/items/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { CardPlacehoderSkeleton } from "../selecton/cardBerita";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ChevronRight } from "lucide-react";

export function KegiatanSTHG() {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getKegiatan"
        );
        setKegiatan(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log("Kegiatan", kegiatan);
  return (
    <div className="w-full  px-6 md:px-16 border-b-2 pb-20">
      <div className="flex justify-between w-full items-center py-10">
        <h1 className={`font-bold text-3xl md:text-3xl text-start text-[#000]`}>
          KEGIATAN STHG
        </h1>
      </div>

      <div className="w-full relative  py-10 mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kegiatan.length === 0 && <CardPlacehoderSkeleton />}

        {kegiatan.map((item, key) => (
          <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={item.foto} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.judul}
              </Typography>
              <Typography>
                {item.deskripsi_kegiatan.split(" ").slice(0, 100).join(" ")}
                {item.deskripsi_kegiatan.split(" ").length > 100 && "..."}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <a href={`/detail-kegiatan/${item.id_kegiatan}`}>
                <Button> Read More</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
