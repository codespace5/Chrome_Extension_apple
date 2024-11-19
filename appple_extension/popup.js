// let pinValues = []; // Array to hold the PIN values

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
//             displayContents(pinValues); // Display the contents in the popup
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }


// document.getElementById('startButton').addEventListener('click', () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         files: ['content.js'] // Execute the content script
//       });
//     });
//   });
  
//   // Listen for messages from the content script
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // Update the result div based on messages from the content script
//     document.getElementById('result').textContent = request.message;
//   });
  


// let pinValues = []; // Array to hold the PIN values

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
//             displayContents(pinValues); // Display the contents in the popup
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }

// // Start checking balances
// document.getElementById('startButton').addEventListener('click', () => {
//     if (pinValues.length === 0) {
//         alert("Please upload a file with PINs first.");
//         return; // Prevent action if no PINs loaded
//     }

//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ['content.js'] // Execute the content script
//         }, () => {
//             // Send the loaded PINs to the content script
//             chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError);
//                 } else {
//                     console.log("Response from content script:", response);
//                 }
//             });
//         });
//     });
// });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // Update the output div based on messages from the content script
//     const resultDiv = document.getElementById('output');
//     const para = document.createElement('p');
//     para.textContent = request.message; // Assuming the content script sends a message
//     resultDiv.appendChild(para);
//     sendResponse({ message: "Message received." }); // Acknowledge the receipt
// });


// let pinValues = []; 

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
//             displayContents(pinValues); 
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }

// // Start checking balances
// document.getElementById('startButton').addEventListener('click', () => {
//     if (pinValues.length === 0) {
//         alert("Please upload a file with PINs first.");
//         return; // Prevent action if no PINs loaded
//     }

//     // Send the PIN values to the Flask server
//     sendPinsToServer(pinValues);

//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ['content.js'] // Execute the content script
//         }, () => {
//             // Send the loaded PINs to the content script
//             chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError);
//                 } else {
//                     console.log("Response from content script:", response);
//                 }
//             });
//         });
//     });
// });

// // Function to send PINs to Flask server
// function sendPinsToServer(pins) {
//     fetch('http://127.0.0.1:5000/pins', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ pins: pins }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // Update the output div based on messages from the content script
//     const resultDiv = document.getElementById('output');
//     const para = document.createElement('p');
//     para.textContent = request.message; // Assuming the content script sends a message
//     resultDiv.appendChild(para);
//     sendResponse({ message: "Message received." }); // Acknowledge the receipt
// });



// let pinValues = []; 

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
//             displayContents(pinValues); 
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }

// // Start checking balances
// document.getElementById('startButton').addEventListener('click', () => {
//     if (pinValues.length === 0) {
//         alert("Please upload a file with PINs first.");
//         return; // Prevent action if no PINs loaded
//     }

//     // Send the loaded PINs to the content script
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ['content.js'] // Execute the content script
//         }, () => {
//             chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError);
//                 } else {
//                     console.log("Response from content script:", response);
//                 }
//             });
//         });
//     });
// });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const resultDiv = document.getElementById('output');
//     const para = document.createElement('p');
//     para.textContent = request.message; // Assuming the content script sends a message
//     resultDiv.appendChild(para);
//     sendResponse({ message: "Message received." }); // Acknowledge the receipt
// });



// let pinValues = []; 

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
//             displayContents(pinValues); 
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }

// // Start checking balances
// document.getElementById('startButton').addEventListener('click', () => {
//     if (pinValues.length === 0) {
//         alert("Please upload a file with PINs first.");
//         return; // Prevent action if no PINs loaded
//     }

//     // Send the loaded PINs to the content script
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ['content.js'] // Execute the content script
//         }, () => {
//             // Send the loaded PINs to the content script
//             chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError);
//                 } else {
//                     console.log("Response from content script:", response);
//                 }
//             });
//         });
//     });
// });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const resultDiv = document.getElementById('output');
//     const para = document.createElement('p');
//     para.textContent = request.message; // Display incoming messages
//     resultDiv.appendChild(para);
//     console.log("eeeeeeeeeeeeeee")
//     chrome.runtime.sendMessage({ message: "gggggggggggg" });
//     sendResponse({ message: "Message received." }); // Acknowledge the receipt
// });





// let pinValues = []; 

// // Handle the file upload
// document.getElementById('fileInput').addEventListener('change', function (event) {
//     const file = event.target.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);

//             console.log("PIN values parsed from file:", pinValues);
            
//             // Save pin values into local storage
//             localStorage.setItem('pinValues', JSON.stringify(pinValues)); // Save the pinValues array
//             localStorage.setItem('currentIndex', '0'); // Initialize currentIndex to 0
            
//             // Check if the values were correctly saved in localStorage
//             console.log("Saved PIN values to localStorage:", localStorage.getItem('pinValues'));
//             console.log("Saved currentIndex to localStorage:", localStorage.getItem('currentIndex'));
            
//             chrome.storage.local.set({ pinValues: pinValues, currentIndex: 0 }, function () {
//                 console.log("Saved PIN values and currentIndex to chrome.storage.local.");
//             });
//             chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
//                 //  A data saved callback omg so fancy
//                 console.log("6666666666666666666")
//             });


//             displayContents(pinValues); 
//         };
//         reader.readAsText(file);
//     }
// });

