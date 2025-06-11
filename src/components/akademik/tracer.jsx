import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Input,
  ListItem,
  ListItemPrefix,
  Checkbox,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";
import { Label, Textarea } from "flowbite-react";
import axios from "axios";
import Link from "next/link";

const kodePT = [{ value: "043002", label: "043002 (Kode PT)" }];
const kodeProdi = [
  { value: "74201", label: "74201 (S1)" },
  { value: "74101", label: "74101 (S2)" },
];
const pekerjaan = [
  {
    value: "Bekerja(full time/part time)",
    label: "Bekerja (full time / part time)",
  },
  {
    value: "Belum memungkinkan bekerja",
    label: "Belum memungkinkan bekerja",
  },
  {
    value: "wiraswasta",
    label: "Wiraswasta",
  },
  {
    value: "Melanjutkan pendidikan",
    label: "Melanjutkan Pendidikan",
  },
  {
    value: "Tidak kerja tetapi sedang mencari kerja",
    label: "Tidak kerja tetapi sedang mencari kerja",
  },
];
const dapatKerja = [
  {
    value: "Ya",
    label: "Ya",
  },
  {
    value: "Tidak",
    label: "Tidak",
  },
];
const instansi = [
  { value: "Intansi pemerintah", label: "Intansi pemerintah", id: 1 },
  { value: "BUMN/BUMD", label: "BUMN/BUMD", id: 6 },
  {
    value: "Institusi/Organisasi/Multilateral",
    label: "Institusi/Organisasi Multilateral",
    id: 7,
  },
  {
    value: "Organisasi non profit Lembaga Swadaya Masyarakat",
    label: "Organisasi non-profit/Lembaga Swadaya Masyarakat",
    id: 2,
  },
  { value: "Perusahaan swasta", label: "Perusahaan swasta", id: 3 },
  {
    value: "Wiraswasta/perusahaan sendiri",
    label: "Wiraswasta/perusahaan sendiri",
    id: 4,
  },
  { value: "Lainnya", label: "Lainnya", id: 5 },
];
const posisi = [
  { value: "Founder", label: "Founder" },
  { value: "Co-Founder", label: "Co-Founder" },
  { value: "Staff", label: "Staff" },
  { value: "Freelance/Kerja Lepas", label: "Freelance/Kerja Lepas" },
];
const skalaUsaha = [
  {
    value: "Lokal/Wilayah/Wiraswasta tidak berbadan hukum",
    label: "Lokal/Wilayah/Wiraswasta tidak berbadan hukum",
  },
  {
    value: "Nasional/Wiraswasta berbadan hukum",
    label: "Nasional/Wiraswasta berbadan hukum",
  },
  {
    value: "Multinasional/Internasional",
    label: "Multinasional/Internasional",
  },
];
const studiLanjutBiaya = [
  { value: "Biaya sendiri", label: "Biaya Sendiri" },
  { value: "Beasiswa", label: "Beasiswa" },
];
const sumberPembiayaan = [
  { value: "Biaya Sendiri/Keluarga", label: "Biaya Sendiri/Keluarga" },
  { value: "Beasiswa ADIK", label: "Beasiswa ADIK" },
  { value: "Beasiswa BIDIKMISI", label: "Beasiswa BIDIKMISI" },
  { value: "Beasiswa PPA", label: "Beasiswa PPA" },
  { value: "Beasiswa AFIRMASI", label: "Beasiswa AFIRMASI" },
  { value: "Beasiswa Perusahaan/Swasta", label: "Beasiswa Perusahaan/Swasta" },
  { value: "Lainnya", label: "Lainnya" },
];
const tingkatKeterkaitan = [
  { value: "Sangat Erat", label: "Sangat Erat" },
  { value: "Erat", label: "Erat" },
  { value: "Cukup Erat", label: "Cukup Erat" },
  { value: "Kurang Erat", label: "Kurang Erat" },
  { value: "Tidak Sama Sekali", label: "Tidak Sama Sekali" },
];
const yangDikuasai = [
  { name: "etika", label: "Etika" },
  {
    name: "keahlian_berdasarkan_bidang_ilmu",
    label: "Keahlian berdasarkan bidang ilmu",
  },
  { name: "bahasa_inggris", label: "Bahasa Inggris" },
  { name: "penggunaan_ti", label: "Penggunaan Teknologi Informasi" },
  { name: "komunikasi", label: "Komunikasi" },
  { name: "kerja_tim", label: "Kerja sama tim" },
  { name: "pengembangan", label: "Pengembangan" },
];
const yangDibutuhkan = [
  { name: "etika_dibutuhkan", label: "Etika" },
  {
    name: "keahlian_berdasarkan_bidang_ilmu_dibutuhkan",
    label: "Keahlian berdasarkan bidang ilmu",
  },
  { name: "bahasa_inggris_dibutuhkan", label: "Bahasa Inggris" },
  { name: "penggunaan_ti_dibutuhkan", label: "Penggunaan Teknologi Informasi" },
  { name: "komunikasi_dibutuhkan", label: "Komunikasi" },
  { name: "kerja_tim_dibutuhkan", label: "Kerja sama tim" },
  { name: "pengembangan_dibutuhkan", label: "Pengembangan" },
];
const tingkatPendidikanTepat = [
  {
    value: "Setingkat Lebih Tinggi",
    label: "Setingkat Lebih Tinggi",
  },
  { value: "Tingkat yang Sama", label: "Tingkat yang Sama" },
  { value: "Setingkat Lebih Rendah", label: "Tidak Perlu Pendidikan Tinggi" },
];
const PenekananMetode = [
  {
    value: "Sangat Besar",
    label: "Sangat Besar",
  },
  {
    value: "Besar",
    label: "Besar",
  },
  {
    value: "Cukup Besar",
    label: "Cukup Besar",
  },
  {
    value: "Kurang Besar",
    label: "Kurang Besar",
  },
  {
    value: "Tidak Sama Sekali",
    label: "Tidak Sama Sekali",
  },
];
const Demonrtasi = [
  {
    value: "Sangat Besar",
    label: "Sangat Besar",
  },
  {
    value: "Besar",
    label: "Besar",
  },
  {
    value: "Cukup Besar",
    label: "Cukup Besar",
  },
  {
    value: "Kurang Besar",
    label: "Kurang Besar",
  },
  {
    value: "Tidak Sama Sekali",
    label: "Tidak Sama Sekali",
  },
];
const CaraMencariKerja = [
  {
    value: "Melalui iklan di koran/majalah, brosur (f401)",
    label: "Melalui iklan di koran/majalah, brosur (f401)",
  },
  {
    value: "Melamar ke perusahaan tanpa mengetahui lowongan yang ada (f402)",
    label: "Melamar ke perusahaan tanpa mengetahui lowongan yang ada (f402)",
  },
  {
    value: "Pergikebursa/pamerankerja (f403)",
    label: "Pergikebursa/pamerankerja (f403)",
  },
  {
    value: "Mencarilewatinternet/iklanonline/milis (f404)",
    label: "Mencarilewatinternet/iklanonline/milis (f404)",
  },
  {
    value: "Dihubungi oleh perusahaan (f405)",
    label: "Dihubungi oleh perusahaan (f405)",
  },
  {
    value: "Menghubungi Kemenakertrans (f406)",
    label: "Menghubungi Kemenakertrans (f406)",
  },
  {
    value: "Menghubungi agen tenaga kerja komersial/swasta (f407)",
    label: "Menghubungi agen tenaga kerja komersial/swasta (f407)",
  },
  {
    value:
      "Memeroleh informasi dari pusat/kantor pengembangan karir fakultas/universitas (f408)",
    label:
      "Memeroleh informasi dari pusat/kantor pengembangan karir fakultas/universitas (f408)",
  },
  {
    value: "Menghubungikantorkemahasiswaan/hubunganalumni (f409)",
    label: "Menghubungikantorkemahasiswaan/hubunganalumni (f409)",
  },
  {
    value: "Membangunjejaring(network)sejakmasihkuliah (f410)",
    label: "Membangunjejaring(network)sejakmasihkuliah (f410)",
  },
  {
    value:
      "Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.) (f411)",
    label:
      "Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.) (f411)",
  },
  {
    value: "Membangun bisnis sendiri (f412)",
    label: "Membangun bisnis sendiri (f412)",
  },
  {
    value: "Melalui penempatan kerja atau magang (f413)",
    label: "Melalui penempatan kerja atau magang (f413)",
  },
  {
    value:
      "Bekerja di tempat yang sama dengan tempat kerja semasa kuliah (f414)",
    label:
      "Bekerja di tempat yang sama dengan tempat kerja semasa kuliah (f414)",
  },
  {
    value: "Lainnya (f415)",
    label: "Lainnya (f415)",
  },
];
const AktifMencariKerja = [
  { value: "Tidak", label: "Tidak" },
  {
    value: "Tidak, tapi saya sedang menunggu hasil lamaran kerja",
    label: "Tidak, tapi saya sedang menunggu hasil lamaran kerja",
  },
  {
    value: "Ya, saya akan mulai bekerja dalam 2 minggu ke depan",
    label: "Ya, saya akan mulai bekerja dalam 2 minggu ke depan",
  },
  {
    value: "Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan",
    label: "Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan",
  },
  { value: "Lainnya", label: "Lainnya" },
];
const sesuaiKerja = [
  {
    value:
      "Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya.",
    label:
      "Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya.",
  },
  {
    value: "Saya belum mendapatkan pekerjaan yang lebih sesuai.",
    label: "Saya belum mendapatkan pekerjaan yang lebih sesuai.",
  },
  {
    value: "Di pekerjaan ini saya memeroleh prospek karir yang baik.",
    label: "Di pekerjaan ini saya memeroleh prospek karir yang baik.",
  },
  {
    value:
      "Saya lebih suka bekerja di area pekerjaan yang tidak ada hubungannya dengan pendidikan saya.",
    label:
      "Saya lebih suka bekerja di area pekerjaan yang tidak ada hubungannya dengan pendidikan saya.",
  },
  {
    value:
      "Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya.",
    label:
      "Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya.",
  },
  {
    value:
      "Saya dapat memeroleh pendapatan yang lebih tinggi di pekerjaan ini.",
    label:
      "Saya dapat memeroleh pendapatan yang lebih tinggi di pekerjaan ini.",
  },
  {
    value: "Pekerjaan saya saat ini lebih aman/terjamin/secure",
    label: "Pekerjaan saya saat ini lebih aman/terjamin/secure",
  },
  {
    value: "Pekerjaan saya saat ini lebih menarik",
    label: "Pekerjaan saya saat ini lebih menarik",
  },
  {
    value:
      "Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibel, dll.",
    label:
      "Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibel, dll.",
  },
  {
    value: "Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya.",
    label: "Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya.",
  },
  {
    value:
      "Pekerjaan saya saat ini dapat lebih menjamin kebutuhan keluarga saya.",
    label:
      "Pekerjaan saya saat ini dapat lebih menjamin kebutuhan keluarga saya.",
  },
  {
    value:
      "Pada awal meniti karir ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya",
    label:
      "Pada awal meniti karir ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya",
  },
  { value: "Lainnya", label: "Lainnya" },
];

