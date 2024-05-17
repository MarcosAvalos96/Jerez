import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { titulo } from "@constants/data";

export default function MultiselectControlado({ values, setValues }) {
  const totalCharacters = Array.isArray(values) ? values.join("").length : 0;

  const style =
    totalCharacters < 30
      ? { position: "relative", display: "inline-block" }
      : {};
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  place-content-center">
          <Tooltip
            style={style}
            key="outside"
            placement="bottom"
            content={Array.isArray(values) ? values.join(", ") : ""}
            offset={-150}
            crossOffset={-120}
          >
            <Select
              labelPlacement="outside"
              label="Título"
              placeholder="Seleciona los titulos deseados"
              selectionMode="multiple"
              className="max-w-xs"
              selectedKeys={values}
              onSelectionChange={setValues}
            >
              {titulo.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
