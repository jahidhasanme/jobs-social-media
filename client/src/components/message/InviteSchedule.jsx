export const InviteSchedule = () => {
  return (
    <div className="w-full max-w-[233px] h-max p-6 bg-white rounded-md">
      <p className="text-[#A2A2A2] text-xs font-medium">Invite Schedule</p>
      {/* time & date container */}
      <div className="flex items-center justify-between mt-3 time-date-container">
        <div className="w-full overflow-hidden max-w-24 rounded-xl date-container shadow-[0px_4px_4px_0px_#00000040]">
          <div className="px-8 py-5 date flex justify-center items-center bg-[#1976D2]">
            <p className="text-4xl font-semibold text-white date">26</p>
          </div>
          <div className="flex items-center justify-center bg-white month">
            <p className="py-1 text-2xl month">Nov</p>
          </div>
        </div>
        <div className="text-center time-container">
          <p className="day text-[#535353] font-medium">Friday</p>
          <p className="time text-[#1976D2] font-bold text-xl">2:30 PM</p>
        </div>
      </div>
      {/* buttons */}
      <div className="flex items-center justify-between mt-4 font-semibold text-white buttons">
        <button className="px-5 py-2 bg-[#1976D2] text-sm rounded accept-btn">
          Accept
        </button>
        <button className="px-5 py-2 text-sm rounded bg-[#535353] reject-btn">
          Reject
        </button>
      </div>
      {/* job details btn */}
      <div className="mt-3 job-details">
        <button className="text-sm border-[#535353] border w-full py-2 rounded-md font-semibold text-[#535353]">
          Job Details
        </button>
      </div>
    </div>
  );
};
