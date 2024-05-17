import { RadioGroup, Radio } from "@nextui-org/react";

export default function RGComponet() {
  return (
    <RadioGroup orientation="horizontal">
      <Radio value="buenos-aires">Que cumpla alguno de los filtros</Radio>
      <Radio value="sydney">Que cumpla todos los filtros</Radio>
    </RadioGroup>
  );
}
