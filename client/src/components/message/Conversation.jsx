import imageDemo from "../../assets/images/common-images/message-demo.png";

// Icons
import { IoNotificationsOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { PiFileDoc } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

export const Conversation = () => {
  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-md conversation">
      <div className="flex items-center justify-between user-info">
        <div className="flex gap-3 user">
          <div className="w-12 h-12">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
              alt=""
            />
          </div>
          <div className="text">
            <p className="text-[#535353] font-semibold">Uzumaki Naruto</p>
            <span className="text-[#A2A2A2] text-xs">Active Now</span>
          </div>
        </div>
        <div className="controls flex items-center gap-3 text-[#535353]">
          <button>
            <IoNotificationsOutline className="text-3xl" />
          </button>
          <button>
            <FiInfo className="text-3xl" />
          </button>
        </div>
      </div>
      {/* here all the message goes */}
      <div className="relative mt-3 messages-area">
        <p className="p-2 bg-[#00B2FF] text-white w-full text-center text-sm absolute top-0">
          <span className="font-bold">Warning:</span> You are muted by this
          recipient
        </p>
        <div className="pt-10 message border-b border-[#F5F5F5]">
          <div className="message-received">
            <div className="flex flex-col justify-start my-4">
              <p className="py-2 px-4 text-[#535353] w-max bg-[#F5F5F5] rounded">
                Write a message
              </p>
              <p className="text-[#CDCDCD] text-xs mt-1">2:00 pm 26 Jul</p>
            </div>
          </div>
          <div className="message-sent">
            <div className="flex flex-col items-end my-4 message">
              <p className="py-2 px-4 text-white w-max bg-[#1976D2] rounded">
                Write a message
              </p>
              <p className="text-[#CDCDCD] text-xs mt-1">
                2:00 pm 26 Jul Delivered
              </p>
            </div>
          </div>
          <div className="message-sent">
            <div className="flex flex-col items-end my-4 message">
              <img src={imageDemo} alt="" />
              <p className="text-[#CDCDCD] text-xs mt-1">
                2:00 pm 26 Jul Delivered
              </p>
            </div>
          </div>
          <div className="message-sent">
            <div className="flex flex-col items-end my-4 message">
              <div className="doc-file bg-[#CDCDCD] text-[#535353] py-2 px-3 flex items-center gap-2">
                <PiFileDoc className="text-xl" />
                <p className="text-sm">portfolio.pdf</p>
                <button>
                  <MdOutlineFileDownload />
                </button>
              </div>
              <p className="text-[#CDCDCD] text-xs mt-1">
                2:00 pm 26 Jul Delivered
              </p>
            </div>
          </div>
          <div className="message-received">
            <div className="flex flex-col items-start my-4 message">
              <img src={imageDemo} alt="" />
              <p className="text-[#CDCDCD] text-xs mt-1">
                2:00 pm 26 Jul Delivered
              </p>
            </div>
          </div>
          <div className="message-received">
            <div className="flex flex-col items-start my-4 message">
              <div className="doc-file bg-[#CDCDCD] text-[#535353] py-2 px-3 flex items-center gap-2">
                <PiFileDoc className="text-xl" />
                <p className="text-sm">portfolio.pdf</p>
                <button>
                  <MdOutlineFileDownload />
                </button>
              </div>
              <p className="text-[#CDCDCD] text-xs mt-1">
                2:00 pm 26 Jul Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="flex items-center gap-3 mt-5">
        <button className="p-2 border-2 text-2xl rounded-full border-[#00B2FF] text-[#00B2FF]">
          <FaImage />
        </button>
        <button className="p-2 border-2 text-2xl rounded-full border-[#00B2FF] text-[#00B2FF]">
          <PiFileDoc />
        </button>
        <div className="w-full message-inp">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Write a message"
            className="outline-none border w-full border-[#CDCDCD] px-4 p-2 rounded-3xl"
          />
        </div>
        <button className="p-3 border-2 text-xl rounded-full bg-[#00B2FF] text-white">
          <IoSend />
        </button>
      </div>
    </div>
  );
};
