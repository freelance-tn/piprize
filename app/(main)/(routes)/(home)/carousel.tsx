"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Navigation } from "swiper/modules";
import UserCard from "./card";

export const Carousel = () => {
  const data = [
    {
      img: "./p1.png",
      text: "As a financial advisor, I have seen numerous digital currency projects come and go. Pi Network stands out with its strong community, innovative approach, and dedication to creating a sustainable ecosystem. I confidently recommend Pi Network to my clients as a trusted platform for their digital currency endeavors",
      name: "Jhon",
      job: "Financial Advisor",
    },
    {
      img: "./p2.png",
      text: "Pi Network has transformed the way I think about digital payments. Being part of a trusted community of professionals gives me peace of mind while transacting securely and conveniently. Pi Network's focus on inclusive innovation has created a platform that meets the needs of professionals like me who seek reliable and user-centric digital currency solution",
      name: "David",
      job: "Tech Entrepreneur",
    },
    {
      img: "./p3.png",
      text: "Pi Network has been a game-changer for me as a professional in the digital currency space. The platform's commitment to security, transparency, and inclusivity is unmatched. I trust Pi Network to safeguard my assets while providing a seamless and user-friendly experience",
      name: "Jack",
      job: "Blockchain Developer",
    },
  ];
  return (
    <div className="h-screen p-2 md:p-8 bg-gradient-to-br from-[#125D62] to-[#bg-gradient-to-r from-[#0F575A] to-[#041622] flex items-center justify-center">
 
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
        {data.map((item) => (
          <SwiperSlide  key={item.name}>
            <UserCard
              img={item.img}
              text={item.text}
              name={item.name}
              job={item.job}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
