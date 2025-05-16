import Jumbotron from "@/items/jumbotron";
import JumbotronKaprodi from "./carosel";
import Kegiatan from "./kegiatan";

const prospek = [
  {
    id: 1,
    nilai: "HAKIM",
    keterangan:
      "Profesi yang memutuskan perkara di pengadilan berdasarkan hukum yang berlaku dan keyakinannya, serta menjaga keadilan dan integritas sistem peradilan.",
  },
  {
    id: 2,
    nilai: "KONSULTASI HUKUM",
    keterangan:
      "Memberikan saran dan pendapat hukum kepada klien, baik individu maupun perusahaan, untuk membantu mereka mengambil keputusan yang sesuai dengan peraturan perundang-undangan.",
  },
  {
    id: 3,
    nilai: "ADVOKAT",
    keterangan:
      "Mewakili dan membela klien dalam proses hukum, baik di dalam maupun di luar pengadilan, serta memberikan nasihat hukum untuk melindungi hak-hak dan kepentingan mereka.",
  },
  {
    id: 4,
    nilai: "JAKSA POLISI",
    keterangan:
      "Menuntut pelaku kejahatan di pengadilan, mengumpulkan bukti, dan bekerja sama dengan penegak hukum lainnya untuk memastikan bahwa keadilan ditegakkan dan pelaku kejahatan dihukum sesuai dengan hukum yang berlaku.",
  },
  {
    id: 5,
    nilai: "NOTARIS",
    keterangan:
      "Mengurus akta-akta autentik dan berbagai dokumen resmi lainnya, seperti perjanjian, surat wasiat, dan akta pendirian perusahaan, serta memastikan bahwa semua dokumen tersebut sah dan sesuai dengan hukum.",
  },
  {
    id: 6,
    nilai: "BIROKRAT",
    keterangan:
      "Mengelola administrasi pemerintahan, termasuk perumusan kebijakan, pelaksanaan program pemerintah, dan pemberian pelayanan kepada masyarakat, serta memastikan bahwa semua kegiatan tersebut sesuai dengan peraturan yang berlaku.",
  },
  {
    id: 7,
    nilai: "DOSEN",
    keterangan:
      "Mengajar dan melakukan penelitian di perguruan tinggi, menyusun kurikulum, membimbing mahasiswa, dan berkontribusi dalam pengembangan ilmu hukum melalui publikasi dan kegiatan akademik lainnya.",
  },
  {
    id: 8,
    nilai: "PANITERA",
    keterangan:
      "Membantu hakim dalam administrasi perkara di pengadilan, termasuk pencatatan proses persidangan, pengelolaan berkas perkara, dan penyusunan putusan pengadilan, serta memastikan bahwa semua proses tersebut berjalan dengan tertib dan efisien.",
  },
  {
    id: 9,
    nilai: "BUMN",
    keterangan:
      "Bekerja di Badan Usaha Milik Negara yang bergerak di berbagai sektor, seperti energi, transportasi, dan telekomunikasi, serta berkontribusi dalam pengelolaan dan pengembangan perusahaan untuk mencapai tujuan strategis pemerintah.",
  },
  {
    id: 10,
    nilai: "BUMD",
    keterangan:
      "Bekerja di Badan Usaha Milik Daerah yang berfokus pada pengembangan ekonomi daerah, penyediaan layanan publik, dan peningkatan kesejahteraan masyarakat melalui berbagai proyek dan inisiatif lokal.",
  },
  {
    id: 11,
    nilai: "ASN/PNS",
    keterangan:
      "Aparatur Sipil Negara yang bekerja di instansi pemerintah, termasuk kementerian, lembaga, dan pemerintah daerah, serta bertugas dalam penyusunan kebijakan, pelaksanaan program, dan pemberian pelayanan publik.",
  },
  {
    id: 12,
    nilai: "DIPLOMAT",
    keterangan:
      "Mengurus hubungan internasional dan perjanjian antar negara, mewakili kepentingan negara di luar negeri, dan berpartisipasi dalam negosiasi internasional untuk mencapai kesepakatan yang bermanfaat bagi negara.",
  },
  {
    id: 13,
    nilai: "LEGAL DRAFTER",
    keterangan:
      "Menyusun peraturan perundang-undangan, kontrak, dan dokumen hukum lainnya, memastikan bahwa semua dokumen tersebut sesuai dengan hukum yang berlaku dan dapat melindungi hak-hak serta kepentingan pihak-pihak yang terlibat.",
  },
  {
    id: 14,
    nilai: "LEGAL OFFICER",
    keterangan:
      "Bertanggung jawab atas kepatuhan hukum perusahaan, memberikan nasihat hukum, menyusun dan meninjau kontrak, serta menangani sengketa hukum untuk melindungi kepentingan perusahaan.",
  },
  {
    id: 15,
    nilai: "PERBANKAN",
    keterangan:
      "Bekerja di sektor perbankan, memberikan nasihat hukum terkait produk dan layanan perbankan, serta memastikan bahwa semua operasi perbankan mematuhi peraturan perundang-undangan yang berlaku.",
  },
  {
    id: 16,
    nilai: "MEDIATOR",
    keterangan:
      "Membantu pihak-pihak yang bersengketa untuk mencapai kesepakatan damai melalui proses mediasi, mengurangi beban pengadilan, dan memberikan solusi yang adil dan memuaskan bagi semua pihak.",
  },
  {
    id: 17,
    nilai: "PENELITIAN HUKUM",
    keterangan:
      "Melakukan penelitian di bidang hukum untuk mengembangkan pengetahuan dan teori hukum, menyusun laporan dan publikasi ilmiah, serta berkontribusi dalam reformasi hukum dan kebijakan publik.",
  },
  {
    id: 18,
    nilai: "KURATOR",
    keterangan:
      "Mengelola proses kepailitan dan likuidasi perusahaan, mengamankan aset-aset debitur, dan memastikan bahwa hak-hak kreditur terlindungi selama proses penyelesaian utang.",
  },
  {
    id: 19,
    nilai: "DLL",
    keterangan:
      "Prospek karir lainnya dalam bidang hukum yang meliputi berbagai posisi di sektor publik dan swasta yang memerlukan pengetahuan hukum dan keterampilan analitis.",
  },
];
const Master = () => {
  return (
    <div>
      <Jumbotron judul={"Program Master Hukum"} img={"/gambar/hukum.jpeg"} />
      <nav
        className="flex py-6 px-6 md:px-16  md:border-b shadow-md md:shadow-none"
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
                Program-Studi
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
                Master-Hukum
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div>
        <div>
          <section className="bg-[#01012e] text-white">
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
              <div className="">
                <h2
                  className="text-3xl font-bold sm:text-4xl delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
                  data-taos-offset="300"
                >
                  Program Studi Ilmu Hukum
                </h2>

                <p className="mt-4 text-gray-300">
                  Program studi Ilmu Hukum merupakan bidang studi yang mendalami
                  beragam sistem hukum, baik di tingkat nasional maupun
                  internasional, yang secara langsung berpengaruh pada kehidupan
                  sosial masyarakat dan dunia bisnis. Selain itu, mahasiswa Ilmu
                  Hukum akan mempelajari berbagai cabang ilmu hukum yang
                  meliputi Hukum Tata Negara, Hukum Administrasi Negara, Hukum
                  Adat, Hukum Agraria, Hukum Internasional, Hukum Dagang, Hukum
                  Perdata, Hukum Pidana, Hukum Islam, Hukum Lingkungan, Hukum
                  Pajak, Ilmu Perundang-undangan, Hukum Pemerintah Daerah, dan
                  masih banyak lagi. Dengan demikian, mahasiswa Ilmu Hukum akan
                  dibekali dengan pengetahuan yang luas dan mendalam mengenai
                  berbagai aspek hukum yang relevan dengan berbagai sektor
                  kehidupan dan kegiatan bisnis di era globalisasi ini.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-custom-image bg-cover bg-center md:h-[600px] flex items-center py-10">
        <JumbotronKaprodi />
      </div>

      <section className="bg-[#01012e] text-white">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Prospek Karir di Program Studi Ilmu Hukum
            </h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod
              ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga
              minima.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {prospek.map((prospek, key) => (
              <div key={key} className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">{prospek.nilai}</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    {prospek.keterangan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Kegiatan />
    </div>
  );
};

export default Master;
