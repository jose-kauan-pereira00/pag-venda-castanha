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
    nome: "Castanha Assada sem sal",
    descricao: "A clássica: assada no ponto e sem sal na medida.",
    peso: "30-35 g",
    preco: "R$ 5,00",
    foto: "/img/castanha1.jpg",
  },
  {
    nome: "Castanha Assada sem sal",
    descricao: "Sabor puro do caju, ótima para o dia a dia.",
    peso: "100-120 g",
    preco: "R$ 10,00",
    foto: "/img/castanha2.jpg",
  },
  {
    nome: "Castanha Assada sem sal",
    descricao: "Assada com um toque de pimenta para quem gosta de ardência.",
    peso: "200-220 g",
    preco: "R$ 20,00",
    foto: "/img/castanha3.jpg",
  },
  {
    nome: "Pacote Família",
    descricao: "Castanha assada sem sal em pacote grande, para dividir.",
    peso: "1 Kg",
    preco: "R$ 90,00",
    foto: "/img/castanha4.jpg",
  },
  {
    nome: "Quebradinha Promoção",
    descricao: "Castanha assada sem pacote grande, para dividir.",
    peso: "30-35 g cada",
    preco: "6 por R$ 25,00",
    foto: "/img/castanha5.jpg",
  },
  {
    nome: "Quebradinha Promoção",
    descricao: "Castanha assada sem sal em pacote grande, para dividir.",
    peso: "100-120 g cada",
    preco: "3 por R$ 25,00",
    foto: "/img/castanha6.jpg",
  },
];
