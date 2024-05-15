
import {DatePicker} from "@nextui-org/react";

export default function DesdePicker() {
  const placements = [
    "outside",
  ];

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex w-full  flex-wrap items-center place-content-center md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <DatePicker 
              label={"Desde"} 
              className=" max-w-[300px]"
              labelPlacement={placement}
            />
          ))}
        </div>
      </div>  
    </div>  
  );
}
