document.querySelectorAll('pre > code').forEach((codeBlock) => {
    const codeBlockWrap = codeBlock.closest('.pe-code-block-wrap')
    const copyButton = codeBlockWrap.querySelector('button')

    function copyingDone() {
        copyButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="pe-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0633 5.67375C18.5196 5.98487 18.6374 6.607 18.3262 7.06331L10.8262 18.0633C10.6585 18.3093 10.3898 18.4678 10.0934 18.4956C9.79688 18.5234 9.50345 18.4176 9.29289 18.2071L4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929C5.18342 11.9023 5.81658 11.9023 6.20711 12.2929L9.85368 15.9394L16.6738 5.93664C16.9849 5.48033 17.607 5.36263 18.0633 5.67375Z" fill="currentColor"></path></svg>'
        setTimeout(() => {
            copyButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="pe-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5c-1.1046.0-2 .89543-2 2h4c0-1.10457-.8954-2-2-2zm-3.46487.0C9.22675 2.3044 10.5194 1.5 12 1.5s2.7733.8044 3.4649 2H17.25c1.6569.0 3 1.34315 3 3v12c0 1.6569-1.0931 3-3 3H6.75c-1.65685.0-3-1.3431-3-3V6.5c0-1.65685 1.34315-3 3-3H8.53513zM8 5.5H6.75c-.55228.0-1 .44772-1 1v12c0 .552299999999999.44772 1 1 1h10.5C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5c0-.55228-.447700000000001-1-1-1H16c0 1.10457-.8954 2-2 2H10c-1.10457.0-2-.89543-2-2z" fill="currentColor"></path></svg>'
        }, 2000);
    }

    copyButton.addEventListener('click', (cb) => {
        // 防止触发 details-summary 点击事件
        cb.stopPropagation();
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyingDone();
            })
            return;
        }
        const range = document.createRange();
        range.selectNodeContents(codeBlock);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        try {
            document.execCommand('copy');
            copyingDone();
        } catch (e) {
        }
        selection.removeRange(range);
    });
});

let peCodeDetails = document.getElementsByClassName('pe-code-details')
for (let element of peCodeDetails) {
    const peCodeSummary = element.getElementsByClassName('pe-code-details-summary')[0];
    if (peCodeSummary) {
        peCodeSummary.addEventListener('click', () => {
            element.classList.toggle('open');
        }, false);
    }
}