"use client";
// eslint-disable-next-line react/prop-types
import "animate.css";
// eslint-disable-next-line react/prop-types
const Jumbotron = ({ judul }) => {
  // [url(https://th.bing.com/th/id/OIP.4SbBivsVsWAUoF8wl2ij_QHaEK?rs=1&pid=ImgDetMain)]
  return (
    <section className="relative mt-[65px] md:mt-[80px] lg:mt-[120px] bg-[url(/gambar/hukum-bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto w-full px-4 py-32 sm:px-6 flex lg:h-1/2 items-center md:px-16">
        <div className="">
          <h1 className="text-xl animate__animated animate__fadeInLeft md:text-3xl font-bold text-white sm:text-3xl border-l-4 border-red-700 bg-yellow-400 p-2 px-4">
            {judul}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
