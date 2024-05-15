import {Select, SelectItem} from "@nextui-org/react";
import { titulo } from "@constants/data";

export default function MultiSelect() {
  const placements = [

    "outside",

  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  place-content-center">
          {placements.map((placement) => (
            <Select
              labelPlacement={placement}
              label="Título"
              placeholder="Seleciona los titulos deseados"
              selectionMode="multiple"

              className="max-w-xs"
            >
              {titulo.map((name) => (
                <SelectItem key={name.value} value={name.value}>
                  {name.label}
                </SelectItem>
              ))}
            </Select>
          ))}
        </div>
      </div>  
    </div>  
  );
}
