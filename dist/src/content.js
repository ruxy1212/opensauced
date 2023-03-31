import './content.css.js';

// Create element
var em = window.location.href.replace('https://github.com/', '').split("?")[0].split("/")[0];
    fetch(`https://api.opensauced.pizza/v1/users/${em}`, {
        method: "get",
    })
    .then(res => {
        if(res.status===200){
            let linkElm = document.createElement('a'), title = "View on OpenSauced";
            let linkTxt = document.createTextNode(title);
            linkElm.appendChild(linkTxt);
            linkElm.title = title;
            linkElm.setAttribute('class', "crxbtn");
            linkElm.setAttribute('target', "_blank");
            linkElm.setAttribute('href', `https://insights.opensauced.pizza/user/${em}`);
            var sibling = document.querySelectorAll('.js-profile-editable-replace .user-following-container')[0], altSibling = document.querySelector('button[type="button"][name="button"]');
            if(typeof sibling === 'undefined') altSibling.parentNode.insertBefore(linkElm, altSibling.nextSibling);
            else {sibling = sibling.parentElement.parentElement; sibling.parentNode.insertBefore(linkElm, sibling.nextSibling); }
        }else if(res.status===404) console.log('User not found on OpenSauced');
        console.log(res.status);
    })
    .catch(err => console.log(err));
console.log(em);

//Reload content script on page navigation, (i)when inside github profile, and (ii) not in pull, issues, codespaces, marketplace, explore, mine, new, notifications pages, and (iii) also not the currently fetched profile
chrome.runtime.onMessage.addListener(message => {
    if (message.action === 'reloadContentScript') {
        var arr = ['pulls', 'issues', 'codespaces', 'marketplace', 'explore', 'mine', 'new', 'notifications'];
        if(!arr.includes(message.url) && message.url != em) window.location.reload();
    }
  });
