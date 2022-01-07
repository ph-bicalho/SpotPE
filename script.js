//               VARIÁVEIS
let musicas = [{titulo: 'Streetcar - Daniel Caesar', src: 'Streetcar - Daniel Caesar.mp3', album:'OIP.jfif'},
               {titulo:'Fall In Love With You - Montell Fish', src:'Fall In Love With You - Montell Fish.mp3', album: 'OIP2.jfif'}, 
               {titulo:'Leon Bridges - Coming Home', src:'Leon Bridges - Coming Home.mp3', album: 'OIP3.jfif'}, 
               {titulo:'Like A Star - Raury', src:'Like A Star - Raury.mp3', album: 'OIP4.jfif'},
               {titulo:'Like I Want You - Giveon - Raury', src:'Like I Want You - Giveon.mp3', album: 'OIP5.jfif'}];

let indexMusica = 0;
let nomeMusica = document.querySelector('h2');
let musica = document.querySelector('audio');
let album = document.getElementById('Cover');

//          EVENTOS


document.getElementById('play').addEventListener('click' , iniciarMusica);

document.getElementById('pause').addEventListener('click' , pausarMusica);

document.getElementById('volume-control'). addEventListener('onchange', mudarVolume)

document.querySelector('#back').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 4;
    }
    renderizarMusica(indexMusica);
}, iniciarMusica);

document.querySelector('#next').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 4){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('#volume').addEventListener('mouseenter', controleVolume)

musica.addEventListener('timeupdate', atualizarBarra)

//        FUNÇÕES


function iniciarMusica(){
    musica.play()

    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
}

function pausarMusica(){
    musica.pause()

    document.getElementById('play').style.display = 'inline-block';
    document.getElementById('pause').style.display = 'none';
}

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        album.src = musicas[index].album;
    });
}
function controleVolume() {
    document.getElementById('volume-control').style.display = 'inline-block';
}
function mudarVolume(amount){
        musica.volume = amount;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = (musica.currentTime / musica.duration) * 100 + '%';
}