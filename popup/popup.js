document.getElementById('getTitleBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "getTabTitle" }, (response) => {
    if (chrome.runtime.lastError) {
      console.error("Runtime error:", chrome.runtime.lastError);
      document.getElementById('title').textContent = 'Error retrieving title.';
      return;
    }

    if (response && response.title) {
      document.getElementById('title').textContent = response.title;
    } else {
      document.getElementById('title').textContent = 'No title received.';
    }
  });
});
