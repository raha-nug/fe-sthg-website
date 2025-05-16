// eslint-disable-next-line react/prop-types
const JudulComponent = ({ title, color }) => {
  return (
    <div className="flex justify-center w-full items-center relative py-10 md:py-16 md:px-16 ">
      <h1
        className={`font-bold text-3xl md:text-3xl text-center text-[#01012e]`}
      >
        {title}
      </h1>
    </div>
  );
};

export default JudulComponent;
