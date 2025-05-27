"use client";

const Hero = () => {
  return (
    <>
          <div className="flex items-center self-stretch pt-[24px] pb-[24px] ml-[18px] mr-[18px]">
        <button
          className="flex flex-1 items-center bg-transparent text-left pt-[6px] pb-[6px] mr-[84px] rounded-[20px] border-[1px] border-solid border-[#0000000D]"
          onClick={() => alert("Pressed!")}
        >
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/ecejo3d4_expires_30_days.png"
            }
            className="w-[24px] h-[24px] ml-[12px] mr-[6px] rounded-[20px] object-fill"
          />
          <span className="flex-1 text-[#000000] text-[14px] font-bold text-center">
            {"Скрыть отзывы"}
          </span>
        </button>
        <span className="text-[#007AFF] text-[14px] font-bold mt-[2px] mb-[2px] ml-[8px] mr-[8px]">
          {"Смотреть все"}
        </span>
      </div>
      <div className="flex items-start self-stretch mb-[16px]">
        <div className="flex-1 items-start mr-[8px]">
          <div className="bg-[#B5B5B5] w-[173px] h-[198px] rounded-[16px]"></div>
          <div className="bg-[#B5B5B5] w-[173px] h-[198px] ml-[108px] rounded-[16px]"></div>
        </div>
        <div className="bg-[#B5B5B5] w-[173px] h-[198px] rounded-[16px]"></div>
      </div>
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/xru5jba5_expires_30_days.png"
        }
        className="w-[80px] h-[16px] mb-[16px] object-fill"
      />
      <button
        className="flex flex-col items-center self-stretch bg-[#007AFF] text-left pt-[11px] pb-[11px] mb-[24px] ml-[18px] mr-[18px] rounded-[12px] border-0"
        onClick={() => alert("Pressed!")}
      >
        <span className="text-[#FFFFFF] text-[14px] font-bold">
          {"Оставить отзыв"}
        </span>
      </button>
      <div className="flex flex-col items-center self-stretch pt-[24px] pb-[24px] ml-[18px] mr-[18px]">
        <div className="self-stretch bg-[#B5B5B5] h-[161px] mb-[16px] rounded-[16px]"></div>
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/81xgxebn_expires_30_days.png"
          }
          className="w-[80px] h-[16px] object-fill"
        />
      </div>
      <div className="self-stretch ml-[18px] mr-[18px]">
        <div className="flex items-start self-stretch mb-[8px]">
          <div className="flex flex-1 flex-col items-start bg-[#EFEFF4] p-[16px] mr-[8px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[24px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/apevhesv_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"Программа\nлояльности"}
            </span>
          </div>
          <div className="flex flex-1 flex-col items-start bg-[#EFEFF4] p-[16px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[24px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/mnmfyplq_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"Партнерская\nпрограмма"}
            </span>
          </div>
        </div>
        <div className="flex items-start self-stretch mb-[8px]">
          <div className="flex flex-1 flex-col items-start bg-[#EFEFF4] p-[16px] mr-[8px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[24px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/7tm751qg_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"Замены\nи возвраты"}
            </span>
          </div>
          <div className="flex flex-1 flex-col items-start bg-[#EFEFF4] p-[16px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[24px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/11saj4m9_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"Мобильные\nпрокси"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch bg-[#EFEFF4] p-[16px] mb-[8px] rounded-[16px]">
          <div className="flex flex-col items-end self-stretch mb-[24px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/ft2wdlgj_expires_30_days.png"
              }
              className="w-[24px] h-[24px] object-fill"
            />
          </div>
          <span className="text-[#000000] text-[14px] font-bold w-[152px]">
            {"Бесплатное обучение\nарбитражу трафика"}
          </span>
        </div>
        <div className="flex flex-col items-start self-stretch bg-[#EFEFF4] p-[16px] mb-[8px] rounded-[16px]">
          <div className="flex flex-col items-end self-stretch mb-[43px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/iggt03pe_expires_30_days.png"
              }
              className="w-[24px] h-[24px] object-fill"
            />
          </div>
          <span className="text-[#000000] text-[14px] font-bold">
            {"Креативы для рекламы"}
          </span>
        </div>
        <div className="flex items-start self-stretch mb-[8px]">
          <div className="flex flex-1 flex-col bg-[#EFEFF4] p-[16px] mr-[8px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[23px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/ouw631dp_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"Промокоды\nот партнеров"}
            </span>
          </div>
          <div className="flex flex-1 flex-col items-start bg-[#EFEFF4] p-[16px] rounded-[16px]">
            <div className="flex flex-col items-end self-stretch mb-[43px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/ngrmwx40_expires_30_days.png"
                }
                className="w-[24px] h-[24px] object-fill"
              />
            </div>
            <span className="text-[#000000] text-[14px] font-bold">
              {"FAQ"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start self-stretch bg-[#EFEFF4] p-[16px] rounded-[16px]">
          <div className="flex flex-col items-end self-stretch mb-[24px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/pyo7sq6a_expires_30_days.png"
              }
              className="w-[24px] h-[24px] object-fill"
            />
          </div>
          <span className="text-[#000000] text-[14px] font-bold w-[144px]">
            {"Как получить доступ\nк оптовым ценам?"}
          </span>
        </div>
      </div>
      <div className="flex items-center self-stretch pt-[24px] mb-[24px] ml-[18px] mr-[18px]">
        <span className="text-[#000000] text-[14px] font-bold w-[122px] mr-[80px]">
          {"Мы в социальных сетях"}
        </span>
        <div className="flex-1">
          <div className="flex items-start self-stretch mb-[8px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/z7knxoa5_expires_30_days.png"
              }
              className="w-[72px] h-[72px] mr-[8px] object-fill"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/b97egtcb_expires_30_days.png"
              }
              className="w-[72px] h-[72px] object-fill"
            />
          </div>
          <div className="flex items-start self-stretch">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/z1nvqsol_expires_30_days.png"
              }
              className="w-[72px] h-[72px] mr-[8px] object-fill"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/hxggz33x_expires_30_days.png"
              }
              className="w-[72px] h-[72px] object-fill"
            />
          </div>
        </div>
      </div>
      <span className="text-[#707579] text-[12px] text-center mb-[25px] ml-[18px] mr-[18px]">
        {"Пользовательское соглашение"}
      </span>
      <div className="flex flex-col self-stretch bg-[#FFFFFF99]">
        <img
          src={
            "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/w8qpsgik_expires_30_days.png"
          }
          className="self-stretch h-[20px] object-fill"
        />
        <div className="flex items-start self-stretch">
          <div className="flex flex-1 flex-col items-start">
            <div className="flex flex-col items-center pt-[8px] pb-[8px] pl-[44px] pr-[44px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/2yrar2m5_expires_30_days.png"
                }
                className="w-[24px] h-[24px] mb-[4px] object-fill"
              />
              <span className="text-[#707579] text-[10px] font-bold">
                {"Каталог"}
              </span>
            </div>
            <div className="flex flex-col items-center pt-[8px] pb-[8px] pl-[36px] pr-[36px] ml-[130px]">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/sxdo6ujh_expires_30_days.png"
                }
                className="w-[24px] h-[24px] mb-[4px] object-fill"
              />
              <span className="text-[#707579] text-[10px] font-bold">
                {"Поддержка"}
              </span>
            </div>
          </div>
          <div className="flex flex-col shrink-0 items-center pt-[8px] pb-[8px] pl-[23px] pr-[23px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/6sm5s084_expires_30_days.png"
              }
              className="w-[24px] h-[24px] mb-[4px] object-fill"
            />
            <span className="text-[#707579] text-[10px] font-bold">
              {"Личный кабинет"}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch pt-[21px] pb-[8px]">
          <div className="bg-[#000000] w-[139px] h-[5px] rounded-[100px]"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
