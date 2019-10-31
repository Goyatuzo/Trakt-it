import { browser } from 'webextension-polyfill-ts';

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.status) return;

    if (changeInfo.status === "complete" && tab.url.match("vrv.co")) {
        browser.pageAction.show(tabId);
    } else {
        browser.pageAction.hide(tabId);
    }
});