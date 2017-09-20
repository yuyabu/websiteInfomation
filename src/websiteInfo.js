
chrome.tabs.getSelected(null, function(tab) {
    var tabId = tab.id;
    var tabUrl = tab.url;
    var ipAdress = document.getElementById('main_text');
    main_text.innerHTML = JSON.stringify(tab).replace(/,/g,"<br/>");

});
