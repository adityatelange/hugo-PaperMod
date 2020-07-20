function setTheme() {
    const time = new Date();

    const prev = localStorage.getItem('date');
    const date = String(time.getMonth() + 1) + '.' + String(time.getDate());

    const now = time.getTime();
    let sunrise;
    let sunset;

    function setBodyClass() {
        if (now > sunrise && now < sunset) return;
        document.body.classList.add('dark');
    }

    if (date !== prev) {
        fetch('https://api.ipgeolocation.io/astronomy?apiKey=5ed37d85103e4defa5df4c5298ed5215')
            .then(res => res.json())
            .then(data => {
                sunrise = data.sunrise.split(':').map(Number);
                sunset = data.sunset.split(':').map(Number);
            })
            .catch(() => {
                sunrise = [7, 0];
                sunset = [19, 0];
            })
            .finally(() => {
                sunrise = time.setHours(sunrise[0], sunrise[1], 0);
                sunset = time.setHours(sunset[0], sunset[1], 0);
                setBodyClass();
                localStorage.setItem('sunrise', sunrise);
                localStorage.setItem('sunset', sunset);
            });
        localStorage.setItem('date', date);
    } else {
        sunrise = Number(localStorage.getItem('sunrise'));
        sunset = Number(localStorage.getItem('sunset'));
        setBodyClass();
    }
}