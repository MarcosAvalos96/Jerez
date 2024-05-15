import {Accordion, AccordionItem} from "@nextui-org/react";
import TableSection from "./TableSection";

export default function GridAcordion() {

  return (
    <Accordion  variant={"splitted"} >
      <AccordionItem key="1" aria-label="Accordion 1" title={ <span className=" text-white font-bold text-2xl">Resultado de la busqueda</span> } style={{backgroundColor:"#182c6c"}} >
        <TableSection/>
      </AccordionItem>
    </Accordion>
  );
}
