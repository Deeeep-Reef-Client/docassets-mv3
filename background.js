// Config
let options = {
    redirectAssets: true
}

function setDefaults() {
    chrome.storage.sync.set({
        options: {
            redirectAssets: true
        }
    }, syncSettings);
}

chrome.runtime.onInstalled.addListener(() => {
    setDefaults();
});

function syncSettings() {
    chrome.storage.sync.get({
        options: {
            redirectAssets: true
        }
    }, (obj) => {
        Object.assign(options, obj.options);

        let color = options.redirectAssets ? '#00a04a' : '#bb0000';
        let text = options.redirectAssets ? 'ON' : 'OFF';

        chrome.action.setBadgeBackgroundColor({ color });
        chrome.action.setBadgeText({ text });
    });
}

syncSettings();

// Action

function toggleRedirect() {
    options.redirectAssets = !options.redirectAssets;

    chrome.storage.sync.set({ options }, syncSettings);
}

chrome.action.onClicked.addListener(toggleRedirect);