import { createHotContext, updateStyle, removeStyle } from '../../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/dist/src/content.css.js");const __vite__id = "C:/xampp/htdocs/newClass/extensionproject/vite-project/dist/src/content.css";
const __vite__css = ".crx img {\r\n    width: 3rem;\r\n    height: 3rem;\r\n  }";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
