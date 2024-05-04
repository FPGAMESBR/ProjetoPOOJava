import React from 'react';
import { useParams } from 'react-router-dom'; // Importando apenas o useParams

// Página YearDetails que exibe os detalhes do ano
function YearDetails() {
  let { year } = useParams();

  return (
    <div>
      <h2>Detalhes do Ano {year}</h2>
      {/* Adicione aqui o conteúdo detalhado sobre o ano */}
    </div>
  );
}

export default YearDetails;
