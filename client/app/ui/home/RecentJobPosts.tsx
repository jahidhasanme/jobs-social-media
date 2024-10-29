// Icons
import { BsArrowRight } from "react-icons/bs";

export const RecentJobPosts = () => {
  return (
    <div className="w-full h-full max-w-xs overflow-y-scroll scroll-bar-none">
      <div className=" h-max p-3 xl:p-4 bg-white rounded-md text-[#535353]">
        <p className="text-sm font-medium">Recent Job Posts:</p>
        {/* recent jobs container */}
        <div className="jobs-container">
          {/* make a loop with real data and show one div with those data dynamically */}
          <div className="flex items-center gap-2 mt-4 job-1 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-2 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-3 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-4 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://img.freepik.com/premium-vector/logo-google_798572-207.jpg"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-5 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
        {/* view all btn */}
        <p className="text-[#1976D2] text-sm font-semibold pt-4 text-center">
          View All
        </p>
      </div>
    </div>
  );
};

// Todos:
// make responsive
// make functional
// make dynamic & re-useable// Icons
import { BsArrowRight } from "react-icons/bs";

export const RecentJobPosts = () => {
  return (
    <div className="w-full h-full max-w-xs overflow-y-scroll scroll-bar-none">
      <div className=" h-max p-3 xl:p-4 bg-white rounded-md text-[#535353]">
        <p className="text-sm font-medium">Recent Job Posts:</p>
        {/* recent jobs container */}
        <div className="jobs-container">
          {/* make a loop with real data and show one div with those data dynamically */}
          <div className="flex items-center gap-2 mt-4 job-1 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-2 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-3 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://casamedia.com/wp-content/uploads/2023/04/adidas-1024x683.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-4 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://img.freepik.com/premium-vector/logo-google_798572-207.jpg"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 job-5 pb-4 border-b border-[#F5F5F5]">
            <div className="company-logo">
              {" "}
              <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                alt=""
              />
            </div>
            <div className="space-y-1 texts">
              <p className="text-sm font-medium job-title">
                Senior UI/UX Designer
              </p>
              <p className="text-xs company-name text-[#a2a2a2]">
                Vivasoft Limited
              </p>
              <p className="text-xs job-type text-[#CDCDCD]">Remote</p>
            </div>
            <button className="p-2 bg-[#1976D2] rounded details-btn ml-auto">
              <BsArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
        {/* view all btn */}
        <p className="text-[#1976D2] text-sm font-semibold pt-4 text-center">
          View All
        </p>
      </div>
    </div>
  );
};

// Todos:
// make responsive
// make functional
// make dynamic & re-useable
