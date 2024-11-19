// // content.js
// function performSteps() {
//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//       // Notify the popup that we are waiting for input
//       chrome.runtime.sendMessage({ message: "Waiting for insert..." });
  
//       // Step 2: Wait 1 more second to insert the text
//       setTimeout(() => {
//         const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//         if (inputField) {
//           inputField.value = "YHQX ZGXJ RDHK WMDC"; // Insert the text
  
//           // Trigger 'input' and 'change' events to ensure the value is registered
//           inputField.dispatchEvent(new Event('input', { bubbles: true }));
//           inputField.dispatchEvent(new Event('change', { bubbles: true }));
          
//           // Notify the popup that the text is inserted
//           chrome.runtime.sendMessage({ message: "Text inserted." });
//         } else {
//           chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//           return;
//         }
  
//         // Step 3: Wait 1 more second to click the "Check Balance" button
//         setTimeout(() => {
//           const button = document.getElementById('balanceCheck-balance');
//           if (button) {
//             button.click(); // Click the button
//             chrome.runtime.sendMessage({ message: "Button clicked." }); // Notify the popup
  
//             // Step 4: Wait 2 seconds after clicking the button
//             setTimeout(() => {
//               // Step 5: Get the content of the balance div
//               const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//               if (balanceDiv) {
//                 const balanceText = balanceDiv.textContent; // Get the text content
//                 chrome.runtime.sendMessage({ message: "Balance: " + balanceText }); // Send balance to popup
//               } else {
//                 chrome.runtime.sendMessage({ message: "Balance div not found!" });
//               }

//               setTimeout(() => {
//                 const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                 if (checkAnotherLink) {
//                     checkAnotherLink.click();
//                 }else {
//                     chrome.runtime.sendMessage({ message: "Check another check link not found!" });
//                 }
//               }, 1000);
//             }, 2000); // Wait 2 seconds before getting the balance
  
//           } else {
//             chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//           }
//         }, 1000); // Wait 1 second before clicking the button
  
//       }, 1000); // Wait 1 second after "Waiting for insert" to insert text
  
//     }, 1000); // Wait 1 second to print "Waiting for insert..."
//   }
  
//   // Start the process when the content script is loaded
//   performSteps();
  


// // content.js
// let currentIndex = 0; // Track the current PIN index
// let pinValues = [];

// // Function to perform balance checks
// function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup
//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         // Notify the popup that we are waiting for input
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 2 seconds after clicking the button
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         console.log("testing balance")
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

//                             setTimeout(() => {
//                               const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                               if (checkAnotherLink) {
//                                   checkAnotherLink.click();
//                               }else {
//                                   chrome.runtime.sendMessage({ message: "Check another check link not found!" });
//                               }

//                                                       // Check if there are more PINs to process
//                                 currentIndex++;
                                

//                                 if (currentIndex < pinValues.length) {
//                                   console.log("working now", pinValues[currentIndex])
//                                   chrome.runtime.sendMessage({ message: "text error testing: " + pin + pinValues[currentIndex] + "index value" + currentIndex });
//                                   performSteps(pinValues[currentIndex]); // Perform steps for the next PIN
//                                 } else {
//                                     chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                 }

//                             }, 2000);

//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 2 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 1 second before clicking the button

//         }, 2500); // Wait 1 second after "Waiting for insert" to insert text

//     }, 2500); // Wait 1 second to print "Waiting for insert..."
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; // Store the received PINs
//         currentIndex = 0; // Reset the index
//         performSteps(pinValues[currentIndex]); // Start with the first PIN
//     }
// });




// let currentIndex = 0;
// let pinValues = [];

// // Function to perform balance checks
// function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin });

//                     setTimeout(() => {
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         console.log("Checking balance...");
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; 
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText });

                            // setTimeout(() => {
                            //     const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
                            //     if (checkAnotherLink) {
                            //         checkAnotherLink.click(); // Click "Check another" link
                            //     } else {
                            //         chrome.runtime.sendMessage({ message: "Check another link not found!" });
                            //     }

//                                 currentIndex++;

