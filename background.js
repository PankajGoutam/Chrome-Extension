chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTabTitle") {
      // Query the active tab in the current window
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          console.error("Runtime error:", chrome.runtime.lastError);
          sendResponse({ title: "Error retrieving title." });
          return;
        }
        if (tabs.length > 0) {
          const activeTab = tabs[0];
          // Send the tab title back to the sender
          sendResponse({ title: activeTab.title });
        } else {
          sendResponse({ title: "No active tab found." });
        }
      });
      return true;
    }
  });
  