import {Accordion, AccordionItem} from "@nextui-org/react";
import TableSection from "./TableSection";

export default function GridAcordion() {
  const itemClases={
    title:""
  }

  return (
    <Accordion  variant={"splitted"} >
      <AccordionItem key="1" aria-label="Accordion 1" title={ <span className=" text-white font-bold text-2xl">Número del portal</span> } style={{backgroundColor:"#182c6c"}} >
        <TableSection/>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title={ <span className=" text-white font-bold text-2xl">Tramos viales</span> } style={{backgroundColor:"#182c6c"}}>
      <TableSection/>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3"  title={ <span className=" text-white font-bold text-2xl">Parking</span> } style={{backgroundColor:"#182c6c"}}>
      <TableSection/>
      </AccordionItem>
    </Accordion>
  );
}