//                                 // Save current progress in storage
//                                 chrome.storage.local.set({ currentIndex, pinValues });

//                                 if (currentIndex < pinValues.length) {
//                                     performSteps(pinValues[currentIndex]); // Perform steps for the next PIN
//                                 } else {
//                                     chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                     chrome.storage.local.remove(['currentIndex', 'pinValues']); // Clean up storage
//                                 }

//                             }, 2000); // Wait for the page to reload
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000);
//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000);
//         }, 2500);
//     }, 2500);
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; 
//         currentIndex = 0; 
//         chrome.storage.local.set({ currentIndex, pinValues }); // Store the initial values
//         performSteps(pinValues[currentIndex]);
//     }
// });

// // Check if there is any stored state after a page refresh
// chrome.storage.local.get(['currentIndex', 'pinValues'], (result) => {
//     if (result.pinValues && result.currentIndex !== undefined) {
//         pinValues = result.pinValues;
//         currentIndex = result.currentIndex;

//         // Resume processing if there are remaining PINs
//         if (currentIndex < pinValues.length) {
//             performSteps(pinValues[currentIndex]);
//         }
//     }
// });




// let currentIndex = 0;
// let pinValues = [];

// // Function to perform balance checks
// function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin });

//                     setTimeout(() => {
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         console.log("Checking balance...");
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; 
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText });

//                             setTimeout(() => {
//                                 const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                                 if (checkAnotherLink) {
//                                     checkAnotherLink.click(); // Click "Check another" link
//                                     chrome.runtime.sendMessage({ message: "reload into original page"});

//                                 } else {
//                                     chrome.runtime.sendMessage({ message: "Check another link not found!" });
//                                 }

//                                 currentIndex++;

//                                 // Save current progress by sending a message to the background script
//                                 chrome.runtime.sendMessage({ 
//                                     action: 'saveState', 
//                                     currentIndex: currentIndex, 
//                                     pinValues: pinValues 
//                                 });

//                                 if (currentIndex < pinValues.length) {
//                                     performSteps(pinValues[currentIndex]); // Perform steps for the next PIN
//                                 } else {
//                                     chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                     chrome.runtime.sendMessage({ action: 'clearState' }); // Clear storage after processing all PINs
//                                 }

//                             }, 2000); // Wait for the page to reload
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000);
//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000);
//         }, 2500);
//     }, 2500);
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; 
//         currentIndex = 0; 
//         performSteps(pinValues[currentIndex]); // Start with the first PIN

//         // Save the initial state in the background script
//         chrome.runtime.sendMessage({ 
//             action: 'saveState', 
//             currentIndex: currentIndex, 
//             pinValues: pinValues 
//         });
//     }
// });

// // Check if there is any stored state after a page refresh
// chrome.runtime.sendMessage({ action: 'getState' }, (result) => {
//     if (result.pinValues && result.currentIndex !== undefined) {
//         pinValues = result.pinValues;
//         currentIndex = result.currentIndex;

//         // Resume processing if there are remaining PINs
//         if (currentIndex < pinValues.length) {
//             performSteps(pinValues[currentIndex]);
//         }
//     }
// });






// if (typeof currentIndex === 'undefined') {
//   var currentIndex = 0; 
// }
// if (typeof pinValues === 'undefined') {
//   var pinValues = [];
// }


// function performSteps(pin) {
//   chrome.runtime.sendMessage({ message: "start working" });
//   chrome.runtime.sendMessage({ message: pinValues[currentIndex] });


