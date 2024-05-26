import { AboutUs } from "./AboutUs";
import { Articles } from "./Articles";
import { MainVideo } from "./MainVideo";
import { Slider } from "./Slider";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <Articles />
        <AboutUs />
        <Slider />
      </div>
    </>
  );
};

export { HomePageLayout };
