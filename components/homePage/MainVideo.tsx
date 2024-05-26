const MainVideo = () => {
  return (
    <div className="w-full  mb-[40px]">
      <div>
        {" "}
        <video
          src={require("../../public/assets/video/girlPlant.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[200px] left-[5%] flex flex-col">
        <h1 className="text-[15px] tracking-widest text-[#ffffff] md:text-[20px] lg:text-[28px]">
          "To plant a garden is to believe in tomorrow."{" "}
        </h1>
        <span className="text-[16px] text-[#ffffff] md:text-[22px] lg:text-[30px]">
          — Audrey Hepburn
        </span>
      </div>
    </div>
  );
};

export { MainVideo };
