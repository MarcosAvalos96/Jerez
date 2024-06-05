
import {Input, DatePicker} from "@nextui-org/react";
import FileUpload from "./FileUpload";

function ContenidoModal() {

    
  return (
 
    <div className="flex flex-col">
      <div className="flex w-full pt-2 flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
          
            type="text"
            label="Agrega el titulo"
            labelPlacement={"outside"}
            placeholder="Título"
          />
      </div>
      <div className="flex w-full pt-2 flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
          
            type="text"
            label="Agrega descripción"
            labelPlacement={"outside"}
            placeholder="Descripcion"
          />
      </div>
      <div className="flex w-full pt-2 flex-wrap  items-center place-content-center md:flex-nowrap mb-6 md:mb-0 gap-4">
        
            <DatePicker 
              label={"Fecha de creación"} 
              className="max-w-xs text-center"
              labelPlacement={"outside"}
            />
        
        </div>
        <FileUpload/>
    </div>  

  )
}

export default ContenidoModal
