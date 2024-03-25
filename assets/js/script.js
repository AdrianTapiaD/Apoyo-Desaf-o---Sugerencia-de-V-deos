class Multimedia {
    constructor(url) {
        this._url = url;
    }

    getUrl() {
        return this._url;
    }

    setInicio(tiempo) {
        console.error('El método setInicio debe ser implementado en la subclase.');
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        const videoContainer = document.getElementById(this._id);
        if (!videoContainer) {
            console.error(`No se encontró el contenedor de video con el ID '${this._id}'.`);
            return;
        }

        const videoFrame = document.createElement('iframe');
        videoFrame.src = this._url;
        videoFrame.allowFullscreen = true;
        videoFrame.classList.add('embed-responsive-item');

        videoContainer.innerHTML = '';
        videoContainer.appendChild(videoFrame);
    }

    setInicio(tiempo) {
        const videoFrame = document.querySelector(`#${this._id} iframe`);
        if (!videoFrame) {
            console.error(`No se encontró el iframe de video con el ID '${this._id}'.`);
            return;
        }

        let src = videoFrame.src;
        if (src.includes('?')) {
            src = `${src}&start=${tiempo}`;
        } else {
            src = `${src}?start=${tiempo}`;
        }
        videoFrame.src = src;
    }
}

const musicaUrl = 'https://www.youtube.com/embed/My-WSM-6QlE?si=fqbulLLmBNJh8adY';
const peliculasUrl = 'https://www.youtube.com/embed/QqtHBNLWfew?si=UHKbFKxvhCNJrY3q';
const seriesUrl = 'https://www.youtube.com/embed/nwJ0tL8Fi-E?si=xnCXGx2SAWPW1mGw';

const musicaPlayer = new Reproductor(musicaUrl, 'musica');
const peliculasPlayer = new Reproductor(peliculasUrl, 'peliculas');
const seriesPlayer = new Reproductor(seriesUrl, 'series');

musicaPlayer.playMultimedia();
peliculasPlayer.playMultimedia();
seriesPlayer.playMultimedia();