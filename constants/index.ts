import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "PostgreSQL",
    Image: "/postges.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Projects = [
  {
    title: "Robô de criptomoedas",
    text: "Protótipo de um bot que monitora compra e venda de criptomoedas no mercado Binance Spot. https://github.com/pedrodevjourney/cripto",
    src: "projcrypto.jpeg",
  },
  {
    title: "Cardápio online",
    text: "O site oferece uma interface fácil e responsiva para uma boa experiência do usuário, com integração da API do Whastapp.",
    src: "/cardapio.png",
  },
  {
    title: "Landing Page",
    text: "Projeto de landing page, construído com responsividade e utilizando bibliotecas de animação.",
    src: "/landingpage.png",
  },
  {
    title: "Consumindo API Viacep",
    text: "Cadastro de dados, consumindo API viacep, que localiza cidade do cadastrante. ",
    src: "/cadastro.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];