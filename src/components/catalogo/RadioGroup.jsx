
import {RadioGroup, Radio} from "@nextui-org/react";

export default function RGComponet() {
  return (
    <RadioGroup
      orientation="horizontal"
    >
      <Radio value="buenos-aires">Aplicar solo algunos filtros</Radio>
      <Radio value="sydney">Aplicar todos los filtros</Radio>
   
    </RadioGroup>
  );
}
