import AddFilesModal from "../AddFilesModal";
import { useDisclosure } from "@nextui-org/react";


const AddFiles = ({titulo ="", image ="https://pngimg.com/d/plus_PNG115.png", descargarB = "Descargar", verB="Ver", Eliminar="Eliminar"}) => {
  
const {isOpen, onOpen, onOpenChange}= useDisclosure()
return (
      <div className="rounded-xl p-4 group bg-slate-200/80 flex flex-col place-content-center ">
        <p className="text-Azul text-center text-2xl mb-2 font-semibold">{titulo}</p>
  
       <img src={image} alt="pdf Image" onClick={onOpen}
                 className="  cursor-pointer h-fit w-full transition-all ease-in rounded-lg "
                 />
      <div className=" text-center font-normal">
      <p className=" text-lg font-normal text-Azul text-center">Presiona el butón para agregar llenar los datos y agregar un archivo</p>
      </div>
      <AddFilesModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};

export default AddFiles;
