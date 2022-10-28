const addUrl = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    webname = document.getElementById('name').value,
    url = document.getElementById('url').value
    document.forms[0].reset(); // to clear the form for the next entries
    block_sites={
      webname : webname,
      url : url
    }
    chrome.storage.sync.set({[webname]: url}, function() {
      console.log('Value is set to ' + webname,url);
    })
    //for display purposes only
    /*let pre = document.querySelector('#msg pre');
    pre.textContent = url;
    pre.style.borderBottom="1px solid #fff";pre.style.padding="10px 0";pre.style.marginBottom="30px";
    ;*/
    showCurrentBlock();
  }
  
  async function showCurrentBlock()
  {
    const myNode = document.getElementById("msg");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    const all = await chrome.storage.sync.get();
    var parent = document.getElementById("msg");
    for (const [key, val] of Object.entries(all)) {
      //var bigDiv = document.createElement("div");
      var child = document.createElement("pre");
      child.classList.add("currentWeb");
      child.setAttribute("id",[key]);
      child.textContent = val;
      //child.textContent +='\n';
      parent.append(child);
      var childButton = document.createElement("button");
      childButton.classList.add("deleteButton");
      childButton.setAttribute("id",[key]);
      childButton.textContent = "click to delete"
      parent.append(childButton);
    }
    /*let pre = document.querySelector('#msg pre');
      pre.textContent = showWeb+'\n' ;*/
  }
  function deleteUrl(button){
    //button.preventDefault();
    console.log(typeof button);
    console.log(button);
    var id = button.id;
    console.log(id);
    const parent = document.getElementById("msg");
    var btn = document.getElementById(id);
    parent.removeChild(btn);
    var url = document.getElementById(id);
    parent.removeChild(url);
    chrome.storage.sync.remove(id);
  }
  function clearAll(){
    const myNode = document.getElementById("msg");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    chrome.storage.sync.clear();
  }
  //makesure load before action
  document.addEventListener('DOMContentLoaded', ()=>{
    showCurrentBlock();
      //addMovie would trigger callback function
      document.getElementById('btn').addEventListener('click', addUrl);
  });
  document.addEventListener('DOMContentLoaded', ()=>{
      var wrapper = document.getElementById('msg');
      wrapper.addEventListener('click',(ev)=>{
        const isBtn = ev.target.nodeName ==='BUTTON';
        console.log("you click");
        if(!isBtn){
          return;
        }
        else deleteUrl(ev.target);
      })
  });
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('clearWeb').addEventListener('click', clearAll);
  });