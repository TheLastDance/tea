import Image from "next/image";
import image1 from "../../public/assets/image/home/img2.jpg";
import image2 from "../../public/assets/image/home/walking.jpg";
import image3 from "../../public/assets/image/home/img3.jpg";

export interface Article {
  id: number;
  image: any;
  text: string;
}

const articles = [
  {
    id: 1,
    image: image1,
    text: "How to use mindfullnessin your everyday life",
  },
  {
    id: 2,
    image: image2,
    text: "What are the best walking meditations",
  },
  {
    id: 3,
    image: image3,
    text: "How to go deep into the mind of hope",
  },
];

const Articles = () => {
  return (
    <div className="w-full bg-[#f4f6f3] flex flex-col items-center justify-center py-[40px] px-[30px] lg:justify-between dark:bg-[#264653]">
      <h3 className="text-[#5b5d59] text-[28px] underline underline-offset-2 tracking-widest mb-[40px] dark:text-[#ffffff]">
        Latest Articles
      </h3>
      <div className=" w-full flex flex-wrap items-center justify-center gap-4 p-4 lg:justify-between lg:w-4/5">
        {articles.map((item) => (
          <div
            key={item.id}
            className=" max-w-xs bg-white shadow-lg rounded-lg p-5 flex flex-col items-center justify-center space-y-4 overflow-hidden mb-[40px]"
          >
            <Image
              width={330}
              height={330}
              src={item.image.src}
              alt={`Article ${item.id}`}
              className=" hover mb-[30px] cursor-pointer"
            />
            <div className="h-[1px] w-[30px] bg-[#747775]"></div>
            <p className="text-[16px] italic text-[#747775] hover:text-[#454645] hover:scale-110 tracking-wider py-[20px] text-center cursor-pointer transition-all duration-200">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Articles };
