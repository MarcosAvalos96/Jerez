
import {DatePicker} from "@nextui-org/react";

export default function AdvCreado() {


  return (
    <div className="flex flex-col gap-2 bg-slate-200 p-4 rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap  items-center place-content-center md:flex-nowrap mb-6 md:mb-0 gap-4">
          
            <DatePicker 
              label={"Creado"} 
              className="max-w-xs text-center"
              labelPlacement={"outside"}
            />
       
        </div>
      </div>  
    </div>  
  );
}
