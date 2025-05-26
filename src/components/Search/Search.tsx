"use client";
const Search = () => {
  return (
    <div className="flex items-center self-stretch bg-[#FFFFFF] pt-[15px] pb-[15px] pl-[16px] pr-[16px] rounded-[12px] border-[1px] border-solid border-[#0000001A]">
      <img
        src={
          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/a4juVXIlNu/dv38lvhd_expires_30_days.png"
        }
        className="w-[20px] h-[20px] mr-[8px] rounded-[12px] object-fill"
      />
      <input
        placeholder={"Поиск по магазину"}
        // value={input1}
        // onChange={(event) => onChangeInput1(event.target.value)}
        className="flex-1 self-stretch text-[#A1ACB0] bg-transparent text-[16px] border-0"
      />
    </div>
  );
};

export default Search;
