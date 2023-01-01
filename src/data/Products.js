export const products = [
  {
    id: 1,
    title: "A33",
    img: "https://images.fravega.com/f500/00b618b11e945da02e5b927b1e9747a6.jpg",
    desc: "Samsung A33",
    price: 30000,
    category: "Phone",
  },
  {
    id: 2,
    title: "Auriculares ECHO",
    img: "https://static.wixstatic.com/media/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg/v1/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_9a2583f0a17e48efb075913d90da0dbf~mv2.jpg",
    desc: "Sonido envolvente",
    price: 350,
    category: "Audio",
  },
  {
    id: 3,
    title: "Auriculares E5",
    img: "  https://static.wixstatic.com/media/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg/v1/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_c72ff914003b481ea856501f453e2bb3~mv2.jpg",
    desc: "Sonido unico",
    price: 800,
    category: "Audio",
  },
  {
    id: 4,
    title: "Silla Gamer Impact",
    img: "  https://static.wixstatic.com/media/c837a6_5f84ce55a94f43e5a61445ef199f37e6~mv2.jpg/v1/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_5f84ce55a94f43e5a61445ef199f37e6~mv2.jpg",
    desc: "Impact Gamer",
    price: 80210,
    category: "Sillas",
  },
  {
    id: 5,
    title: "Teclado mecanico espartano",
    img: " https://static.wixstatic.com/media/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg/v1/fill/w_354,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_7c11d47692f04c1f92a024ad095274ae~mv2.jpg",
    desc: "Impact Gamer",
    price: 8400,
    category: "Teclado",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
