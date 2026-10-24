export interface Local {
  nome: string;
  endereco: string;
  horarios: { dias: string; horas: string }[];
  foto: string; // caminho dentro de /public
}

// Para adicionar um local, copie um bloco abaixo e cole no fim da lista.
export const locais: Local[] = [
  {
    nome: "Açude Velho",
    endereco: "Centro, Campina Grande - Paraíba",
    horarios: [
      { dias: "Sábado", horas: "18h às 22h" },
      { dias: "Domingo", horas: "18h às 22h" },
    ],
    foto: "/img/acude.jpg",
  },
  {
    nome: "Praça da Matriz",
    endereco: "Praça Exemplo, s/n",
    horarios: [
      { dias: "Segunda a sexta", horas: "16h às 21h" },
      { dias: "Sábado", horas: "16h às 22h" },
    ],
    foto: "/img/placeholder.svg",
  },
  {
    nome: "Ponto da Avenida",
    endereco: "Av. Exemplo, 456, Bairro Novo",
    horarios: [{ dias: "Segunda a sábado", horas: "8h às 18h" }],
    foto: "/img/placeholder.svg",
  },
];
