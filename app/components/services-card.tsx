import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type serviceCardProps = {
  svgImage: string;
  title: string;
  description: string;
};
const ServicesCard = ({ svgImage, title, description }: serviceCardProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-8 text-white max-w-sm">
      <div className="border-2 border-[#E28268] rounded-full w-fit p-3">
        <Avatar>
          <AvatarImage src={svgImage} alt="tree-image" />
          <AvatarFallback>Ser</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ServicesCard;
