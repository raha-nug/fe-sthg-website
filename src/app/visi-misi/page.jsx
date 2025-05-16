"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "@/items/jumbotron";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

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
          "https://sthg.labtekcmr.com/api/cms/getVisiMisi"
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

      <section className="bg-white text-black mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl uppercase">
              Visi & Misi
            </h2>
            <p className="mt-4 text-black">
              Sekolah Tinggi Hukum Galunggung (STHG) Tasikmalaya memiliki visi
              dan misi yang jelas untuk menghasilkan lulusan yang berkompeten
              dan siap berkontribusi bagi masyarakat.
            </p>
          </div>
        </div>
        <Tabs value="html">
          <TabsHeader>
            {dataTabs.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span>{label}</span>
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {dataTabs.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <Card className="w-full  flex-row">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-40 hidden md:flex shrink-0 rounded-r-none items-center justify-center"
                  >
                    <img
                      src="/gambar/newLogo.png"
                      alt="card-image"
                      className=" object-cover h-32"
                    />
                  </CardHeader>
                  <CardBody className=" flex items-center">
                    <Typography color="gray" className=" font-normal h-full">
                      {desc}
                    </Typography>
                  </CardBody>
                </Card>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </section>
    </div>
  );
}