export function DefaultStepper() {
  const route = useRouter();
  const [name, setName] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const [formData, setFormData] = useState({
    nim: "",
    thn_lulus: "",
    kode_pt: "",
    kode_prodi: "",
    nama_lengkap: "",
    no_hp: "",
    email: "",
    nik: "",
    npwp: "",
    status_anda: "",
    mendapat_pekerjaan: "",
    berapa_bulan_mendapat_kerja: "",
    rata_rata_pendapatan: "",
    provinsi: "",
    kota_kab: "",
    jenis_perusahaan: "",
    nama_perusahaan: "",
    jabatan_wiraswasta: "",
    tingkat_perusahaan: "",
    sumber_biaya: "",
    perguruan_tinggi: "",
    prodi: "",
    tgl_masuk: "",
    sumber_biaya_kuliah: "",
    linearitas_studi: "",
    tingkat_pendidikan: "",
    etika: "",
    keahlian_berdasarkan_bidang_ilmu: "",
    bahasa_inggris: "",
    penggunaan_ti: "",
    komunikasi: "",
    kerja_tim: "",
    pengembangan: "",
    etika_dibutuhkan: "",
    keahlian_berdasarkan_bidang_ilmu_dibutuhkan: "",
    bahasa_inggris_dibutuhkan: "",
    penggunaan_ti_dibutuhkan: "",
    komunikasi_dibutuhkan: "",
    kerja_tim_dibutuhkan: "",
    pengembangan_dibutuhkan: "",
    penekanan_metode_pembelajaran: "",
    demonstrasi: "",
    partisipasi_riset: "",
    magang: "",
    praktikum: "",
    kerja_lapangan: "",
    diskusi: "",
    kapang_mulai_mencari_kerja: "",
    kapan_mulai_mencari_pekerjaan: [],
    berapakali_melamar_kerja: "",
    banyak_response_perusahaan: "",
    wawancara_perusahaan: "",
    mencari_pekerjaan_dalam_4_minggu_terakhir: "",
    mengapa_mengambil_pekerjaan: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultipleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checked ? value : "", // Jika dicentang, simpan nilainya; jika tidak, kosongkan
    }));
  };
  useEffect(() => {
    handleScrollToTop();
  }, [activeStep, isLastStep, isFirstStep]);

  const handleNext = () => {
    !isLastStep && setActiveStep((cur) => cur + 1);
    // handleScrollToTop();
  };
  const handlePrev = () => {
    // handleScrollToTop();
    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animasi scroll yang halus
    });
  };

  console.log("formData", formData);
  const stepContents = [
    <div key={0} className=" rounded-md w-full  border shadow-sm pb-6">
      <form className=" flex flex-col w-full gap-4 p-4 justify-center ">
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Nama Lengkap
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input
            label="Name"
            name="nama_lengkap"
            value={formData.nama_lengkap}
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            NIM/NPM
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input
            label="nim"
            value={formData.nim}
            name="nim"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Tahun Lulus
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input
            type="date"
            label="date"
            name="thn_lulus"
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Kode PT
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={kodePT}
            value={kodePT.find((option) => option.value === formData.kode_pt)}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "kode_pt",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Kode Prodi
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            name="kode_prodi"
            value={kodeProdi.find(
              (option) => option.value === formData.kode_prodi
            )}
            onChange={(selectedOption) =>
              handleChange({
                target: { name: "kode_prodi", value: selectedOption.value },
              })
            }
            options={kodeProdi}
          />
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Nomor Telepon/HP
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input label="hp" name="no_hp" onChange={handleChange} />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Alamat Email
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            NIK
            <span className="text-red-500 ">*</span>
          </Typography>

          <Input label="Nik" name="nik" onChange={handleChange} />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            NPWP
          </Typography>

          <Input label="Npwp" name="npwp" onChange={handleChange} />
        </div>
      </form>
    </div>,
    <div key={1} className="p-4 rounded-md border shadow-md">
      <form className=" flex flex-col w-full gap-4">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              1. Jelaskan status Anda saat ini? * (f8) *
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={pekerjaan}
              name="status_anda"
              value={pekerjaan.find(
                (option) => option.value === formData.status_anda
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: { name: "status_anda", value: selectedOption.value },
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              {`2. Apakah Anda telah mendapatkan pekerjaan <= 6 bulan / termasuk bekerja sebelum lulus? (f504)`}
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={dapatKerja}
              name="mendapat_pekerjaan"
              value={dapatKerja.find(
                (option) => option.value === formData.mendapat_pekerjaan
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "mendapat_pekerjaan",
                    value: selectedOption.value,
                  },
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Jika Ya Jawab pertanyaan berikut.... Dalam berapa bulan Anda
              mendapatkan pekerjaan? (f502)
            </Typography>

            <Input
              value={formData.berapa_bulan_mendapat_kerja}
              label="Isi jika ya"
              name="berapa_bulan_mendapat_kerja"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Berapa rata-rata pendapatan Anda per bulan? (take home pay)?
              (f505)
            </Typography>

            <Input
              value={formData.rata_rata_pendapatan}
              label="Rata-rata pendapatan"
              name="rata_rata_pendapatan"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              3. Dimana lokasi tempat Anda bekerja ? *Provinsi ? (f5a1)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Input
              value={formData.provinsi}
              label="Provisi kerja"
              name="provinsi"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Kota/Kabupaten ? (f5a2)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Input
              value={formData.kota_kab}
              label="Kota kerja"
              name="kota_kab"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              4. Apa jenis perusahaan/intansi/institusi tempat anda bekerja
              sekarang? (f1101)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              name="jenis_perusahaan"
              options={instansi}
              value={instansi.find(
                (option) => option.value === formData.instansi
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "jenis_perusahaan",
                    value: selectedOption.value,
                  },
                })
              }
              menuPlacement="top"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              5. Apa nama perusahaan/kantor tempat Anda bekerja? (f5b)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Input
              value={formData.nama_perusahaan}
              label="Nama perusahaan"
              name="nama_perusahaan"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              6. Bila berwiraswasta, apa posisi/jabatan Anda saat ini? (Apabila
              1 Menjawab [3] wiraswasta) (f5c)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={posisi}
              name="jabatan_wiraswasta"
              value={posisi.find(
                (option) => option.value === formData.jabatan_wiraswasta
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "jabatan_wiraswasta",
                    value: selectedOption.value,
                  },
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              7. Apa tingkat tempat kerja Anda? (f5d)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={skalaUsaha}
              name="tingkat_perusahaan"
              value={skalaUsaha.find(
                (option) => option.value === formData.tingkat_perusahaan
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "tingkat_perusahaan",
                    value: selectedOption.value,
                  },
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              8. Pertanyaan studi lanjut Sumber biaya ? (f18a)
            </Typography>

            <Select
              options={studiLanjutBiaya}
              name="sumber_biaya"
              value={studiLanjutBiaya.find(
                (option) => option.value === formData.sumber_biaya
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: { name: "sumber_biaya", value: selectedOption.value },
                })
              }
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Perguruan Tinggi (f18b)
            </Typography>

            <Input
              value={formData.perguruan_tinggi}
              label="Perguruan Tinggi"
              name="perguruan_tinggi"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Program Studi (f18c)
            </Typography>

            <Input
              value={formData.prodi}
              label="Program Studi"
              name="prodi"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Tanggal Masuk (f18d)
            </Typography>

            <Input
              value={formData.tgl_masuk}
              type="date"
              label="Tanggal Masuk"
              name="tgl_masuk"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              9. Sebutkan sumberdana dalam pembiayaan kuliah? * (bukan ketika
              Studi Lanjut) (f1201)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={sumberPembiayaan}
              name="sumber_biaya_kuliah"
              value={sumberPembiayaan.find(
                (option) => option.value === formData.sumber_biaya_kuliah
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "sumber_biaya_kuliah",
                    value: selectedOption.value,
                  },
                })
              }
              menuPlacement="top"
            />
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              10. Seberapa erat hubungan bidang studi dengan pekerjaan Anda? *
              (f14)
              <span className="text-red-500 ">*</span>
            </Typography>

            <Select
              options={tingkatKeterkaitan}
              name="linearitas_studi"
              value={tingkatKeterkaitan.find(
                (option) => option.value === formData.linearitas_studi
              )}
              onChange={(selectedOption) =>
                handleChange({
                  target: {
                    name: "linearitas_studi",
                    value: selectedOption.value,
                  },
                })
              }
              menuPlacement="top"
            />
          </div>
        </div>
      </form>
    </div>,
    <div
      key={2}
      className="p-4  rounded-md border shadow-md  flex flex-col items-center"
    >
      <form className=" flex flex-col gap-4">
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            11. Tingkat pendidikan apa yang paling tepat/sesuai untuk pekerjaan
            anda saat ini? * (f15)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={tingkatPendidikanTepat}
            name="tingkat_pendidikan"
            value={tingkatPendidikanTepat.find(
              (option) => option.value === formData.tingkat_pendidikan
            )}
            onChange={(selectedOption) =>
              handleChange({
                target: {
                  name: "tingkat_pendidikan",
                  value: selectedOption.value,
                },
              })
            }
          />
        </div>
        <div className=" w-full bg-white ">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            12. Pada saat LULUS, pada tingkat mana kompetensi di bawah ini anda
            : KUASAI ? (A)
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white  sm:flex">
            <li className="w-full border border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <label
                  for="vue-checkbox-list"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  A
                </label>
              </div>
            </li>

            <div className="w-full border-b border sm:border-b-0  dark:border-gray-600 flex">
              <div className="flex justify-between  w-full items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <label
                    for="vue-checkbox-list"
                    className="w-full py-3 text-center  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {index + 1}
                  </label>
                ))}
              </div>
            </div>
          </ul>

          {yangDikuasai.map((item) => (
            <ul
              key={item.name}
              className="flex flex-col sm:flex-row w-full border text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li className="w-full border-b sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item.label}
                  </label>
                </div>
              </li>

              <div className="w-full flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="flex w-full justify-center items-center"
                  >
                    <input
                      type="checkbox"
                      name={item.name} // Menggunakan nama dari data
                      value={String(index + 1)}
                      checked={formData[item.name] === String(index + 1)}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                ))}
              </div>
            </ul>
          ))}
        </div>
        <div className=" w-full bg-white ">
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Pada saat ini, pada tingkat mana kompetensi di bawah ini diperlukan
            dalam PEKERJAAN? (B)
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border  sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <label
                  for="vue-checkbox-list"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  A
                </label>
              </div>
            </li>

            <div className="w-full border-b  sm:border-b-0  dark:border-gray-600 flex gap-2">
              <div className="flex justify-between  w-full items-center px-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <label
                    for="vue-checkbox-list"
                    className="w-full py-3 text-center  text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {index + 1}
                  </label>
                ))}
                <div></div>
              </div>
            </div>
          </ul>
          {yangDibutuhkan.map((item) => (
            <ul
              key={item.name}
              className="flex flex-col sm:flex-row w-full border text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <li className="w-full border-b sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item.label}
                  </label>
                </div>
              </li>

              <div className="w-full flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="flex w-full justify-center items-center"
                  >
                    <input
                      type="checkbox"
                      name={item.name} // Menggunakan nama dari data
                      value={String(index + 1)}
                      checked={formData[item.name] === String(index + 1)}
                      onChange={handleCheckboxChange}
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                ))}
              </div>
            </ul>
          ))}
        </div>

        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            13. Menurut anda seberapa besar penekanan pada metode pembelajaran
            dibawah ini dilaksanakan di program studi anda ? : Perkuliahan (f21)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={PenekananMetode}
            value={PenekananMetode.find(
              (option) =>
                option.value === formData.penekanan_metode_pembelajaran
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "penekanan_metode_pembelajaran",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Demonstrasi (f22)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.demonstrasi
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "demonstrasi",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Partisipasi dalam proyek riset (f23)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.partisipasi_riset
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "partisipasi_riset",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Magang (f24)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.magang
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "magang",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Praktikum (f25)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.praktikum
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "praktikum",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Kerja Lapangan (f26)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.kerja_lapangan
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "kerja_lapangan",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Diskusi (f27)
            <span className="text-red-500 ">*</span>
          </Typography>

          <Select
            options={Demonrtasi}
            value={Demonrtasi.find(
              (option) => option.value === formData.diskusi
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "diskusi",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
      </form>
    </div>,
    <div key={3} className="p-4 border relative shadow-md rounded-md">
      <form className=" flex flex-col gap-4">
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Kapan anda mulai mencari pekerjaan? Mohon pekerjaan sambilan tidak
            dimasukkan. Apakah sebelum lulus, sesudah lulus ?, berapa bulan ?
            atau saya tidak mencari kerja
            <span className="text-red-500 ">*</span>
          </Typography>

          <Textarea
            value={formData.kapang_mulai_mencari_kerja}
            name="kapang_mulai_mencari_kerja"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 ">
          <div className="flex flex-col gap-2 w-full xl:flex-row">
            <div className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                15. Bagaimana anda mencari pekerjaan tersebut? Jawaban bisa
                lebih dari satu
                <span className="text-red-500 ">*</span>
              </Typography>

              <div className="flex flex-col gap-2 w-full">
                {CaraMencariKerja.map((item) => (
                  <div className="flex  w-full justify-start gap-2  ">
                    <Checkbox
                      id="vue-checkbox-list"
                      type="checkbox"
                      value={item.value}
                      name="kapan_mulai_mencari_pekerjaan"
                      onChange={(e) => handleMultipleCheckboxChange(e)}
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            16. Berapa perusahaan/instansi/institusi yang sudah anda lamar
            (lewat surat atau e-mail) sebelum anda memeroleh pekerjaan pertama?
            (f6)
            <span className="text-red-500 ">*</span>
          </Typography>
          <Input
            label=""
            name="berapakali_melamar_kerja"
            value={formData.berapakali_melamar_kerja}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            17. Berapa banyak perusahaan/instansi/institusi yang merespons
            lamaran anda? (f7)
            <span className="text-red-500 ">*</span>
          </Typography>
          <Input
            label=""
            name="banyak_response_perusahaan"
            value={formData.banyak_response_perusahaan}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            18. Berapa banyak perusahaan/instansi/institusi yang mengundang anda
            untuk wawancara? (f7a)
            <span className="text-red-500 ">*</span>
          </Typography>
          <Input
            label="wawancara"
            name="wawancara_perusahaan"
            value={formData.wawancara_perusahaan}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            19. Apakah anda aktif mencari pekerjaan dalam 4 minggu terakhir?
            Pilihlah satu jawaban (f1001)
            <span className="text-red-500 ">*</span>
          </Typography>
          <Select
            options={AktifMencariKerja}
            value={AktifMencariKerja.find(
              (item) =>
                item.value ===
                formData.mencari_pekerjaan_dalam_4_minggu_terakhir
            )}
            onChange={(selectedOption) => {
              handleChange({
                target: {
                  name: "mencari_pekerjaan_dalam_4_minggu_terakhir",
                  value: selectedOption.value,
                },
              });
            }}
          />
        </div>
        <div className="w-full">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            20. Jika menurut anda pekerjaan anda saat ini tidak sesuai dengan :
            pendidikan anda, mengapa anda mengambilnya? Jawaban bisa lebih dari
            satu
            <span className="text-red-500 ">*</span>
          </Typography>

          <div className="flex flex-col gap-2 w-full">
            {sesuaiKerja.map((item) => (
              <div className="flex  w-full justify-start gap-2  ">
                <Checkbox
                  id="vue-checkbox-list"
                  type="checkbox"
                  value={item.value}
                  name="mengapa_mengambil_pekerjaan"
                  onChange={(e) => handleMultipleCheckboxChange(e)}
                />
                <label>{item.label}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>,
  ];

  const handleUpload = async () => {
    // const isEmpty = Object.values(formData).some(
    //   (value) => value === "" || (Array.isArray(value) && value.length === 0)
    // );

    // if (isEmpty) {
    //   toast.error("Semua field harus diisi!", { position: "top-right" });
    //   return;
    // }
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL+"/api/addTracer",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      toast.success("Data berhasil diupload");
      route.push("/finished");
    } catch (error) {
      console.error(
        "Error uploading file:",
        error.response ? error.response.data : error.message
      );
      toast.error("Gagal mengupload data");
    } finally {
      setIsLastStep(true);
    }
  };

  return (
    <div className="w-full py-4 px-8 md:w-1/2">
      <ToastContainer />
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
        <Step onClick={() => setActiveStep(2)}>4</Step>
      </Stepper>

      <div className="mt-8">{stepContents[activeStep]}</div>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        {isLastStep ? (
          <Button onClick={handleUpload}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
}
