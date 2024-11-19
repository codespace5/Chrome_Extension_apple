// chrome.runtime.onInstalled.addListener(() => {
//   console.log('Extension installed.');
// });


// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveState') {
      // Save state in chrome storage
      chrome.storage.local.set({ currentIndex: request.currentIndex, pinValues: request.pinValues }, () => {
          sendResponse({ status: 'State saved' });
      });
      return true; // Allows asynchronous response
  } else if (request.action === 'getState') {
      // Retrieve saved state
      chrome.storage.local.get(['currentIndex', 'pinValues'], (result) => {
          sendResponse(result);
      });
      return true; // Allows asynchronous response
  }
});
