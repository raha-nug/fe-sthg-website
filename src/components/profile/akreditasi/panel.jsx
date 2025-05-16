"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const TabsAkreditasi = ({ akreditasiS1, akreditasiS2, akreditasiKampus }) => {
  const [activeTab, setActiveTab] = React.useState("kampus");
  const data = [
    {
      label: "Akreditasi Kampus",
      value: "kampus",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Akreditasi S1 Hukum",
      value: "s1",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Akreditasi S2 Hukum",
      value: "s2",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value={"kampus"}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  uppercase bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lihat Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nomor SK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Masa Berlaku (dd/mm/yyyy)
                  </th>
                </tr>
              </thead>
              <tbody>
                {akreditasiKampus.map((akreditasi) => (
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {akreditasi.institusi}
                    </th>
                    <td className="px-6 py-4">{akreditasi.akreditasi}</td>
                    <td className="px-6 py-4">
                      <a href={akreditasi.file} target="_blank">
                        Likat Akreditasi
                      </a>
                    </td>
                    <td className="px-6 py-4">{akreditasi.nomor_sk}</td>
                    <td className="px-6 py-4">{akreditasi.masa_berlaku}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={"s1"}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  uppercase bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lihat Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nomor SK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Masa Berlaku (dd/mm/yyyy)
                  </th>
                </tr>
              </thead>
              <tbody>
                {akreditasiS1.map((akreditasi) => (
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {akreditasi.institusi}
                    </th>
                    <td className="px-6 py-4">{akreditasi.akreditasi}</td>
                    <td className="px-6 py-4">
                      <a href={akreditasi.file} target="_blank">
                        Likat Akreditasi
                      </a>
                    </td>
                    <td className="px-6 py-4">{akreditasi.no_sk}</td>
                    <td className="px-6 py-4">{akreditasi.masa_berlaku}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value={"s2"}>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs  uppercase bg-gray-900 text-white dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lihat Akreditasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nomor SK
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Masa Berlaku (dd/mm/yyyy)
                  </th>
                </tr>
              </thead>
              <tbody>
                {akreditasiS2.map((akreditasi) => (
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {akreditasi.institusi}
                    </th>
                    <td className="px-6 py-4">{akreditasi.akreditasi}</td>
                    <td className="px-6 py-4">
                      <a href={akreditasi.file} target="_blank">
                        Likat Akreditasi
                      </a>
                    </td>
                    <td className="px-6 py-4">{akreditasi.no_sk}</td>
                    <td className="px-6 py-4">{akreditasi.masa_berlaku}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
};

export default TabsAkreditasi;
