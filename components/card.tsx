import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  paragraph: string;
}

export const Card = ({ icon: Icon, title, paragraph }: CardProps) => {
  return (
    <div className="max-w-sm bg-[#062535] flex flex-col justify-center items-center p-10 shadow-xl rounded-2xl mx-8 my-4 space-y-4">
      <Icon size={64} className="bg-gradient-to-tr from-[#4F8D8A] to-[#BC9836]  text-white p-2 rounded-2xl" />
      <h1 className="text-2xl text-center ">{title}</h1>
      <p className="text 3xl text-center animate-fade-up">{paragraph}</p>
    </div>
  );
};
