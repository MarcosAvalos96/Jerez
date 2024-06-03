import { DatosTable } from "@constants/data"
import VerModal from "./VerModal"

const TableSection = () => {
  return (
    <>
    <div className="container px-4 mx-auto sm:px-8">
  <div >
    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
        <table className="min-w-full leading-normal ">
          <thead>
            <tr>
            <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Título
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Creado
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Formato
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Abstract
              </th>

              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Visualizar
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Descargar
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left  text-textColor uppercase bg-white border-b border-gray-200"
              >
                Metadatos
              </th>
            </tr>
          </thead>

          <tbody>
            {DatosTable.map(dato =>{ return(
                <tr key={dato.title}>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                     <div className="flex items-center">
                       <div className="ml-3">
                         <p className=" text-textColor whitespace-no-wrap">{dato.title}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                     <div className="flex items-center">
                       <div className="ml-3">
                         <p className=" text-textColor whitespace-no-wrap">{dato.creado}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                     <p className=" text-textColor whitespace-no-wrap">{dato.formato}</p>
                   </td>
                   <td
                     className="px-5 py-7 text-xs bg-white border-b border-gray-200  flex flex-row gap-2"
                   >
                     <p
                       className=" text-textColor whitespace-no-wrap bg-slate-200 px-2 rounded-full"
                     >
                       {dato.keyword}
                     </p>
                   
                   </td>
     
                   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                     <span
                       className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                     >
                       <span
                         aria-hidden="true"
                         className="absolute inset-0 bg-YellowPrimary rounded-full opacity-50"
                       >
                       </span>
                       <span className="relative">{dato.vizualizar}</span>
                     </span>
                   </td>
                   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                     <span
                       className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                     >
                       <span
                         aria-hidden="true"
                         className="absolute inset-0  bg-slate-400 rounded-full opacity-50"
                       >
                       </span>
                       <span className="relative text-center ">{dato.descargar}</span>
                   
                     </span>
                   </td>

                   <td className="px-5   bg-white border-b border-gray-200">
                      
<VerModal/>                   
                   </td>
                 </tr>
            )
            
            })}
           

       
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default TableSection