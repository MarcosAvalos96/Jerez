import * as React from "react";
import { Select, SelectItem, Tooltip } from "@nextui-org/react";
import { titulo } from "@constants/data";


export default function MultiSelect() {
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const placements = ["outside"];
  // Cuenta el número total de caracteres en personName
  const totalCharacters = personName.join("").length;

  const style =
    totalCharacters < 30
      ? { position: "relative", display: "inline-block" }
      : {};
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  place-content-center">
          {placements.map((placement) => (
            <Tooltip
              style={style}
              key={placement}
              placement="bottom"
              content={personName.join(", ")}
              offset={-150}
              crossOffset={-120}
            >
              <Select
                labelPlacement={placement}
                label="Título"
                placeholder="Seleciona los titulos deseados"
                selectionMode="multiple"
                className="max-w-xs"
                value={personName}
                onChange={handleChange}
              >
                {titulo.map((name) => (
                  <SelectItem key={name.value} value={name.value}>
                    {name.label}
                  </SelectItem>
                ))}
              </Select>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}