//   currentIndex++;
//   if (currentIndex < pinValues.length) {
//       chrome.runtime.sendMessage({
//           action: 'saveState',
//           currentIndex: currentIndex,
//           pinValues: pinValues
//       }, () => {
//           performSteps(pinValues[currentIndex]);
//       });
//   } else {
//       chrome.runtime.sendMessage({ message: "All PINs processed." });
//   }
// }


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.pins && Array.isArray(request.pins)) {
//       pinValues = request.pins; 
//       currentIndex = 0;
//       chrome.runtime.sendMessage({ message: "current" + currentIndex });
//       performSteps(pinValues[currentIndex]); 
//   }
// });



// (function () {
//   let currentIndex = 0;
//   let pinValues = [];

//   // Function to save state in Chrome storage
//   function saveState() {
//       chrome.runtime.sendMessage({
//           action: 'saveState',
//           currentIndex: currentIndex,
//           pinValues: pinValues,
//       });
//   }

//   // Function to get state from Chrome storage
//   function getState(callback) {
//       chrome.runtime.sendMessage({ action: 'getState' }, callback);
//   }

//   // Function to wait until the page has reloaded after "Check another"
//   function waitForPageReload() {
//       return new Promise((resolve) => {
//           let checkInterval = setInterval(() => {
//               const inputField = document.getElementById(
//                   'giftCardBalanceCheck.giftCardPin'
//               );
//               if (inputField) {
//                   clearInterval(checkInterval); // Page has reloaded when input field is found
//                   resolve();
//               }
//           }, 1000); // Check every second
//       });
//   }

//   // Function to perform balance checks
//   function performSteps(pin) {
//       chrome.runtime.sendMessage({ message: 'start working' }); // Notify the popup
//       setTimeout(() => {
//           chrome.runtime.sendMessage({ message: 'Waiting for insert...' });

//           setTimeout(() => {
//               const inputField = document.getElementById(
//                   'giftCardBalanceCheck.giftCardPin'
//               );
//               if (inputField) {
//                   inputField.value = pin; // Insert the current PIN

//                   inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                   inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                   chrome.runtime.sendMessage({ message: 'Text inserted: ' + pin });
//               } else {
//                   chrome.runtime.sendMessage({
//                       message: 'Gift Card PIN input field not found!',
//                   });
//                   return;
//               }

//               setTimeout(() => {
//                   const button = document.getElementById('balanceCheck-balance');
//                   if (button) {
//                       button.click(); // Click the button
//                       chrome.runtime.sendMessage({
//                           message: 'Button clicked for PIN: ' + pin,
//                       });

//                       setTimeout(() => {
//                           const balanceDiv = document.querySelector(
//                               '.rs-gcbalance-balance'
//                           );
//                           if (balanceDiv) {
//                               const balanceText = balanceDiv.textContent;
//                               chrome.runtime.sendMessage({
//                                   message: 'Balance for ' + pin + ': ' + balanceText,
//                               });

                              // setTimeout(() => {
                              //     const checkAnotherLink = document.querySelector(
                              //         'a.as-buttonlink.more'
                              //     );
                              //     if (checkAnotherLink) {
                              //         currentIndex++;
                              //         saveState();
                              //         checkAnotherLink.click(); // Click "Check another" link
                              //         chrome.runtime.sendMessage({
                              //             message: 'reload into original page',
                              //         });

                              //         // Save the current state before reloading


                              //         // Wait for the page to reload, then proceed with the next PIN
                              //         waitForPageReload().then(() => {
                              //             if (currentIndex < pinValues.length) {
                              //                 setTimeout(() => {
                              //                     performSteps(
                              //                         pinValues[currentIndex]
                              //                     ); // Process the next PIN
                              //                 }, 1000); // Slight delay after page reload
                              //             } else {
                              //                 chrome.runtime.sendMessage({
                              //                     message: 'All PINs processed.',
                              //                 });
                              //                 chrome.runtime.sendMessage({
                              //                     action: 'clearState',
                              //                 }); // Clear storage after processing all PINs
                              //             }
                              //         });
                              //     } else {
                              //         chrome.runtime.sendMessage({
                              //             message: 'Check another link not found!',
                              //         });
                              //     }
                              // }, 2000); // Wait for the page to reload
//                           } else {
//                               chrome.runtime.sendMessage({
//                                   message: 'Balance div not found!',
//                               });
//                           }
//                       }, 3000);
//                   } else {
//                       chrome.runtime.sendMessage({
//                           message: 'Check Balance button not found!',
//                       });
//                   }
//               }, 2000);
//           }, 2500);
//       }, 2500);
//   }

//   // Start the process when the content script is loaded
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//       if (request.pins && Array.isArray(request.pins)) {
//           pinValues = request.pins;
//           currentIndex = 0;
//           performSteps(pinValues[currentIndex]); // Start with the first PIN

//           // Save the initial state
//           saveState();
//       }
//   });

//   // Check if there is any stored state after a page refresh
//   getState((result) => {
//       if (result.pinValues && result.currentIndex !== undefined) {
//           pinValues = result.pinValues;
//           currentIndex = result.currentIndex;

//           // Resume processing if there are remaining PINs
//           if (currentIndex < pinValues.length) {
//               performSteps(pinValues[currentIndex]);
//           }
//       }
//   });
// })();



// let currentIndex = 0; // Track the current PIN index
// let pinValues = [];

// // Function to fetch the current PIN from the Flask server
// async function fetchCurrentPin() {
//     try {
//         const response = await fetch('http://127.0.0.1:5000/current_pin');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.pin; // Return the current PIN from the response
//     } catch (error) {
//         console.error('Error fetching current PIN:', error);
//         return null; // Return null if there is an error
//     }
// }

// // Function to perform balance checks
// async function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 2 seconds after clicking the button
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup


//                             setTimeout(() => {
//                               const checkAnotherLink = document.querySelector(
//                                   'a.as-buttonlink.more'
//                               );
//                               if (checkAnotherLink) {
//                                   checkAnotherLink.click(); // Click "Check another" link
//                                   chrome.runtime.sendMessage({
//                                       message: 'reload into original page',
//                                   });


//                                   currentIndex++;

//                                   // Fetch the next current PIN from the server and check the balance
//                                   if (currentIndex < pinValues.length) {
//                                       const nextPin = pinValues[currentIndex];
//                                       console.log("Fetching next PIN:", nextPin);
//                                       performSteps(nextPin); // Perform steps for the next PIN
//                                   } else {
//                                       chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                   }

//                               } else {
//                                   chrome.runtime.sendMessage({
//                                       message: 'Check another link not found!',
//                                   });
//                               }
//                           }, 2000); // Wait for the page to reload


//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 2 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 1 second before clicking the button

//         }, 2500); // Wait 1 second after "Waiting for insert" to insert text

//     }, 2500); // Wait 1 second to print "Waiting for insert..."
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; // Store the received PINs
//         currentIndex = 0; // Reset the index
//         fetchCurrentPin().then(pin => {
//             if (pin) {
//                 performSteps(pin); // Start with the fetched PIN
//             } else {
//                 console.error('Failed to fetch the current PIN.');
//             }
//         });
//     }
// });



// let currentIndex = 0; // Track the current PIN index
// let pinValues = [];

// // Function to fetch the current PIN from the Flask server
// async function fetchCurrentPin() {
//     try {
//         const response = await fetch('http://127.0.0.1:5000/current_pin');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.pin; // Return the current PIN from the response
//     } catch (error) {
//         console.error('Error fetching current PIN:', error);
//         return null; // Return null if there is an error
//     }
// }

// // Function to perform balance checks
// async function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 3 seconds after clicking the button for the balance to load
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

//                             // Step 6: Check for the "Check another" link
//                             const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                             if (checkAnotherLink) {
//                                 checkAnotherLink.click(); // Click "Check another" link
//                                 chrome.runtime.sendMessage({ message: 'reload into original page' });

//                                 // Wait for the page to update
//                                 setTimeout(() => {
//                                     // Go back to the previous page without reloading
//                                     history.back(); 

//                                     currentIndex++; // Increment the current index

//                                     // Check if there are more PINs to process
//                                     if (currentIndex < pinValues.length) {
//                                         const nextPin = pinValues[currentIndex];
//                                         console.log("Fetching next PIN:", nextPin);
//                                         performSteps(nextPin); // Perform steps for the next PIN
//                                     } else {
//                                         chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                     }
//                                 }, 2000); // Adjust wait time as needed
//                             } else {
//                                 chrome.runtime.sendMessage({ message: 'Check another link not found!' });
//                             }
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 3 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 2 seconds before clicking the button

//         }, 2500); // Wait 2.5 seconds after "Waiting for insert" to insert text

//     }, 2500); // Wait 2.5 seconds to print "Waiting for insert..."
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; // Store the received PINs
//         currentIndex = 0; // Reset the index
//         fetchCurrentPin().then(pin => {
//             if (pin) {
//                 performSteps(pin); // Start with the fetched PIN
//             } else {
//                 console.error('Failed to fetch the current PIN.');
//             }
//         });
//     }
// });




// let currentIndex = 0; // Track the current PIN index
// let pinValues = [];

// // Function to perform balance checks
// async function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 3 seconds after clicking the button for the balance to load
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

//                             // Step 6: Check for the "Check another" link
//                             const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                             if (checkAnotherLink) {
//                                 checkAnotherLink.click(); // Click "Check another" link
//                                 chrome.runtime.sendMessage({ message: 'Reload into original page' });

//                                 currentIndex++;
//                                 if (currentIndex < pinValues.length) {
//                                     const nextPin = pinValues[currentIndex];
//                                     console.log("Fetching next PIN:", nextPin);
//                                     chrome.runtime.sendMessage({ message: 'Next pin values' });
//                                     performSteps(nextPin); // Perform steps for the next PIN
                                    
//                                 } else {
//                                     chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                 }

//                                 // Step 7: Wait for the page to update
//                                 // setTimeout(() => {
//                                 //     // Check for the next PIN to process
//                                 //     currentIndex++; // Increment the current index

//                                 //     // Check if there are more PINs to process
//                                 //     // if (currentIndex < pinValues.length) {
//                                 //     //     const nextPin = pinValues[currentIndex];
//                                 //     //     console.log("Fetching next PIN:", nextPin);
//                                 //     //     chrome.runtime.sendMessage({ message: 'Next pin values' });
//                                 //     //     performSteps(nextPin); // Perform steps for the next PIN

//                                 //     // } else {
//                                 //     //     chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                 //     // }
//                                 // }, 2000); // Adjust wait time as needed
//                             } else {
//                                 chrome.runtime.sendMessage({ message: 'Check another link not found!' });
//                             }
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 3 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 2 seconds before clicking the button

//         }, 2500); // Wait 2.5 seconds after "Waiting for insert" to insert text

//     }, 2500); // Wait 2.5 seconds to print "Waiting for insert..."
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; // Store the received PINs
//         currentIndex = 0; // Reset the index

//         // Start with the first PIN
//         if (pinValues.length > 0) {
//             performSteps(pinValues[currentIndex]);
//         }
//         return true; // Keep the message channel open for sendResponse
//     }
// });



// let currentIndex = 0; // Track the current PIN index
// let pinValues = []; 

// // Function to perform balance checks
// async function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 3 seconds after clicking the button for the balance to load
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

//                             // Step 6: Check for the "Check another" link
//                             const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                             if (checkAnotherLink) {
//                                 checkAnotherLink.click(); // Click "Check another" link
//                                 chrome.runtime.sendMessage({ message: 'Reload into original page' });

//                                 // Step 7: Wait for the page to update
//                                 setTimeout(() => {
//                                     // Check for the next PIN to process
//                                     currentIndex++; // Increment the current index

//                                     // Check if there are more PINs to process
//                                     if (currentIndex < pinValues.length) {
//                                         const nextPin = pinValues[currentIndex];
//                                         console.log("Fetching next PIN:", nextPin);
//                                         performSteps(nextPin); // Perform steps for the next PIN
//                                     } else {
//                                         chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                     }
//                                 }, 2000); // Adjust wait time as needed
//                             } else {
//                                 chrome.runtime.sendMessage({ message: 'Check another link not found!' });
//                             }
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 3 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 2 seconds before clicking the button

//         }, 2500); // Wait 2.5 seconds after "Waiting for insert" to insert text

//     }, 2500); // Wait 2.5 seconds to print "Waiting for insert..."
// }

// // Start the process when the content script is loaded
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.pins && Array.isArray(request.pins)) {
//         pinValues = request.pins; // Store the received PINs
//         currentIndex = 0; // Reset the index

//         // Start with the first PIN
//         console.log("testing 123123")
//         chrome.runtime.sendMessage({ message: "reload testing" });
//         if (pinValues.length > 0) {
//             performSteps(pinValues[currentIndex]);
//         }
//         return true; // Keep the message channel open for sendResponse
//     }
// });



let currentIndex = 0; // Track the current PIN index
let pinValues = []; 

// // Function to perform balance checks
// async function performSteps(pin) {
//     chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

//     // Step 1: Wait 1 second to print "Waiting for insert..."
//     setTimeout(() => {
//         chrome.runtime.sendMessage({ message: "Waiting for insert..." });

//         // Step 2: Wait 1 more second to insert the text
//         setTimeout(() => {
//             const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
//             if (inputField) {
//                 inputField.value = pin; // Insert the current PIN

//                 // Trigger 'input' and 'change' events to ensure the value is registered
//                 inputField.dispatchEvent(new Event('input', { bubbles: true }));
//                 inputField.dispatchEvent(new Event('change', { bubbles: true }));

//                 // Notify the popup that the text is inserted
//                 chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
//             } else {
//                 chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
//                 return;
//             }

//             // Step 3: Wait 1 more second to click the "Check Balance" button
//             setTimeout(() => {
//                 const button = document.getElementById('balanceCheck-balance');
//                 if (button) {
//                     button.click(); // Click the button
//                     chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

//                     // Step 4: Wait 3 seconds after clicking the button for the balance to load
//                     setTimeout(() => {
//                         // Step 5: Get the content of the balance div
//                         const balanceDiv = document.querySelector('.rs-gcbalance-balance');
//                         if (balanceDiv) {
//                             const balanceText = balanceDiv.textContent; // Get the text content
//                             chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

//                             // Step 6: Check for the "Check another" link
//                             const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
//                             if (checkAnotherLink) {
//                                 checkAnotherLink.click(); // Click "Check another" link
//                                 chrome.runtime.sendMessage({ message: 'Reload into original page' });

//                                 // Step 7: Wait for the page to update
//                                 setTimeout(() => {
//                                     // Check for the next PIN to process
//                                     currentIndex++; // Increment the current index

//                                     // Check if there are more PINs to process
//                                     if (currentIndex < pinValues.length) {
//                                         const nextPin = pinValues[currentIndex];
//                                         console.log("Fetching next PIN:", nextPin);
//                                         performSteps(nextPin); // Perform steps for the next PIN
//                                     } else {
//                                         chrome.runtime.sendMessage({ message: "All PINs processed." });
//                                     }
//                                 }, 2000); // Adjust wait time as needed
//                             } else {
//                                 chrome.runtime.sendMessage({ message: 'Check another link not found!' });
//                             }
//                         } else {
//                             chrome.runtime.sendMessage({ message: "Balance div not found!" });
//                         }
//                     }, 3000); // Wait 3 seconds before getting the balance

//                 } else {
//                     chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
//                 }
//             }, 2000); // Wait 2 seconds before clicking the button

//         }, 2500); // Wait 2.5 seconds after "Waiting for insert" to insert text

//     }, 2500); // Wait 2.5 seconds to print "Waiting for insert..."
// }



// Function to perform balance checks
async function performSteps(pin) {
    chrome.runtime.sendMessage({ message: "start working" }); // Notify the popup

    // Step 1: Wait 1 second to print "Waiting for insert..."
    setTimeout(() => {
        chrome.runtime.sendMessage({ message: "Waiting for insert..." });

        // Step 2: Wait 1 more second to insert the text
        setTimeout(() => {
            const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
            if (inputField) {
                inputField.value = pin; // Insert the current PIN

                // Trigger 'input' and 'change' events to ensure the value is registered
                inputField.dispatchEvent(new Event('input', { bubbles: true }));
                inputField.dispatchEvent(new Event('change', { bubbles: true }));

                // Notify the popup that the text is inserted
                chrome.runtime.sendMessage({ message: "Text inserted: " + pin });
            } else {
                chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
                return;
            }

            // Step 3: Wait 1 more second to click the "Check Balance" button
            setTimeout(() => {
                const button = document.getElementById('balanceCheck-balance');
                if (button) {
                    button.click(); // Click the button
                    chrome.runtime.sendMessage({ message: "Button clicked for PIN: " + pin }); // Notify the popup

                    // Step 4: Wait 3 seconds after clicking the button for the balance to load
                    setTimeout(() => {
                        // Step 5: Get the content of the balance div
                        const balanceDiv = document.querySelector('.rs-gcbalance-balance');
                        if (balanceDiv) {
                            const balanceText = balanceDiv.textContent; // Get the text content
                            chrome.runtime.sendMessage({ message: "Balance for " + pin + ": " + balanceText }); // Send balance to popup

                            fetch('http://127.0.0.1:5000/update_balance', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    pin: pin,
                                    balance: balanceText
                                })
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Response from server:', data);
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });

                            
                            // Step 6: Check for the "Check another" link
                            const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
                            if (checkAnotherLink) {
                                checkAnotherLink.click(); // Click "Check another" link
                                chrome.runtime.sendMessage({ message: 'Reload into original page' });

                                // Step 7: Wait for the page to update
                                setTimeout(() => {
                                    // Check for the next PIN to process
                                    currentIndex++; // Increment the current index

                                    // Check if there are more PINs to process
                                    if (currentIndex < pinValues.length) {
                                        const nextPin = pinValues[currentIndex];
                                        console.log("Fetching next PIN:", nextPin);
                                        performSteps(nextPin); // Perform steps for the next PIN
                                    } else {
                                        chrome.runtime.sendMessage({ message: "All PINs processed." });
                                    }
                                }, 2000); // Adjust wait time as needed
                            } else {
                                chrome.runtime.sendMessage({ message: 'Check another link not found!' });
                            }
                        } else {
                            chrome.runtime.sendMessage({ message: "Balance div not found!" });
                        }
                    }, 3000); // Wait 3 seconds before getting the balance

                } else {
                    chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
                }
            }, 2000); // Wait 2 seconds before clicking the button

        }, 2500); // Wait 2.5 seconds after "Waiting for insert" to insert text

    }, 2500); // Wait 2.5 seconds to print "Waiting for insert..."
}




