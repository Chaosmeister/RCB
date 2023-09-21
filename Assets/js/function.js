const copyButtonLabel = "Copy";

async function copyCode(code, button) {
    let text = code.innerText.substring(button.innerText.length);

    await navigator.clipboard.writeText(text);
    
    // visual feedback that task is completed
    button.innerText = "Code copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
  }

KB.on('dom.ready', function () {
    for (let pre of [...document.getElementsByTagName("pre")]) {
        if (pre.scrollHeight > 200) {
            pre.style.height = "200px"
        }

        if (navigator.clipboard) {
            for (let code of [...pre.getElementsByTagName("code")]) {
                let button = document.createElement("button");
    
                button.innerText = copyButtonLabel;
                code.prepend(button);
                button.addEventListener("click", async () => {
                    await copyCode(code, button);
                });
            }
        }
    }
});
