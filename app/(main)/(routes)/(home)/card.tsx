import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface UserCardProps {
  img: string;
  text: string;
  name: string;
  job: string;
}

const UserCard: React.FC<UserCardProps> = ({ img, text, name, job }) => {
  return (
    <Card className="md:mx-96 rounded-3xl md:h-80 bg-gradient-to-b flex items-center justify-center text-white flex-col from-[#0C0036] to-[#0c0036e1]">
      <CardHeader>
        <img src={img} alt={name} />
      </CardHeader>
      <CardContent>
        <p className="text-center">{text}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <p>{name}</p>
        <p>{job}</p>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
