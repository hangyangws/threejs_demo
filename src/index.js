import WEBGL from './check';
import start from './start';

if (WEBGL.isWebGL2Available() === false) {
  document.body.appendChild(WEBGL.getWebGL2ErrorMessage());
} else {
  start();
}
