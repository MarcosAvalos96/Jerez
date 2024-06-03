import AdvCreado from "./AdvCreado";
import AdvTema from "./AdvTema";
import AdvFormato from "./AdvFormato";



const AdvContent = () => {
  return (
    <main className=" pt-8 pb-20">
             <h2
    class="text-primary text-center  text-left  font-bold text-2xl leading-tight py-4"
  >
    Búsqueda Avanzada
  </h2>
  <div className=" flex flex-row justify-between  gap-8">
 

 <AdvTema/>
 <AdvCreado/>
 <AdvFormato/>
</div>
    </main>
  
  )
}

export default AdvContent