window.onload = function() {

    const savedPins = JSON.parse(localStorage.getItem('pinValues')); // Parse to convert it back to an array
    let savedIndex = parseInt(localStorage.getItem('currentIndex'), 10); // Ensure savedIndex is an integer
    const savedTotal = parseInt(localStorage.getItem('totalPins'), 10); // Ensure totalPins is an integer
    
    // Check if the data exists and is valid
    if (savedPins && savedTotal && savedIndex >= 0 && savedIndex < savedPins.length) {
        // Send a message with the current saved PIN
        chrome.runtime.sendMessage({ message: "Current PIN: " + savedPins[savedIndex] });

        // Increment the index and update in localStorage
        savedIndex += 1;
        localStorage.setItem('currentIndex', savedIndex.toString());

        // Make sure we are within bounds before accessing the next PIN
        if (savedIndex < savedTotal) {
            chrome.runtime.sendMessage({ message: "Working with next PIN: " + savedPins[savedIndex] });
            performSteps(savedPins[savedIndex]);  // Perform steps with the next PIN
        } else {
            console.log("All PINs have been processed.");
            chrome.runtime.sendMessage({ message: "All PINs have been processed." });
        }
    } else {
        console.log("No valid PIN data found in localStorage.");
        chrome.runtime.sendMessage({ message: "No valid PIN data found in localStorage." });
    }
};

// Start the process when the content script is loaded
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.pins && Array.isArray(request.pins)) {
        pinValues = request.pins; // Store the received PINs
        currentIndex = 0; // Reset the index

        // Start with the first PIN
        if (pinValues.length > 0) {
            performSteps(pinValues[currentIndex]);
        }
        return true; // Keep the message channel open for sendResponse
    }
});
