import Image from "next/image";

const TechCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    description: string;
    iconUrl: string;
    bgColor: string;
  };
}) => {
  const { name, description, iconUrl, bgColor } = cardInfo;

  return (
    <div className="flex flex-1 gap-5 p-2.5 rounded-xl bg-[#2e2a2a]/50 border border-[#302d2d] dark:bg-dark-200 hover:bg-[#2e2a2a] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200">
      <div className={`p-3 rounded-lg w-fit`} style={{ backgroundColor: bgColor }}>
        <Image
          src={iconUrl}
          width={1000}
          height={1000}
          alt={`${name} logo`}
          className={`size-8 ${name === "NextJS" ? "dark:invert" : ""}`}
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-dark-200/70 dark:text-white/70 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechCard;