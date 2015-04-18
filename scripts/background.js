function getword(info,tab) {

    console.log(info.linkUrl);
    chrome.tabs.create({ 

        url: info.linkUrl,
    })


}

chrome.contextMenus.create({

    title: "Add to Playlist", 
    contexts:["link"], 
    onclick: getword,

});