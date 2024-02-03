import reloadOnUpdate from 'virtual:reload-on-update-in-background-script';
import 'webextension-polyfill';

reloadOnUpdate('pages/background');

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate('pages/content/style.scss');

enum MessageType {
  TOGGLE_POPUP = 'toggle-popup',
}

chrome.action.onClicked.addListener(async tab => {
  chrome.tabs.sendMessage(tab.id, { type: MessageType.TOGGLE_POPUP });
});
