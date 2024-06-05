


const MFiles = ({titulo ="Nombre del PDF",description="Descripción breve del archivo", image ="https://png.pngtree.com/png-clipart/20220612/original/pngtree-pdf-file-icon-png-png-image_7965915.png", descargarB = "Descargar", verB="Ver", Eliminar="Eliminar"}) => {
  return (
      <div className="rounded-xl p-4 group bg-slate-200/80 flex flex-col place-content-center ">
        <p className="text-Azul text-center text-2xl font-semibold">{titulo}</p>
  
       <img src={image} alt="pdf Image"
                 className="group-hover:translate-y-1 cursor-pointer h-3/4 w-full transition-all ease-in rounded-lg "
                 />
      <div className=" text-center font-normal">
        <p className="text-Azul text-center pb-2 text-lg text-pretty ">{description}</p>
        <div className="justify-center items-center flex flex-col lg:flex-row gap-4 flex-wrap">
          <button className="p-4 rounded-xl bg-primary text-Fondo">{descargarB}</button>
          <button className="p-4 rounded-xl bg-red-600 text-Fondo">{Eliminar}</button>
        </div>
      </div>
    </div>
  );
};

export default MFiles;
