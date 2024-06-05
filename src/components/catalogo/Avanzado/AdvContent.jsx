import AdvTema from "./AdvTema";
import AdvFormato from "./AdvFormato";
import AdvCreadoSelect from "./AdvCreadoSelect";
import Publisher from "./Publisher";
import Subject from "./Subject";
import Contrigutr from "./Contrigutr";
const AdvContent = () => {
  //estilo CSS
  const estilos = {
    contenedor: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "2rem",
      width: "100%",
    },
  };
  return (
    <main className=" pt-8 ">
      <div
        style={estilos.contenedor}
        /* este
        es
        estilo
        de
        tailWind
        */
        className="flex flex-column justify-between  gap-8"
      >
        <AdvCreadoSelect />
        <Publisher />
        <Contrigutr />
        <AdvFormato />
        <Subject />
        <AdvTema />
      </div>
    </main>
  );
};

export default AdvContent;
