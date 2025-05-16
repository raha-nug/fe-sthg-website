import { useEffect, useState } from "react";
import axios from "axios";
const AllBerita = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sthg.labtekcmr.com/api/cms/getBerita"
        );
        setBerita(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(berita);
  return (
    <>
      <section className="bg-white text-black pt-32">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kickstart your marketing
            </h2>

            <p className="mt-4 text-black-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {berita.map((berita, key) => (
              <a
                key={key}
                className="block rounded-xl border shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href={`/berita-detail/${berita.slug}`}
              >
                <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
                  <img
                    alt=""
                    src={berita.foto}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-4 sm:p-6">
                    <a href="#">
                      <h3 className="text-lg font-medium text-gray-900">
                        {berita.judul}
                      </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque corporis alias quam, ducimus porro totam amet modi,
                      culpa vitae quidem reiciendis, obcaecati unde sint
                      assumenda iste nam praesentium vero debitis aut eaque
                      dolores dolorem fugiat! Rem accusantium, est quis pariatur
                      quo autem nesciunt incidunt, praesentium commodi quidem,
                      minus aliquam. Ducimus iusto esse consequatur rem
                      praesentium possimus similique totam! Doloribus quo
                      laborum sint, deleniti pariatur perspiciatis ab rem
                      delectus, iure sunt nesciunt enim blanditiis, maxime
                      voluptatem aperiam necessitatibus sit voluptas. Maxime
                      autem qui commodi? Debitis fugiat delectus, molestias
                      praesentium iusto ratione unde impedit ex laboriosam sit
                      sequi fugit odio natus? Officiis!
                    </p>

                    <a
                      href="#"
                      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                    >
                      Find out more
                      <span
                        aria-hidden="true"
                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                      >
                        &rarr;
                      </span>
                    </a>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBerita;
