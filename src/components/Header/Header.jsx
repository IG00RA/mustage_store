"use client";

const Header = () => {
  return (
    <div className="flex flex-col self-stretch bg-[#FFFFFF] pt-[16px] mb-[24px]">
      <div className="flex items-center self-stretch pl-[18px] pr-[18px] mb-[8px]">
        <div className="flex shrink-0 items-center mr-[32px]">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/amlmq30r_expires_30_days.png"
            }
            className="w-[53px] h-[44px] mr-[8px] object-fill"
          />
          <span className="text-[#040717] text-[14px] w-[65px]">
            {"MUSTAGE.STORE"}
          </span>
        </div>
        <div className="flex flex-1 items-start">
          <button
            className="flex flex-col shrink-0 items-start bg-[#4378FF1A] text-left pt-[10px] pb-[10px] pl-[11px] pr-[11px] mr-[8px] rounded-[10px] border-0"
            onClick={() => alert("Pressed!")}
          >
            <span className="text-[#007AFF] text-[12px] font-bold">{"UA"}</span>
          </button>
          <button
            className="flex flex-col shrink-0 items-start bg-[#4378FF1A] text-left relative p-[8px] mr-[8px] rounded-[10px] border-0"
            onClick={() => alert("Pressed!")}
          >
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/yq6fhlnp_expires_30_days.png"
              }
              className="w-[23px] h-[23px] rounded-[10px] object-fill"
            />
            <div className="flex flex-col items-start bg-[#007AFF] w-[24px] absolute bottom-[0px] right-[0px] rounded-[20px]">
              <span className="text-[#FFFFFF] text-[12px] font-bold mt-[2px] ml-[5px] mr-[5px]">
                {"42"}
              </span>
            </div>
          </button>
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/silfh0hn_expires_30_days.png"
            }
            className="w-[40px] h-[40px] mr-[8px] object-fill"
          />
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/2mx78qob_expires_30_days.png"
            }
            className="w-[40px] h-[40px] object-fill"
          />
        </div>
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/rgyi4c9x_expires_30_days.png"
        }
        className="self-stretch h-[20px] object-fill"
      />
    </div>
  );
};

export default Header;
