document.body.style.backgroundColor="red"
var jump_page = chrome.runtime.getURL('white.html')
console.log("jump_page is ",jump_page)
window.location.assign(jump_page);
//window.location.assign("extension://ijbnapbdlnmkbcjokokhoekcgkhkoaae/white.html")
/*"web_accessible_resources": [
    {
        "resources": [ "white.html" ]
      }],
    */
/*
      "content_scripts": [
        {
          "matches": ["https://*\/*"],
          "js": ["content_script.js"]
        }
      ],
    "host_permissions": ["https://*\/*"],
*/