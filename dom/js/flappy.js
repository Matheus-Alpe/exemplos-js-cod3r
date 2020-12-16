function newElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

//função construtora
function Barrier(reverse = false) {
    this.elemento = newElement('div', 'barreira');

    const border = newElement('div', 'borda');
    const estructure = newElement('div', 'corpo');

    this.elemento.appendChild(reverse ? estructure : border);
    this.elemento.appendChild(reverse ? border : estructure);

    this.setAltura = altura => estructure.style.height = `${altura}px`;
}

//função construtora
function PairBarriers(height, opening, x) {
    this.elemento = newElement('div', 'par-de-barreiras');

    this.superior = new Barrier(true);
    this.inferior = new Barrier();

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.raffleOpening = () => {
        const superiorHeight = Math.random() * (height - opening);
        const inferiorHeight = height - opening - superiorHeight;

        this.superior.setAltura(superiorHeight);
        this.inferior.setAltura(inferiorHeight);
    };

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setX = x => this.elemento.style.left = `${x}px`;
    this.getWidth = () => this.elemento.clientWidth;

    this.raffleOpening();
    this.setX(x);
}

//função construtora
function Barriers(height, width, opening, spaceBetweenBarrier, notifyPoint) {
    this.pairs = [
        new PairBarriers(height, opening, width),
        new PairBarriers(height, opening, width + spaceBetweenBarrier),
        new PairBarriers(height, opening, width + spaceBetweenBarrier * 2),
        new PairBarriers(height, opening, width + spaceBetweenBarrier * 3),
    ];
    const deslocamento = 3;
    this.animation = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - deslocamento);

            //quando elemento sair da tela do jogo, 
            //reutilizar o msm par com sorteamento de abertura diferente
            if (pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + spaceBetweenBarrier * this.pairs.length);
                pair.raffleOpening();
            }

            const meio = width / 2;

            //essa lógica retorna uma booleano
            const cruzouOMeio = pair.getX() + deslocamento >= meio && pair.getX() < meio;
            if (cruzouOMeio) notifyPoint();
        });
    };
}

function Passaro(alturaJogo) {
    let voando = false;

    this.elemento = newElement('img', 'passaro');
    this.elemento.src = 'imgs/passaro.png';

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
    this.setY = y => this.elemento.style.bottom = `${y}px`;

    window.onkeydown = e => voando = true;
    window.onkeyup = e => voando = false;

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5);
        const alturaMaxima = alturaJogo - this.elemento.clientHeight;

        if (novoY <= 0) {
            this.setY(0);
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima);
        } else {
            this.setY(novoY);
        }
    }

    this.setY(alturaJogo / 2);
}

function Progresso() {
    this.elemento = newElement('span', 'progresso');
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos;
    }
    this.atualizarPontos(0);
}

function estaoSobreposto(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect();
    const b = elementoB.getBoundingClientRect();
    
    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
    const vertiacal = a.top + a.height >= b.top && b.top + b.height >= a.top;
    return horizontal && vertiacal;
}

function colidiu(passaro, barreiras) {
    let colidiu = false;
    barreiras.pairs.forEach(par => {
        if(!colidiu) {
            const superior = par.superior.elemento;
            const inferior = par.inferior.elemento;
            colidiu = estaoSobreposto(passaro.elemento, superior) 
                || estaoSobreposto(passaro.elemento, inferior);
        }
    });

    return colidiu;
}

function FlappyBird() {
    let pontos = 0;

    const areaJogo = document.querySelector('[wm-flappy]');
    const altura = areaJogo.clientHeight;
    const largura = areaJogo.clientWidth;

    const progresso = new Progresso();
    const passaro = new Passaro(altura);
    const barreiras = new Barriers(altura, largura, 200, 400, () => {
        progresso.atualizarPontos(++pontos);
    });

    areaJogo.appendChild(progresso.elemento);
    areaJogo.appendChild(passaro.elemento);
    barreiras.pairs.forEach(pair => areaJogo.appendChild(pair.elemento));


    this.start = () => {
        const temporizador = setInterval(() => {
            passaro.animar();
            barreiras.animation();

            if(colidiu(passaro, barreiras)) {
                clearInterval(temporizador);
            }
        }, 20);
    }
}

new FlappyBird().start();