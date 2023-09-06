const copyButtonLabel = "Copy";

async function copyCode(code, button) {
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
    
    // visual feedback that task is completed
    button.innerText = "Code copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
  }

KB.on('dom.ready', function () {
    for (let item of [...document.getElementsByTagName("pre")]) {
        if (item.scrollHeight > 200) {
            item.style.height = "200px"
        }
    }

    if (navigator.clipboard) {
        for (let item of [...document.getElementsByTagName("code")]) {
            let button = document.createElement("button");

            button.innerText = copyButtonLabel;
            item.prepend(button);
            button.addEventListener("click", async () => {
                await copyCode(item, button);
            });
        }
    }
});
