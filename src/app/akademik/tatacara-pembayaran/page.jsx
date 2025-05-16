const TatacaraPembayaran = () => {
  return (
    <>
      <section className="relative mt-[65px] md:mt-[80px] lg:mt-[120px] bg-[url(/gambar/hukum-bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex lg:h-1/2 items-center md:px-8">
          <div className="w-full flex justify-center gap-4 ltr:sm:text-left rtl:sm:text-right">
            <img src="/gambar/newLogo.png" alt="" className="h-32" />
            <img src="/gambar/bjb.jpg" alt="" className="h-32 rounded-full" />
          </div>
        </div>
      </section>
      <section className="bg-white text-black">
        <div className="w-full px-4 py-8 sm:px-6 sm:py-12 md:px-16 lg:py-16">
          <div className="w-full  pb-4">
            <header className="border-b border-gray-200 bg-gray-50 rounded-md">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      Tatacara Pembayaran
                    </h1>

                    <p className="mt-1.5 text-sm text-gray-500">
                      Tatacara pembayaran herregestrasi Mahasiswa baru STHG
                      Galunggung Tasikmalaya di bank BJB syariah
                    </p>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <img
            src="/gambar/Tata_Cara_Pembayaran_copy.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default TatacaraPembayaran;
