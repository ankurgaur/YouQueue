var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('scripts/jquery-1.9.1.min.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

var s1 = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s1.src = chrome.extension.getURL('scripts/script.js');
s1.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s1);
