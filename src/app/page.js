import BeritaSTHG from "@/components/landingPage/Berita/Berita";
import FloatingButtons from "@/components/landingPage/floatBtn";
import { KegiatanSTHG } from "@/components/landingPage/kegiatan";
import MengapaSTHG from "@/components/landingPage/kenapaSTHG";
import Kerjasama from "@/components/landingPage/kerjasama";
import Medsos from "@/components/landingPage/medsos";
import { Pengmuman } from "@/components/landingPage/pengumuman";
import Sambutan from "@/components/landingPage/Sambutan";
import { CaroselStaf } from "@/components/landingPage/stafPenting";
// Import the new component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <video autoPlay loop muted className="w-full">
          <source src="/vidio/vidio.mp4" />
        </video>
      </div>
      <Sambutan />
      <CaroselStaf />
      <Pengmuman />
      <MengapaSTHG />
      <BeritaSTHG />
      <KegiatanSTHG />
      <Kerjasama />
      <Medsos />
      <FloatingButtons />
    </main>
  );
}
