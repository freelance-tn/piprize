"use client";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  paragraph: string;
  icon: LucideIcon;
}

const CardTwo = ({ icon: Icon, title, paragraph }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center space-y-2 mx-2 ">
      <Icon size={42} className="mr-1 bg-gradient-to-tr from-[#239BFF] to-[#BC9836]  text-white p-2 rounded-3xl" />
      <div className=" text-base md:text-xl">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default CardTwo;
