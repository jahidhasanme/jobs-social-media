import Image from "next/image";

// Icons
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";

export const UserMessage = () => {
  // This function take big string message and convert it in to small
  function truncateText(text: string, limit: number) {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  }

  return (
    <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
      <div className="flex-shrink-0 w-12 h-12">
        <Image
          className="object-cover w-full h-full rounded-full"
          src="/assets/images/naruto-profile.jpg"
          alt="naruto-profile"
          width={438}
          height={780}
        />
      </div>
      <div className="text text-[#535353]">
        <p className="text-sm font-bold username">Uzumaki Naruto</p>
        <p className="text-xs font-semibold message-overview">
          {/* example use of truncateText */}
          {truncateText(
            ` Lorem ipsum dolor sit amet consectetur. Volutpat diam egestas
        felis urna aliquet ...asddddddddddddddddddddddddddddd Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Asperiores dicta
        porro veniam quasi assumenda minima deleniti cumque nisi,
        accusamus, perferendis aliquid, nostrum doloribus dignissimos
        autem ipsum expedita odit reiciendis! Quae nesciunt natus modi
        atque sunt dolor repellat necessitatibus molestiae delectus est
        veritatis consequuntur, officiis error rerum iusto repudiandae
        quos provident?`,
            90
          )}
        </p>
      </div>
      <div className="absolute time-icon top-4 right-4">
        <span className="text-xs text-[#CDCDCD]">26 Jul</span>
        <IoNotificationsOutline className="text-[#535353] text-2xl ml-auto mt-1" />
      </div>
    </div>
  );
};

// Todos:
// make dynamic like--
// if message haven't read make text bold
// if message read make text normal
// if message muted make text transparent (diff color)
