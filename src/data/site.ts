export const site = {
  nome: "Daniel da Castanha",
  descricao: "Castanha de caju assada na hora.",
  whatsapp: "558391264313",
  whatsappExibicao: "(83) 9126-4313",
  // Sem o @
  instagram: "daniel09072002",
};

// Links do menu e do rodapé, na ordem em que aparecem na página
export const nav = [
  { label: "Localidades", href: "#localidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export const linkWhatsapp = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const linkInstagram = `https://instagram.com/${site.instagram}`;
