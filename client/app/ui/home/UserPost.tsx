// Icons
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoHeartSharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { LiaComments } from "react-icons/lia";
import { PiShareFatBold } from "react-icons/pi";
import { MdAddToPhotos } from "react-icons/md";

interface UserPostProps {
  name: string;
  userImg: string;
  message: string;
  time: string;
  comments: number;
  description: string;
  likeCount: number;
  share: number;
  images: string[];
}

export const UserPost = ({
  name,
  userImg,
  message,
  time,
  comments,
  description,
  likeCount,
  share,
  images,
}: UserPostProps) => {
  return (
    // user post
    <div className="post">
      {/* write post container */}
      <div className="w-full p-4 bg-white rounded-md write-post-container">
        <div className="flex gap-3 write-post">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src="https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg"
            alt=""
          />
          <input
            type="text"
            name="write-post"
            id="write-post"
            placeholder="Write a post..."
            className="bg-[#F5F5F5] w-full p-2 text-sm outline-none rounded"
          />
        </div>
        <div className="flex justify-end gap-3 mt-4 buttons">
          <button className="post-a-job text-sm hover:bg-[#1976D2] hover:text-white ease-linear duration-200 flex gap-1 items-center border border-[#1976D2] px-3 py-1 rounded-md text-[#1976D2]">
            <MdOutlineWorkOutline className="text-xl" />
            <span>Post a Job</span>
          </button>
          <button className="py-1 rounded text-sm hover:bg-[#1660A5] ease-linear duration-200 px-6 text-white bg-[#1976D2]">
            Post
          </button>
        </div>
      </div>
      {/* post container */}
      <div className="w-full mt-5">
        <div className="w-full p-4 bg-white rounded post">
          {/* user information */}
          <div className="flex items-center justify-between rounded user-info">
            <div className="gap-2 flex user text-[#535353]">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={userImg}
                alt=""
              />
              <div className="space-y-1 user-text">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs">{message}</p>
                <p className="text-[#A2A2A2] text-xs">{time}</p>
              </div>
            </div>
            <button
              className="px-5 py-2 text-sm font-semibold hover:bg-[#1660A5] ease-linear duration-200
             rounded text-white bg-[#1976D2]"
            >
              Follow
            </button>
          </div>
          {/* post details */}
          <div className="my-3 text-[#535353] post-details">
            <p className="text-sm">{description}</p>
            {/* show if only user post images */}
            <div className="flex gap-2 mt-4 images">
              {images?.map((img, i) => {
                return (
                  <div className="w-full" key={i}>
                    <img
                      className="object-cover w-full h-full"
                      src={img}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* reactions and comments count*/}
          <div className="border-b border-[#F5F5F5] reactions-comments-count flex justify-between items-center my-3 pb-4 text-[#535353]">
            <div className="flex items-center reaction">
              <div className="line-icon p-1 w-max rounded-full bg-[#1976D2]">
                <BiSolidLike className="text-xs text-white" />
              </div>
              <div className="heart-icon p-1 w-max rounded-full bg-[#D2192F] -ml-1">
                <IoHeartSharp className="text-xs text-white" />
              </div>
              <p className="text-[#535353] ml-1 text-sm">{likeCount}</p>
            </div>
            <div className="flex items-center text-[#535353]">
              <p className="text-sm">{comments} comments</p>
              <LuDot />
              <p className="text-sm">{share} shares</p>
            </div>
          </div>
          {/* reactions and comments */}
          <div className="flex justify-around gap-3 reactions-comments">
            <button className="flex items-center gap-1 like-btn text-[#1976D2]">
              <BiSolidLike className="text-2xl" />
              <span className="text-sm font-semibold">Liked</span>
            </button>
            <button className="flex items-center gap-1 comment-btn text-[#A2A2A2]">
              <LiaComments className="text-2xl" />
              <span className="text-sm font-medium">Comment</span>
            </button>
            <button className="flex items-center gap-1 share-btn text-[#A2A2A2]">
              <PiShareFatBold className="text-2xl" />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center gap-1 save-btn text-[#4CAF50]">
              <MdAddToPhotos className="text-2xl" />
              <span className="text-sm font-medium">Saved</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Todos:
// Make responsive
// Make reuseable
// Make context menu for edit & delete functionality
