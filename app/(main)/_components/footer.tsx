
import { Social } from "./social";

export const Footer = () => {
  return (
    <div className=" p-10 flex  flex-col md:flex-row items-center justify-around bg-[#040E1A]">
      <Social />
      <p className="text-white ">
        Copyright © 2023 PiNetWork. All Rights Reserved.
      </p>
    </div>
  );
};