// // Function to display the contents in the popup
// function displayContents(contents) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = ''; // Clear previous contents
//     contents.forEach((line) => {
//         const para = document.createElement('p');
//         para.textContent = line;
//         outputDiv.appendChild(para);
//     });
// }

// // Start checking balances
// document.getElementById('startButton').addEventListener('click', () => {
//     if (pinValues.length === 0) {
//         alert("Please upload a file with PINs first.");
//         return; // Prevent action if no PINs loaded
//     }

//     // Send the loaded PINs to the content script
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.scripting.executeScript({
//             target: { tabId: tabs[0].id },
//             files: ['content.js'] // Execute the content script
//         }, () => {
//             // Send the loaded PINs to the content script
//             chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
//                 if (chrome.runtime.lastError) {
//                     console.error("Error sending message:", chrome.runtime.lastError);
//                 } else {
//                     console.log("Response from content script:", response);
//                 }
//             });
//         });
//     });
// });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const resultDiv = document.getElementById('output');
//     const para = document.createElement('p');
//     para.textContent = request.message; // Display incoming messages
//     resultDiv.appendChild(para);
//     console.log("Message received in popup:", request.message); // Log the message

//     sendResponse({ message: "Message received." }); // Acknowledge the receipt
// });



let pinValues = [];

// Handle the file upload
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            pinValues = e.target.result.split('\n').map(line => line.trim()).filter(line => line);
            displayContents(pinValues);

            // localStorage.setItem('pinValues', JSON.stringify(pinValues));
            // localStorage.setItem('currentIndex', '0'); // Save currentIndex as string
            // localStorage.setItem('totalPins', pinValues.length.toString()); // Save the total number of PINs
            
            // console.log("Saved PIN values, currentIndex, and totalPins to localStorage.");
            
            // // Confirm saved data
            // const savedPins = localStorage.getItem('pinValues');
            // const savedIndex = localStorage.getItem('currentIndex');
            // const savedTotal = localStorage.getItem('totalPins');
            // console.log("Saved pinValues in localStorage:", JSON.parse(savedPins));
            // console.log("Saved currentIndex in localStorage:", savedIndex);
            // console.log("Saved total number of PINs in localStorage:", savedTotal);
            
            // chrome.storage.local.set({
            //     pinValues: pinValues,
            //     currentIndex: 0, // Save currentIndex as number
            //     totalPins: pinValues.length
            // }, function () {
            //     console.log("Saved PIN values, currentIndex, and totalPins to chrome.storage.local.");
            // });

            const data = "testworking"
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                  target: { tabId: tabs[0].id },
                  func: (data, pinValues) => {
                    localStorage.setItem('tttt', data);
                    localStorage.setItem('currentIndex', '0');  // Start the index at 0
                    localStorage.setItem('pinValues', JSON.stringify(pinValues));
                    localStorage.setItem('totalPins', pinValues.length.toString());
                    // alert('Data saved in browser local storage!');
                  },
                  args: [data, pinValues]
                });
              });
              

            console.log("Saved PIN values, currentIndex, and totalPins to localStorage.");
            console.log("Saved pinValues in localStorage:", pinValues);
            console.log("Saved currentIndex in localStorage: 0");
            console.log("Saved total number of PINs in localStorage:", pinValues.length);


        };
        reader.readAsText(file);
    }
});

// document.getElementById('fileInput').addEventListener('change', handleFileUpload);

// function handleFileUpload(event) {
//     const file = event.target.files[0]; // Access the uploaded file

//     if (file) {
//         const reader = new FileReader(); // Create a FileReader to read the file content

//         reader.onload = function(e) {
//             const content = e.target.result; // Get the content of the file

//             // Assuming each PIN is on a new line in the text file
//             const pinValues = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
//             displayContents(pinValues);
//             // Save the parsed data to browser localStorage (not Chrome extension storage)
//  // Save the total count as a string

//             const data = "testworking"
//             chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//                 chrome.scripting.executeScript({
//                   target: { tabId: tabs[0].id },
//                   func: (data, pinValues) => {
//                     localStorage.setItem('tttt', data);
//                     localStorage.setItem('currentIndex', '0');  // Start the index at 0
//                     localStorage.setItem('pinValues', JSON.stringify(pinValues));
//                     localStorage.setItem('totalPins', pinValues.length.toString());
//                     // alert('Data saved in browser local storage!');
//                   },
//                   args: [data, pinValues]
//                 });
//               });

//             console.log("Saved PIN values, currentIndex, and totalPins to browser localStorage.");
//         };

//         reader.readAsText(file); // Read the file as text
//     } else {
//         console.log("No file selected.");
//     }
// }


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

// Start checking balances
document.getElementById('startButton').addEventListener('click', () => {
    if (pinValues.length === 0) {
        alert("Please upload a file with PINs first.");
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js'] // Execute the content script
        }, () => {
            chrome.tabs.sendMessage(tabs[0].id, { pins: pinValues }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error sending message:", chrome.runtime.lastError);
                } else {
                    console.log("Response from content script:", response);
                }
            });
        });
    });
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const resultDiv = document.getElementById('output');
    const para = document.createElement('p');
    para.textContent = request.message;
    resultDiv.appendChild(para);
    sendResponse({ message: "Message received." });
});
