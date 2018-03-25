import FontFaceObserver from 'fontfaceobserver';
import './default.scss';

const FONT_LOADED_CLASS = 'theme-default-font-loaded';

const bodyFont = new FontFaceObserver('Merriweather', {
  weight: 400,
});

const displayFont = new FontFaceObserver('Archivo Narrow', {
  weight: 400,
});

Promise.all([bodyFont.load(), displayFont.load()])
  .then(() => {
    document.body.classList.add(FONT_LOADED_CLASS);
  })
  .catch(() => {
    document.body.classList.remove(FONT_LOADED_CLASS);
  });
