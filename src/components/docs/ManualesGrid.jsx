

const  ManualesGrid=({children})=> {
  return (
     <main
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-xl p-6"
  >
  {children}
  </main>
  )
}

export default ManualesGrid