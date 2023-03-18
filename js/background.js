chrome.tabs.onUpdated.addListener(()=>{
  //chrome.storage.sync.clear();
  console.log("updated!");
  enumStorage();
}
)
async function enumStorage() {
  const all = await chrome.storage.sync.get();
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log('the url',url)
  for (const [key, val] of Object.entries(all)) {
    console.log(val);
    re = new RegExp(val);
    if(re.test(url))
    {
      console.log('yes')
        chrome.tabs.update({
          active: true,
          url: '/white.html',
          }
        )
    }
    else
      console.log("nothing");
  }
  })
}
function refreshWeb(){
  console.log("got notified");
  enumStorage();
}