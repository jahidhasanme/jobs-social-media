// Icons
import { IoMdSearch } from "react-icons/io";
import { RiSoundModuleFill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";

export const UserMessages = () => {
  // This function take big string message and convert it in to small
  function truncateText(text, limit) {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  }

  return (
    <div className="w-full max-w-sm userMessages">
      {/* search container */}
      <div className="flex justify-between w-full gap-2 search-container">
        <div className="relative w-full search-message">
          <input
            className="w-full px-4 py-3 text-sm rounded-md outline-none"
            type="text"
            name="search-message"
            id="search-message"
            placeholder="Search messages"
          />
          <IoMdSearch className="absolute text-2xl text-[#CDCDCD] -translate-y-1/2 cursor-pointer right-3 top-1/2" />
        </div>
        <div className="p-2 bg-white mixer-icon w-max">
          <RiSoundModuleFill className="text-2xl text-[#CDCDCD]" />
        </div>
      </div>
      <div className="my-4 space-y-2 messages-container">
        {/* Message from others */}
        <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
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
                95
              )}
            </p>
          </div>
          <div className="absolute time-icon top-4 right-4">
            <span className="text-xs text-[#CDCDCD]">26 Jul</span>
            <IoNotificationsOutline className="text-[#535353] text-2xl ml-auto mt-1" />
          </div>
        </div>
        <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          <div className="text text-[#CDCDCD]">
            <p className="text-sm font-medium username">Uzumaki Naruto</p>
            <p className="text-xs message-overview">
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
                95
              )}
            </p>
          </div>
          <div className="absolute time-icon top-4 right-4">
            <span className="text-xs text-[#CDCDCD]">26 Jul</span>
            <IoNotificationsOffOutline className="text-[#CDCDCD] text-2xl ml-auto mt-1" />
          </div>
        </div>
        <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          <div className="text text-[#535353]">
            <p className="text-sm font-medium username">Uzumaki Naruto</p>
            <p className="text-xs message-overview">
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
                95
              )}
            </p>
          </div>
          <div className="absolute time-icon top-4 right-4">
            <span className="text-xs text-[#CDCDCD]">26 Jul</span>
            <IoNotificationsOutline className="text-[#535353] text-2xl ml-auto mt-1" />
          </div>
        </div>
        <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          <div className="text text-[#535353]">
            <p className="text-sm font-medium username">Uzumaki Naruto</p>
            <p className="text-xs message-overview">
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
                95
              )}
            </p>
          </div>
          <div className="absolute time-icon top-4 right-4">
            <span className="text-xs text-[#CDCDCD]">26 Jul</span>
            <IoNotificationsOutline className="text-[#535353] text-2xl ml-auto mt-1" />
          </div>
        </div>
        <div className="relative flex items-center gap-3 p-4 bg-white rounded message">
          <div className="flex-shrink-0 w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          <div className="text text-[#535353]">
            <p className="text-sm font-medium username">Uzumaki Naruto</p>
            <p className="text-xs message-overview">
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
                95
              )}
            </p>
          </div>
          <div className="absolute time-icon top-4 right-4">
            <span className="text-xs text-[#CDCDCD]">26 Jul</span>
            <IoNotificationsOutline className="text-[#535353] text-2xl ml-auto mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
