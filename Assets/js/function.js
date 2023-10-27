const copyButtonLabel = "Copy";

async function copyCode(code, button) {
    let text = code.innerText.substring(0, code.innerText.length - button.innerText.length);

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
                if (code.classList.length == 0) { // only add the button if no external syntaxhighlighting will be used
                    let button = document.createElement("button");

                    button.innerText = copyButtonLabel;
                    code.append(button);
                    button.addEventListener("click", async () => {
                        await copyCode(code, button);
                    });
                }
            }
        }
    }

    for (let table of [...document.getElementsByTagName("table")]) {
        
        if (table.classList.length == 0 && table.scrollHeight > 400) {
            let div = document.createElement("div");
            div.style.height = "400px";
            div.style.overflow = "auto";

            table.parentNode.insertBefore(div, table);
            table.firstElementChild.style.position = "sticky";
            table.firstElementChild.style.insetBlockStart = "-1px";

            div.append(table);
        }
    }
});
