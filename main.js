chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    console.log(tabs)
    
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    console.log(url)
    document.getElementById("btn").addEventListener("click", () => {
        const hash = document.getElementById("hash").value
        console.log(hash)
        document.write(`${url}/commit/${hash}`)
    });
    
});
