// copy code in large code block

document.querySelectorAll('div.highlight').forEach((copyButtonWrapper) => {
    const button = document.createElement('button');
    button.contentEditable = false;
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    copyButtonWrapper.appendChild(button);

    button.addEventListener('click', () => {
        const code = copyButtonWrapper.querySelector('code').innerText;
        navigator.clipboard.writeText(code).then(() => {
            button.innerText = 'Copied!';
            setTimeout(() => { button.innerText = 'Copy'; }, 2000);
        });
    });
});