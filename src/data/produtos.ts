export interface Produto {
  nome: string;
  descricao: string;
  peso: string;
  preco: string;
  foto: string; // caminho dentro de /public
}

// Para adicionar um produto, copie um bloco abaixo e cole no fim da lista.
export const produtos: Produto[] = [
  {
    nome: "Castanha assada com sal",
    descricao: "A clássica: assada no ponto e com sal na medida.",
    peso: "200 g",
    preco: "R$ 18,00",
    foto: "/img/placeholder.svg",
  },
  {
    nome: "Castanha assada sem sal",
    descricao: "Sabor puro do caju, ótima para o dia a dia.",
    peso: "200 g",
    preco: "R$ 18,00",
    foto: "/img/placeholder.svg",
  },
  {
    nome: "Castanha com pimenta",
    descricao: "Assada com um toque de pimenta para quem gosta de ardência.",
    peso: "200 g",
    preco: "R$ 20,00",
    foto: "/img/placeholder.svg",
  },
  {
    nome: "Pacote família",
    descricao: "Castanha assada com sal em pacote grande, para dividir.",
    peso: "500 g",
    preco: "R$ 40,00",
    foto: "/img/placeholder.svg",
  },
];
