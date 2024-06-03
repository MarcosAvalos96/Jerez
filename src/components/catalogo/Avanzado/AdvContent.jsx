import AdvCreado from "./AdvCreado";
import AdvTema from "./AdvTema";
import AdvFormato from "./AdvFormato";
import AdvCreadoSelect from "./AdvCreadoSelect";

const AdvContent = () => {
  return (
    <main className=" pt-8 ">
      <div className=" flex flex-row justify-between  gap-8">
        <AdvTema />
        <AdvFormato />
        <AdvCreadoSelect />
      </div>
    </main>
  );
};

export default AdvContent;
