"use client";

import sliderimg from "../../public/assets/image/sliderImg/img1.jpg";
import sliderimg2 from "../../public/assets/image/sliderImg/img2.jpg";
import sliderimg3 from "../../public/assets/image/sliderImg/img3.jpg";
import sliderimg4 from "../../public/assets/image/sliderImg/img4.jpg";
import sliderimg5 from "../../public/assets/image/sliderImg/img5.jpg";
import sliderimg6 from "../../public/assets/image/sliderImg/img6.jpg";
import sliderimg7 from "../../public/assets/image/sliderImg/img7.jpg";
import sliderimg8 from "../../public/assets/image/sliderImg/img8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaInstagram } from "react-icons/fa";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const slider = [
  {
    id: 1,
    img: sliderimg,
  },
  {
    id: 2,
    img: sliderimg2,
  },
  {
    id: 3,
    img: sliderimg3,
  },
  {
    id: 4,
    img: sliderimg4,
  },
  {
    id: 5,
    img: sliderimg5,
  },
  {
    id: 6,
    img: sliderimg6,
  },
  {
    id: 7,
    img: sliderimg7,
  },
  {
    id: 8,
    img: sliderimg8,
  },
];
const Slider = () => {
  return (
    <div className="w-full bg-[#e0e6e1] pt-[70px] dark:bg-[#264653]">
      <h3 className="text-center mt-[30px] mb-[30px] text-[24px] text-[#434843] underline dark:text-[#ffffff]">
        Our Products
      </h3>
      <Swiper
        slidesPerView="auto"
        className=" flex items-center justify-between overflow-hidden realtive"
      >
        {slider.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" slide flex items-center justify-evenly overflow-hidden max-w-[240px] w-full mr-[5px] cursor-pointer"
          >
            <Image width={250} height={250} src={item.img} alt="footer-img" />
            <div className="cover flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full cursor-pointer">
              <FaInstagram className="insta" />
              <Link className="text-[#3a3335] text-[18px] mt-[5px]" href="#">
                @ ashion_shop
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Slider };
