import Clean from "@assets/icons/catalogo/Clean";
import Search from "@assets/icons/catalogo/Search";
import {Button} from "@nextui-org/react";



// Botón para limpiar filtros o datos
const CleanButton = () => (
    <Button startContent={<Clean/> }  className=" bg-Fondo text-textColor shadow-md">
    Limpiar
  </Button>
);

// Botón para iniciar una búsqueda
const SearchButton = () => (
    <Button startContent={<Search/> }  className=" bg-primary text-white shadow-md">
    Buscar
  </Button>
);



export { CleanButton, SearchButton };
