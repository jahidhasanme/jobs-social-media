import { useEffect, useRef } from "react";
import imageDemo from "../../assets/images/common-images/message-demo.png";

// Icons
import { IoNotificationsOutline } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { PiFileDoc } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import Image from "next/image";

export const Conversation = () => {
  // reference for the message container (div)
  const messages = useRef();

  // This function scroll the message to bottom
  const scrollToBottom = () => {
    if (messages.current) {
      messages.current.scrollTop = messages.current.scrollHeight;
    }
  };

  // This run when page load for the first time
  useEffect(() => {
    // scroll the messages when page load
    scrollToBottom();
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full bg-white wrapper">
      {/* User Info */}
      <div className="relative flex items-center justify-between m-4 user-info">
        <div className="flex gap-3 user">
          <div className="w-12 h-12 user-image">
            <Image
              src="/assets/images/naruto-profile.jpg"
              alt="naruto-profile"
              className="object-cover w-full h-full rounded-full"
              width={438}
              height={780}
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
        {/* Notification */}
        <p className="p-2 bg-[#00B2FF] text-white w-full text-center text-sm absolute z-50 -bottom-10">
          <span className="font-bold">Warning:</span> You are muted by this
          recipient
        </p>
      </div>

      <div className="h-full overflow-y-scroll rounded-md conversation scroll-bar-none">
        {/* messages area */}
        <div className="relative h-full m-4 mt-3 message-area">
          {/* here all the message goes */}
          <div
            ref={messages}
            className="h-full pt-10 overflow-y-scroll messages scroll-bar-none"
          >
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
      </div>
      {/* Buttons */}
      <div className="border-t bg-white border-[#F5F5F5] flex items-center w-full gap-3 p-4">
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

// Todos:
// make responsive
// make dynamic
// make functional
// Make the conversation height dynamic
