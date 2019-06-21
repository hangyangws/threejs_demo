import WEBGL from './check';
// import cube from './demo/cube';
import line from './demo/line';

import './base.css';

if (WEBGL.isWebGL2Available() === false) {
  document.body.appendChild(WEBGL.getWebGL2ErrorMessage());
} else {
  line();
}
