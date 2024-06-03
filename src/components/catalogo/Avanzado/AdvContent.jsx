import AdvCreado from "./AdvCreado";
import AdvTema from "./AdvTema";
import AdvFormato from "./AdvFormato";



const AdvContent = () => {
  return (
    <main className=" pt-8 ">

  <div className=" flex flex-row justify-between  gap-8">
 

 <AdvTema/>
 <AdvCreado/>
 <AdvFormato/>
</div>
    </main>
  
  )
}

export default AdvContent