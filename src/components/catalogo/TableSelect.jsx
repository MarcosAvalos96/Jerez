import {Select, SelectItem} from "@nextui-org/react";
import { formato } from "@constants/data";

export default function TableSelect() {
  return (
    <Select
      items={formato}
      placeholder="Select a format"
      className="max-w-xs transition-all text-textColor"
    >
      {(tSelect) => <SelectItem key={tSelect.value}>{tSelect.label}</SelectItem>}
    </Select>
  );
}
