

chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    var tab = array_of_Tabs[0];
    var main_text= document.getElementById('main_text');
    main_text.innerHTML = JSON.stringify(tab).replace(/,/g,",<br/>");

});
