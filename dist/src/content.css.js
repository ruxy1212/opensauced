import { createHotContext, updateStyle, removeStyle } from '../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/content.css.js");const __vite__id = "C:/xampp/htdocs/newClass/extensionproject/vite-project/src/content.css";
const __vite__css = ".crxbtn {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border: 1px solid #0000;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 5px 16px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  user-select: none;\r\n  margin-top: -0.5rem;\r\n  margin-bottom: 1rem;\r\n  color: #EEE;\r\n  background-image: linear-gradient(#FCB60A, #F69319 11.5%, #EF6D2A 30.5%, #ED5332 72.7%, #ED6A32 90.0%);\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.crxbtn:hover{\r\n  border: 1px solid;\r\n  opacity: 0.7;\r\n  text-decoration: none;\r\n}\r\nbutton + .crxbtn {\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0;\r\n}";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
