import { Converter } from "@/app/(main)/_components/converter";
import { ConverterImg } from "@/app/(main)/_components/converter-image";

import Timer1 from "./_component/countdown-time";

const LandingPage = () => {
  return (
    <section
      className="min-h-screen flex justify-around flex-col md:items-center md:flex-row space-y-8 p-4 bg-cover bg-center relative"
      style={{ backgroundImage: 'url("hero.jpg")'   }}
    >

      <div className="flex flex-col md:items-center md:gap-8 md:flex-row md:ml-6 mt-4 space-y-8 md:w-2/3">
        <div>
          <h1 className=" text-center text-5xl md:text-left md:text-7xl font-bold bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text relative z-10 animate-fade-up ">
            🚀 Pi Network Airdrop 🎁
          </h1>
          <h3 className="text-center text-lg font-semibold  md:text-left mt-6 text-white relative z-10 animate-fade-up">
            Experience the Revolution of Digital Currency: Participate in the
            Exclusive Limited-Time Pi Network Airdrop and Secure Your Share of
            the Future
          </h3>
          <Converter />
        </div>

        <div>
          <Timer1 />
          <ConverterImg />
        </div>
      </div>
      
    </section>
  );
};

export default LandingPage;
