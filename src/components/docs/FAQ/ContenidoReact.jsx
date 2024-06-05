import React, { useState, useEffect, useRef } from "react";

export default function ContenidoReact() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const matchesRef = useRef([]);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false); // Estado para el enfoque

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToMatch = (element) => {
    const rect = element.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!isInView) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    countMatches(term);
  };

  const countMatches = (term) => {
    if (!term) {
      setResultCount(0);
      setCurrentIndex(0);
      return;
    }
    matchesRef.current = Array.from(
      document.querySelectorAll("mark.highlight")
    );
    setResultCount(matchesRef.current.length);
    setCurrentIndex(matchesRef.current.length > 0 ? 1 : 0);
  };

  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark
          key={index}
          className="highlight"
          style={{ backgroundColor: "yellow" }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setResultCount(0);
    setCurrentIndex(0);
  };

  const nextMatch = () => {
    if (resultCount === 0) return;
    const nextIndex = (currentIndex % resultCount) + 1;
    setCurrentIndex(nextIndex);
    //Comentar esto si quieres activar el scroll automatico y descomentarlo del useeffect
    /*  matchesRef.current[nextIndex - 1].scrollIntoView({
      behavior: "smooth",
      block: "center",
    }); */
    const nextElement = matchesRef.current[nextIndex - 1];
    scrollToMatch(nextElement);
  };

  const previousMatch = () => {
    if (resultCount === 0) return;
    const prevIndex = currentIndex === 1 ? resultCount : currentIndex - 1;
    setCurrentIndex(prevIndex);
    //Comentar esto si quieres activar el scroll automatico y descomentarlo del useeffect
    /* matchesRef.current[prevIndex - 1].scrollIntoView({
      behavior: "smooth",
      block: "center",
    }); */
    //hasta aquí
    //esto de aquí previene le movimiento de la pantalla prematuro con los primeros elementos lo mismo para el nextMatc
    const prevElement = matchesRef.current[prevIndex - 1];
    scrollToMatch(prevElement);
  };

  useEffect(() => {
    countMatches(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (currentIndex > 0) {
      matchesRef.current.forEach((match, index) => {
        if (index + 1 === currentIndex) {
          match.classList.add("highlight-current");
          //esto activa el scroll automatico al comenzar a buscar y comentar las otras de previous match y next
          /* match.scrollIntoView({
            behavior: "smooth",
            block: "center",
          }); */
        } else {
          match.classList.remove("highlight-current");
        }
      });
    }
  }, [currentIndex]);

  const estilos = {
    titulo: {
      color: "#22397d",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: "2.5rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
    Divinput: {
      position: "relative",
      width: "100%",
      maxWidth: "24rem",
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      width: "100%",
      paddingLeft: "1rem",
      paddingRight: "3rem",
      paddingTop: "0.5rem" /* 8px */,
      paddingBottom: "0.5rem" /* 8px */,
      borderWidth: "1px",
      borderColor: "rgb(209 213 219)",
      borderRadius: "9999px",
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
    inputfocus: {
      outline: "2px solid #155ab9" /* ring-2 ring-[#155ab9] */,
    },
    resultCount: {
      fontSize: "0.875rem",
      color: "#22397d",
      padding: "0.2rem 0.5rem",
    },
    iconContainer: {
      position: "absolute",
      right: "0.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    icon: {
      cursor: "pointer",
    },
  };

  return (
    <div>
      <style>
        {`
          .highlight-current {
            background-color: orange !important;
          }
          .sticky {
            position: -webkit-sticky; /* for Safari */
            position: sticky;
            top: 0;
            background: white;
            z-index: 1000;
            padding: 10px;
          
          }
        `}
      </style>
      <h2 style={estilos.titulo}>Preguntas Frecuentes</h2>
      <section
        className={`flex items-center justify-center pt-2 ${
          isSticky ? "sticky" : ""
        }`}
        ref={inputRef}
      >
        <div
          className={`flex items-center justify-center pt-2 ${
            isSticky ? "sticky" : ""
          }`}
          ref={inputRef}
          style={estilos.Divinput}
        >
          <div style={estilos.inputContainer}>
            <input
              type="text"
              placeholder="Busca algo"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                ...estilos.input,
                ...(isFocused ? estilos.inputfocus : {}),
              }}
            />
            {searchTerm && (
              <div style={estilos.iconContainer}>
                <div style={estilos.resultCount}>
                  {currentIndex}/{resultCount}
                </div>
                <svg
                  onClick={previousMatch}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-Azul cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
                <svg
                  onClick={nextMatch}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-Azul cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-Azul cursor-pointer"
                  onClick={clearSearch}
                  style={estilos.icon}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.06 10.5l4.714 4.715a.75.75 0 01-1.06 1.06L12 11.475l-4.715 4.714a.75.75 0 01-1.06-1.06L10.94 10.5 6.225 5.785a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="py-10">
        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText(
              "¿Qué es y para qué sirve el Geoportal?",
              searchTerm
            )}
          </h6>
          <p className="py-1">
            {highlightText(
              "El Geoportal es una solución tecnológica de infraestructura de datos espaciales (IDE). Este sistema permite buscar, visualizar y consultar datos geoespaciales integrados en un mapa. Una de sus principales características es que está basada en los estándares de servicios de la OGC (Open Geospatial Consortium), lo que permite integrar múltiples fuentes de datos (WFS, CSW, WMS, WMTS y TMS) en un mismo mapa, haciéndolo sencilla su usabilidad por el usuario.",
              searchTerm
            )}
          </p>
          <p className="py-1">
            {highlightText(
              "La solución es accesible desde los navegadores más populares del mercado y puede ser utilizado en dispositivos móviles que tengan conectividad.",
              searchTerm
            )}
          </p>
        </main>
        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText("¿Cómo se accede al Geoportal?", searchTerm)}
          </h6>

          <section className="py-4">
            <ul className="py-1 px-14 space-y-4">
              <li className="py-1 list-disc">
                {highlightText(
                  "Abrir el navegador. Utilizar cualquier navegador web como Chrome, Firefox, Safari o Edge.",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Escribir el enlace. Ingresar la dirección web en la barra de direcciones en la parte superior del navegador. El enlace a escribir es: https://ide.jerez.es",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Presionar la tecla <Enter>: Una vez que se haya ingresado el enlace en el navegador, presione la tecla <Enter> en el teclado.",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Esperar la imagen inicial: En unos segundos, se podrá observar la página de inicio y ya se podrá comenzar a navegar.",
                  searchTerm
                )}
              </li>
            </ul>
          </section>
          {/* <span className="italic px-8">
            {highlightText(
              "Cuando hay una nota al final de todo o de la lista",
              searchTerm
            )}
          </span> */}
        </main>

        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText(
              "¿Se Necesita estar registrado o tener una cuenta de usuario para acceder al Geoportal?",
              searchTerm
            )}
          </h6>
          <p className="py-1">
            {highlightText(
              "No se requiere estar registrado ni tener una cuenta de usuario para acceder al Geoportal para acceder al contenido público. El Geoportal permite a los usuarios navegar y consultar la información disponible sin necesidad de realizar ningún proceso de registro o inicio de sesión. Esto facilita el acceso a los datos y recursos que ofrece, promoviendo un uso más libre y accesible de la información.",
              searchTerm
            )}
          </p>
        </main>
        <main className="mx-auto py-4"></main>
        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText("¿Cómo iniciar sesión en Geobint web?", searchTerm)}
          </h6>
          <p className="py-1">
            {highlightText(
              "Para acceso a información que no es pública, desde la pantalla inicial de Geobint web, diríjase al menú superior derecho y hacer clic en el botón iniciar sesión.",
              searchTerm
            )}
          </p>
          <p className="py-1">
            {highlightText(
              "Se abrirá una ventana donde se deberá introducir el nombre de usuario y contraseña. Después de ingresar la información requerida, hacer clic en el botón Login para acceder a la cuenta.",
              searchTerm
            )}
          </p>
        </main>

        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText(
              "¿Cómo cambiar el idioma de la interfaz?",
              searchTerm
            )}
          </h6>
          <p className="py-1">
            {highlightText(
              "Para cambiar el idioma de la interfaz, dirigirse al menú superior derecho y hacer clic en el primer botón de la izquierda y se desplegará un menú que posibilitará cambiar el idioma. Al seleccionar el idioma deseado la interfaz se actualizará con el nuevo idioma seleccionado.",
              searchTerm
            )}
          </p>
        </main>
        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText("¿Cómo se busca un mapa?", searchTerm)}
          </h6>
          <p className="py-1">
            {highlightText(
              "Dentro de la sección Visor de mapas aparece una barra de búsqueda. Aquí podrás escribir el término requerido en la caja de texto. A continuación, presione la tecla <Enter> en el teclado o haga clic en el botón de búsqueda para iniciar la búsqueda del mapa deseado.",
              searchTerm
            )}
          </p>
        </main>
        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText(
              "¿Cómo identificar mi posición aproximada en el mapa?",
              searchTerm
            )}
          </h6>

          <section className="py-4">
            <p className="font-semibold px-8">
              {highlightText(
                "Para identificar su posición aproximada en el mapa debe de seguir los siguientes pasos:",
                searchTerm
              )}
            </p>
            <ul className="py-1 px-14 space-y-4">
              <li className="py-1 list-disc">
                {highlightText(
                  "Presionar el primer botón de la barra de navegación: Este botón solicita permisos a través del navegador para acceder a su ubicación.",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Visualizar su ubicación en el mapa: Una vez concedidos los permisos, en el mapa se mostrará su ubicación aproximada con un punto. Si la precisión es baja, también aparecerá un círculo semitransparente que indica el área dentro de la cual se encuentra.",
                  searchTerm
                )}
              </li>
            </ul>
          </section>
          <span className="italic px-8">
            {highlightText(
              "Nota: En dispositivos no móviles (como ordenadores de escritorio o portátiles) que no tienen sistema de posicionamiento (GPS), la ubicación se determina a partir de la conexión a internet.",
              searchTerm
            )}
          </span>
        </main>

        <main className="mx-auto py-4">
          <h6 className="text-xl font-semibold text-Azul">
            {highlightText("¿Cómo desplazarse dentro del mapa?", searchTerm)}
          </h6>
          <p className="py-1">
            {highlightText(
              "Esta función permite explorar diferentes áreas del mapa de manera fácil y fluida.",
              searchTerm
            )}
          </p>

          <section className="py-4">
            <p className="font-semibold px-8">
              {highlightText(
                "Para desplazarse dentro del mapa debe de seguir los siguientes pasos:",
                searchTerm
              )}
            </p>
            <ul className="py-1 px-14 space-y-4">
              <li className="py-1 list-disc">
                {highlightText(
                  "Hacer clic en cualquier parte del mapa.",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Mantener presionado el botón del ratón externo o ratón integrado en su ordenador (touchpad).",
                  searchTerm
                )}
              </li>
              <li className="py-1 list-disc">
                {highlightText(
                  "Arrastrar el mapa en la dirección deseada: Puede moverse horizontal o verticalmente manteniendo el clic y desplazándose en la dirección se prefieras.",
                  searchTerm
                )}
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
