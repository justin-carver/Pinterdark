var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', browser.runtime.getURL('css/pinterdark.css'));
document.head.appendChild(link);