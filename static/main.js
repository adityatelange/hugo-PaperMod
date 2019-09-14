hljs.initHighlightingOnLoad();

const listBg = document.querySelector('.list-bg');

if (listBg) {
  const halfAnHour = 1000 * 60 * 30;

  function setListBgStyle() {
    const now = new Date();
    const time = now.getHours() + now.getMinutes() / 60;

    let opacity = Math.abs(time - 14);
    opacity = opacity > 12 ? 10 + Math.abs(opacity - 14) : opacity;
    opacity = Number((opacity / 12).toFixed(2));

    listBg.setAttribute('style', `opacity: ${opacity}`);
  }

  requestAnimationFrame(setListBgStyle);

  setInterval(() => {
    requestAnimationFrame(setListBgStyle);
  }, halfAnHour);
}
