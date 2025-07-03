"use client";

import { useEffect, useRef } from "react";
import BeritaSTHG from "@/components/landingPage/Berita/Berita";
import FloatingButtons from "@/components/landingPage/floatBtn";
import { KegiatanSTHG } from "@/components/landingPage/kegiatan";
import MengapaSTHG from "@/components/landingPage/kenapaSTHG";
import Kerjasama from "@/components/landingPage/kerjasama";
import Medsos from "@/components/landingPage/medsos";
import { Pengmuman } from "@/components/landingPage/pengumuman";
import Sambutan from "@/components/landingPage/Sambutan";
import { CaroselStaf } from "@/components/landingPage/stafPenting";

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.muted = false; // Aktifkan suara saat terlihat
          video.play().catch(() => {});
        } else {
          video.pause(); // Pause video
          video.muted = true; // Mute suara
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="w-full">
        <video ref={videoRef} autoPlay loop playsInline className="w-full">
          <source src="/vidio/profile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
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
