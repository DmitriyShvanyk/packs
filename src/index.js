import "./index.css";
import Preloader from "./modules/preloader.js";
import PackList from "./modules/packList.js";

export const initialCards = [
  {
    id: 1,
    image: 'https://dmitriyshvanyk.github.io/packs/images/device.svg',
    title: 'Mobile',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: '10'
  },
  {
    id: 2,
    image: 'https://dmitriyshvanyk.github.io/packs/images/laptop.svg',
    title: 'Desktop',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: '15'
  },
  {
    id: 3,
    image: 'https://dmitriyshvanyk.github.io/packs/images/monitor.svg',
    title: 'Tv',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    price: '20'
  }
];


// preloader
const preloader = new Preloader();
const preloaderPage = document.querySelector('.preloader');
const preloaderPageHidden = 'preloader--hidden';

preloader.load(1000).then(function () {
  preloaderPage.classList.add(preloaderPageHidden);
}).catch(function () {
  preloaderPage.classList.remove(preloaderPageHidden);
});


// packList
const packsContainer = document.querySelector('.packs__columns');
const packList = new PackList(packsContainer, initialCards);
packList.render();