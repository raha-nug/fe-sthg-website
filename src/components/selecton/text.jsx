const SkeletonTekst = () => {
  return (
    <div
      role="status"
      className="w-full animate-pulse flex justify-between items-center"
    >
      <div className="border w-1/2">
        <div className="h-2.5 bg-white rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-white rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      </div>
      <div className="border w-1/2 flex items-center justify-center">
        <svg
          className="w-1/2 text-whbg-white dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SkeletonTekst;
