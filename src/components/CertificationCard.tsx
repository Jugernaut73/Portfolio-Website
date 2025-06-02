import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const CertificationCard = ({
  cardInfo,
}: {
  cardInfo: {
    name: string;
    company: string;
    icon: string;
    link: string;
    date: string;
  };
}) => {
  const { name, company, icon, link, date} = cardInfo;

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
  }).format(new Date(date));

  return (
    <div className="flex flex-1 gap-3 p-2.5 rounded-xl bg-[#2e2a2a]/50 border border-[#302d2d] dark:bg-dark-200 hover:bg-[#2e2a2a] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200">
      {/* <div className={`p-3 rounded-lg w-fit`} style={{ backgroundColor: bgColor }}> */}
      <Image
        src={icon}
        width={1000}
        height={1000}
        alt={`${name} logo`}
        className={`size-16 rounded-xl`}
      />
      {/* </div> */}
      <div className="flex-grow min-w-0">
        <h4 className="text-lg font-medium truncate">{name}</h4>
        <p className="text-white text-sm truncate">{company}</p>
        <p className="text-white/70 text-sm">Issued {formattedDate}</p>
      </div>
      {link && (
        <a
            href={`${link}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-blue-500 hover:bg-blue-500/80 transition-colors duration-200 rounded-lg self-start sm:self-end"
        >
            <MoveUpRight className="size-5 text-[#F3F4F3]" />
        </a>
      )}
    </div>
  );
};

export default CertificationCard;