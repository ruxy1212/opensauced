import src from './image.png.js';
import './content.css.js';

const html = `
<div class="crx">
    <img src="${chrome.runtime.getURL(src)}" />
</div>
`;

const doc = new DOMParser().parseFromString(html, 'text/html');
document.body.append(doc.body.firstElementChild);
