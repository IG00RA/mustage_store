"use client";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-start self-stretch pb-[24px] ml-[18px] mr-[18px]">
        <span className="text-[#000000] text-[14px] font-bold mt-[24px] mb-[24px] ml-[12px]">
          {"Программа лояльности"}
        </span>
        <div className="self-stretch pt-[8px] pb-[8px]">
          <div className="self-stretch mb-[16px]">
            <div className="flex items-start self-stretch relative mb-[24px]">
              <div className="flex flex-1 flex-col items-start bg-[#007AFF] pt-[4px] pb-[4px] mr-[11px] rounded-[100px] border-[2px] border-solid border-[#FFFFFF]">
                <span className="text-[#FFFFFF] text-[10px] font-bold ml-[9px] mr-[9px]">
                  {"1"}
                </span>
              </div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] mr-[12px] rounded-[100px]"></div>
              <div className="flex-1 bg-[#EFEFF4] h-[20px] rounded-[100px]"></div>
              <div className="flex-1 items-start bg-[#EFEFF4] absolute top-[5px] right-[10px] left-[10px] rounded-[100px]">
                <div className="bg-[#007AFF] w-[23px] h-[10px] rounded-[100px]"></div>
              </div>
            </div>
            <div className="self-stretch">
              <div className="flex flex-col items-start self-stretch mb-[8px]">
                <div className="flex items-start self-stretch mb-[8px]">
                  <div className="flex shrink-0 items-center pr-[4px] mr-[16px]">
                    <span className="text-[#292929] text-[12px] mr-[9px]">
                      {"Ваш уровень:"}
                    </span>
                    <span className="text-[#292929] text-[14px] font-bold">
                      {"1"}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center pr-[3px]">
                    <span className="text-[#292929] text-[12px] mr-[10px]">
                      {"Ваш статус:"}
                    </span>
                    <span className="text-[#292929] text-[14px] font-bold">
                      {"“Нулевый”"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center pr-[3px]">
                  <span className="text-[#292929] text-[12px] mr-[9px]">
                    {"Ваша скидка:"}
                  </span>
                  <span className="text-[#292929] text-[14px] font-bold">
                    {"1%"}
                  </span>
                </div>
              </div>
              <div className="flex items-start self-stretch">
                <span className="text-[#292929] text-[12px] w-[216px] mr-[8px]">
                  {"До следующего уровня осталось сделать покупок на сумму:"}
                </span>
                <span className="text-[#292929] text-[14px] font-bold mt-[11px]">
                  {"$154"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end self-stretch">
            <button
              className="flex items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] pl-[12px] pr-[12px] rounded-[20px] border-0"
              onClick={() => alert("Pressed!")}
            >
              <span className="text-[#007AFF] text-[14px] font-bold mr-[9px]">
                {"Подробнее"}
              </span>
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/clmq472h_expires_30_days.png"
                }
                className="w-[16px] h-[16px] rounded-[20px] object-fill"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch pb-[24px] ml-[18px] mr-[18px]">
        <div className="flex items-center self-stretch pt-[24px] pb-[24px]">
          <button
            className="flex flex-1 items-center bg-transparent text-left pt-[6px] pb-[6px] mr-[60px] rounded-[20px] border-[1px] border-solid border-[#0000000D]"
            onClick={() => alert("Pressed!")}
          >
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/csioba5m_expires_30_days.png"
              }
              className="w-[24px] h-[24px] ml-[12px] mr-[6px] rounded-[20px] object-fill"
            />
            <span className="flex-1 text-[#000000] text-[14px] font-bold text-center">
              {"Скрыть топ товары"}
            </span>
          </button>
          <div className="flex shrink-0 items-start">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/he3cyard_expires_30_days.png"
              }
              className="w-[24px] h-[24px] mr-[12px] object-fill"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/y3f7jo25_expires_30_days.png"
              }
              className="w-[24px] h-[24px] mr-[12px] object-fill"
            />
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/zv56gkh2_expires_30_days.png"
              }
              className="w-[24px] h-[24px] object-fill"
            />
          </div>
        </div>
        <div className="flex flex-col self-stretch">
          <div className="self-stretch mb-[16px]">
            <div className="self-stretch mb-[16px]">
              <div className="flex items-start self-stretch mb-[16px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/besorgct_expires_30_days.png"
                  }
                  className="w-[56px] h-[56px] mr-[16px] object-fill"
                />
                <span className="flex-1 text-[#000000] text-[14px] mb-[1px]">
                  {
                    "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории..."
                  }
                </span>
              </div>
              <div className="flex items-center self-stretch">
                <button
                  className="flex shrink-0 items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] pl-[12px] pr-[12px] mr-[49px] rounded-[20px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold mr-[9px]">
                    {"Подробнее"}
                  </span>
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/rdtlapg4_expires_30_days.png"
                    }
                    className="w-[16px] h-[16px] rounded-[20px] object-fill"
                  />
                </button>
                <div className="flex flex-1 flex-col items-start">
                  <div className="flex items-center mb-[7px] ml-[69px]">
                    <span className="text-[#292929] text-[18px] font-bold mr-[5px]">
                      {"$12.99"}
                    </span>
                    <span className="text-[#292929] text-[16px]">
                      {"$9.99"}
                    </span>
                  </div>
                  <div className="flex items-start self-stretch pl-[61px] pr-[2px]">
                    <span className="flex-1 text-[#292929] text-[12px]">
                      {"В наличии:"}
                    </span>
                    <span className="text-[#292929] text-[12px] font-bold">
                      {"599 шт."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center self-stretch">
              <div className="flex shrink-0 items-start mr-[82px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/lyjbourr_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] mr-[8px] object-fill"
                />
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/h780bwe2_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] object-fill"
                />
              </div>
              <div className="flex flex-1 items-start">
                <button
                  className="flex flex-col shrink-0 items-start bg-[#007AFF] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] mr-[8px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#FFFFFF] text-[14px] font-bold">
                    {"Купить"}
                  </span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-[#4378FF1A] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold">
                    {"В корзину"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/y3lvla4j_expires_30_days.png"
            }
            className="self-stretch h-[1px] mb-[16px] object-fill"
          />
          <div className="self-stretch mb-[16px]">
            <div className="self-stretch mb-[16px]">
              <div className="flex items-start self-stretch mb-[16px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/95s5dul3_expires_30_days.png"
                  }
                  className="w-[56px] h-[56px] mr-[16px] object-fill"
                />
                <span className="flex-1 text-[#000000] text-[14px] mb-[1px]">
                  {
                    "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории..."
                  }
                </span>
              </div>
              <div className="flex items-center self-stretch">
                <button
                  className="flex shrink-0 items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] pl-[12px] pr-[12px] mr-[49px] rounded-[20px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold mr-[9px]">
                    {"Подробнее"}
                  </span>
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/sr0yb83s_expires_30_days.png"
                    }
                    className="w-[16px] h-[16px] rounded-[20px] object-fill"
                  />
                </button>
                <div className="flex flex-1 flex-col items-start">
                  <div className="flex items-center mb-[7px] ml-[69px]">
                    <span className="text-[#292929] text-[18px] font-bold mr-[5px]">
                      {"$12.99"}
                    </span>
                    <span className="text-[#292929] text-[16px]">
                      {"$9.99"}
                    </span>
                  </div>
                  <div className="flex items-start self-stretch pl-[61px] pr-[2px]">
                    <span className="flex-1 text-[#292929] text-[12px]">
                      {"В наличии:"}
                    </span>
                    <span className="text-[#292929] text-[12px] font-bold">
                      {"599 шт."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center self-stretch">
              <div className="flex shrink-0 items-start mr-[82px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/29wolv6d_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] mr-[8px] object-fill"
                />
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/irzj43hc_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] object-fill"
                />
              </div>
              <div className="flex flex-1 items-start">
                <button
                  className="flex flex-col shrink-0 items-start bg-[#007AFF] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] mr-[8px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#FFFFFF] text-[14px] font-bold">
                    {"Купить"}
                  </span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-[#4378FF1A] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold">
                    {"В корзину"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/ei1sr4lk_expires_30_days.png"
            }
            className="self-stretch h-[1px] mb-[16px] object-fill"
          />
          <div className="self-stretch">
            <div className="self-stretch mb-[16px]">
              <div className="flex items-start self-stretch mb-[16px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/4acd1fp0_expires_30_days.png"
                  }
                  className="w-[56px] h-[56px] mr-[16px] object-fill"
                />
                <span className="flex-1 text-[#000000] text-[14px] mb-[1px]">
                  {
                    "[UA] Mega-VIP фарм 30 дней! 2 ФП; 30 заходов! Каждый день по 20 - 30 минут! Рандом друзей; 2FA; Много действий вне ФБ. Интересы.Категории..."
                  }
                </span>
              </div>
              <div className="flex items-center self-stretch">
                <button
                  className="flex shrink-0 items-center bg-[#007AFF] text-left pt-[8px] pb-[8px] pl-[12px] pr-[12px] mr-[49px] rounded-[20px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold mr-[9px]">
                    {"Подробнее"}
                  </span>
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/77gffsoj_expires_30_days.png"
                    }
                    className="w-[16px] h-[16px] rounded-[20px] object-fill"
                  />
                </button>
                <div className="flex flex-1 flex-col items-start">
                  <div className="flex items-center mb-[7px] ml-[69px]">
                    <span className="text-[#292929] text-[18px] font-bold mr-[5px]">
                      {"$12.99"}
                    </span>
                    <span className="text-[#292929] text-[16px]">
                      {"$9.99"}
                    </span>
                  </div>
                  <div className="flex items-start self-stretch pl-[61px] pr-[2px]">
                    <span className="flex-1 text-[#292929] text-[12px]">
                      {"В наличии:"}
                    </span>
                    <span className="text-[#292929] text-[12px] font-bold">
                      {"599 шт."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center self-stretch">
              <div className="flex shrink-0 items-start mr-[82px]">
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/3pg6vwyg_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] mr-[8px] object-fill"
                />
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/vuq7elji_expires_30_days.png"
                  }
                  className="w-[40px] h-[40px] object-fill"
                />
              </div>
              <div className="flex flex-1 items-start">
                <button
                  className="flex flex-col shrink-0 items-start bg-[#007AFF] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] mr-[8px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#FFFFFF] text-[14px] font-bold">
                    {"Купить"}
                  </span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-[#4378FF1A] text-left pt-[11px] pb-[11px] pl-[14px] pr-[14px] rounded-[12px] border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#007AFF] text-[14px] font-bold">
                    {"В корзину"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
