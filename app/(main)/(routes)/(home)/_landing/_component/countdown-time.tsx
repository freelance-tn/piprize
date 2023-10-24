"use client"
import { useState,useEffect  } from "react";
const Timer1 = () => {
    
    const initialTime = {
        days: 10,
        hours: 30,
        minutes: 53,
        seconds: 59,
      };
    
  const [countDownTime, setCountDownTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countDownTime.days === 0 && countDownTime.hours === 0 && countDownTime.minutes === 0 && countDownTime.seconds === 0) {
        clearInterval(intervalId); // Stop the countdown when it reaches 0
      } else {
        const updatedTime = { ...countDownTime };
        if (updatedTime.seconds > 0) {
          updatedTime.seconds--;
        } else {
          updatedTime.seconds = 59;
          if (updatedTime.minutes > 0) {
            updatedTime.minutes--;
          } else {
            updatedTime.minutes = 59;
            if (updatedTime.hours > 0) {
              updatedTime.hours--;
            } else {
              updatedTime.hours = 23;
              if (updatedTime.days > 0) {
                updatedTime.days--;
              }
            }
          }
        }
        setCountDownTime(updatedTime);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [countDownTime]);
 
  return (
    <div className="">
    <div className="flex justify-center flex-col gap-4">
      <div className="flex gap-2 items-center justify-center">
        <div className="flex gap-1 ">
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.days.toString().charAt(0)}
          </span>
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.days.toString().charAt(1)}
          </span>
          <span
            className={
              countDownTime?.days.toString().length <= 2
                ? "hidden"
                : "bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl"
            }
          >
            {countDownTime?.days.toString().charAt(2)}
          </span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex gap-1 shadow-lg">
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.hours.toString().charAt(0)}
          </span>
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.hours.toString().charAt(1)}
          </span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex gap-1">
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.minutes.toString().charAt(0)}
          </span>
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.minutes.toString().charAt(1)}
          </span>
        </div>
        <span className="text-[#FBFAF8] text-[20px] sm:text-[40px]">:</span>
        <div className="flex gap-1">
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.seconds.toString().charAt(0)}
          </span>
          <span className="bg-[#2D3C7B] font-semibold text-[#FBFAF8] text-[20px] sm:text-[40px] py-1 px-2  rounded drop-shadow-xl">
            {countDownTime?.seconds.toString().charAt(1)}
          </span>
        </div>
      </div>
    </div>
  </div>
  
  );
};
export default Timer1;