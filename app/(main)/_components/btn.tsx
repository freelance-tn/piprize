import { Trophy } from "lucide-react";

const Btn = () => {
  return (
    <div>
      <div       
        className="relative inline-flex items-center justify-center px-10 py-3
        overflow-hidden font-mono font-medium tracking-tighter text-white 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out
         bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-3xl 
        opacity-30   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
        <span className="flex items-center justify-center gap-1 relative">
          <Trophy size={24}  />
          CLAIM PI NETWORK COINS
       
        </span>
      </div>
    </div>
  );
};

export default Btn;
