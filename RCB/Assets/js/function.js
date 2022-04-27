KB.on('dom.ready', function() {
    var list = [...document.getElementsByTagName("pre")]

    for (let item of list) {
        if (item.scrollHeight > 200) {
            item.style.height = "200px"
        }
        
        if (item.scrollWidth > 500) {
            item.style.width = "500px"
        }
    }
});
