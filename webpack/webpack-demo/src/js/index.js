import '../css/index.scss' //importing css for webpeck
import '../img'; //importing imgs for webpeck
import img from '../img/bg.png'

const component = () => {
  const element = document.createElement('div');

  const nome = 'Matheus'
  element.innerHTML = `Olá ${nome}`;
  element.classList.add('hello');

  return element;
}

const imgComponent = () => {
  const elImg = new Image(300, 300);
  elImg.src = "../"+img;
  return elImg;
}


document.body.appendChild(component());
document.body.appendChild(imgComponent());