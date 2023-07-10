// Background script

// Generate a unique user ID
function generateUserID() {
  //generate a userID with a random number
  const userID = 'user' + Math.floor(Math.random() * 1000000);
  return userID;
}

// Check if the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update'){
    // Check if the user ID exists in the storage
    chrome.storage.local.get('userID', (result) => {
      if (!result.userID) {
        // Generate a unique user ID
        const userID = generateUserID();
        // Store the user ID in the storage
        chrome.storage.local.set({ userID });
      }
    });
  }
});

//run the script every time, the tab adress changes
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Check if the URL matches the pattern for the gmail website
  if (tab.url && /(mail\.google\.com)/.test(tab.url)) {
    // Execute the content script in the tab
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content_gmail.js']
    });
  }
});

