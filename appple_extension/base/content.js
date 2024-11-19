// content.js
function performSteps() {
    // Step 1: Wait 1 second to print "Waiting for insert..."
    setTimeout(() => {
      // Notify the popup that we are waiting for input
      chrome.runtime.sendMessage({ message: "Waiting for insert..." });
  
      // Step 2: Wait 1 more second to insert the text
      setTimeout(() => {
        const inputField = document.getElementById('giftCardBalanceCheck.giftCardPin');
        if (inputField) {
          inputField.value = "YHQX ZGXJ RDHK WMDC"; // Insert the text
  
          // Trigger 'input' and 'change' events to ensure the value is registered
          inputField.dispatchEvent(new Event('input', { bubbles: true }));
          inputField.dispatchEvent(new Event('change', { bubbles: true }));
          
          // Notify the popup that the text is inserted
          chrome.runtime.sendMessage({ message: "Text inserted." });
        } else {
          chrome.runtime.sendMessage({ message: "Gift Card PIN input field not found!" });
          return;
        }
  
        // Step 3: Wait 1 more second to click the "Check Balance" button
        setTimeout(() => {
          const button = document.getElementById('balanceCheck-balance');
          if (button) {
            button.click(); // Click the button
            chrome.runtime.sendMessage({ message: "Button clicked." }); // Notify the popup
  
            // Step 4: Wait 2 seconds after clicking the button
            setTimeout(() => {
              // Step 5: Get the content of the balance div
              const balanceDiv = document.querySelector('.rs-gcbalance-balance');
              if (balanceDiv) {
                const balanceText = balanceDiv.textContent; // Get the text content
                chrome.runtime.sendMessage({ message: "Balance: " + balanceText }); // Send balance to popup
              } else {
                chrome.runtime.sendMessage({ message: "Balance div not found!" });
              }

              setTimeout(() => {
                const checkAnotherLink = document.querySelector('a.as-buttonlink.more');
                if (checkAnotherLink) {
                    checkAnotherLink.click();
                }else {
                    chrome.runtime.sendMessage({ message: "Check another check link not found!" });
                }
              }, 1000);
            }, 2000); // Wait 2 seconds before getting the balance
  
          } else {
            chrome.runtime.sendMessage({ message: "Check Balance button not found!" });
          }
        }, 1000); // Wait 1 second before clicking the button
  
      }, 1000); // Wait 1 second after "Waiting for insert" to insert text
  
    }, 1000); // Wait 1 second to print "Waiting for insert..."
  }
  
  // Start the process when the content script is loaded
  performSteps();
  