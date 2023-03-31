chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onUpdated.addListener( 
        function(tabId, changeInfo, tab) {
            if (changeInfo.url) {  var url = changeInfo.url.split('?')[0].split('/')[3];
                if (changeInfo.url.startsWith('https://github.com/') && changeInfo.url.split('?')[0].split('/').length === 4) {
                    chrome.tabs.sendMessage(tabId, { action: 'reloadContentScript', url: url }); 
                }
            }
        }
    );
});