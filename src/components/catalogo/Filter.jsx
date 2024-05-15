import MultiSelect from "./MultiSelect";
import RGComponet from "./RadioGroup";
import DesdePicker from "./DesdeDate";
import HastaPicker from "./HastaDate";
import KeyWords from "./KeyWord";
import { CleanButton, SearchButton } from "./Buttons";

function Filter() {
  return (
    <main className="p-4 rounded-xl mb-8 bg-slate-200">
    <section>
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 flex-wrap"
      >
        <div
          className="flex flex-grow justify-center place-content-center items-center gap-8"
        >
    
          <MultiSelect />
     
          <div className="flex flex-col rounded-lg">
            <span
              className="text-center mb-2 items-center flex place-content-center"
            >
              Fecha de creación </span>
            <section className="flex gap-4">
              <DesdePicker />
             
              <HastaPicker />
            
            </section>
          </div>
          <KeyWords />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center mt-8 space-x-4">
        <RGComponet />
        <CleanButton />
        <SearchButton />
      </div>
    </section>
  </main>
  )
}

export default Filter