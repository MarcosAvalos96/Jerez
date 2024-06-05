import React, { useState, useEffect, useRef } from "react";
import { Image } from "astro:assets";

import FileImage from "@assets/images/Docs/pdf.webp";
export default function ContenidoDocumentosReact() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  };

  return (
    <div>
      <div className="py-10">
        <main className="mx-auto py-4">
          <div class="card-body text-center"></div>
        </main>
      </div>
    </div>
  );
}
