// Highlight
hljs.initHighlightingOnLoad();

// SunriseSunset
const getSunrise = SunriseSunsetJS.getSunrise;
const getSunset = SunriseSunsetJS.getSunset;
navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const sunrise = getSunrise(latitude, longitude).getTime();
  const sunset = getSunset(latitude, longitude).getTime();
  const now = Date.now();
  if (now < sunrise || now < sunset) {
    const body = document.querySelector('body');
    body.classList.add('dark');
  }
});
