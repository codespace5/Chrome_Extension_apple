let pinValues = []; // Array to hold the PIN values

// Handle the file upload
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
            displayContents(pinValues); // Display the contents in the popup
        };
        reader.readAsText(file);
    }
});

// Function to display the contents in the popup
function displayContents(contents) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous contents
    contents.forEach((line) => {
        const para = document.createElement('p');
        para.textContent = line;
        outputDiv.appendChild(para);
    });
}


document.getElementById('startButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js'] // Execute the content script
      });
    });
  });
  
  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Update the result div based on messages from the content script
    document.getElementById('result').textContent = request.message;
  });
  