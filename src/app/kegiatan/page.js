"use client";
import { CardPlacehoderSkeleton } from "@/components/selecton/cardBerita";
import Jumbotron from "@/items/jumbotron";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Berita = () => {
  const [kegiatan, setKegiatan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/cms/getKegiatan`
        );
        setKegiatan(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Jumbotron judul="Berita STHG" />
      <div className="mx-auto max-w-3xl text-center py-10">
        <h2 className="text-3xl font-bold sm:text-4xl uppercase">
          Kegiatan Sekolah Tinggi Hukum Galunggung
        </h2>
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
    </>
  );
};

export default Berita;
