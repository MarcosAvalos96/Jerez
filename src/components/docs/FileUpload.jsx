import  { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log('Archivo subido:', file.name);
    } else {
      console.log('No se seleccionó ningún archivo');
    }
  };

  return (
      <form className="p-6 bg-white rounded items-center flex flex-col " onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-Azul text-center text-sm">Subir archivo</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-Azul"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white  bg-SoftBlue rounded hover:bg-Azul"
        >
          Subir
        </button>
      </form>
  );
};

export default FileUpload;
