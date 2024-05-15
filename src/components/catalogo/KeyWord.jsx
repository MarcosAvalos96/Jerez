import {Select, SelectItem} from "@nextui-org/react";
import { keyWord } from "@constants/data";

export default function KeyWords() {
  const placements = [
    "outside",
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap items-center place-content-center md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Select
              labelPlacement={placement}
              label="Palabras clave"
              placeholder="Seleciona palabras clave"
              selectionMode="multiple"

              className="max-w-xs"
            >
              {keyWord.map((word) => (
                <SelectItem key={word.value} value={word.value}>
                  {word.label}
                </SelectItem>
              ))}
            </Select>
          ))}
        </div>
      </div>  
    </div>  
  );
}
