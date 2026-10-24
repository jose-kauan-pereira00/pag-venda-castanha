export interface Local {
  nome: string;
  endereco: string;
  horarios: { dias: string; horas: string }[];
  foto: string; 
}

export const locais: Local[] = [
  {
    nome: "Açude Velho",
    endereco: "Centro, Campina Grande - Paraíba",
    horarios: [
      { dias: "Todos os Dias da Semana", horas: "9 às 18h" },
    ],
    foto: "/img/acude.jpg",
  },
  {
    nome: "Centro - Campina Grande",
    endereco: "Centro, Campina Grande - Paraíba",
    horarios: [
      { dias: "Todos os Dias da Semana", horas: "9 às 18h" },
    ],
    foto: "/img/centro.jpg",
  },
  {
    nome: "Catolé - Campina Grande",
    endereco: "Catolé, Campina Grande - Paraíba",
    horarios: [
      { dias: "Todos os Dias da Semana", horas: "9 às 18h" },
    ],
    foto: "/img/catole.jpg",
  },
];
