import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
         {/* text */}
         <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developer and Data Analyst</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-amber-700">Moiz Ali Siddiqui</span>
          </h1>
          <p className="mx-w-[500px] mb-9 text-white/80">
          Intermediate data analyst with strong web development skills, adept at leveraging data insights to drive decision-making and enhancing digital experiences through web solutions.          </p>
          {/* btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
          
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-amber-700 rounded-full flex justify-center items-center text=amber-700 text-base hover:bg-amber-700 hover:text-primary hover:transition-all duration-500"
              />
              </div>
          </div>
         </div>
         {/* photo */}
         <div className="">
          <Photo />
         </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;





// containerStyles="flex gap-6"
// iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"