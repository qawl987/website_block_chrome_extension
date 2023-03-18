// Initialize button with user's preferred color
//This code grabs the button from popup.html and requests the color value from storage
let newpage = document.getElementById("newpage");

// When the button is clicked, inject setPageBackgroundColor into current page
newpage.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.create({
      index: tab.id + 1,
      active: true,
      url: '/options.html',
      })
    console.log('click button')
  });
  