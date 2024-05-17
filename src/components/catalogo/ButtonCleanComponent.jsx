import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./animals.jsx";
import Clean from "@assets/icons/catalogo/Clean";
import Search from "@assets/icons/catalogo/Search";
import { Button } from "@nextui-org/react";

export default function ButtonCleanComponent({ click }) {
  return (
    <Button
      onClick={(e) => click(e)}
      startContent={<Clean />}
      className=" bg-Fondo text-textColor shadow-md"
    >
      Limpiar
    </Button>
  );
}
