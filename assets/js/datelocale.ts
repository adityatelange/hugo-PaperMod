function formatDate(date: string | null) {
  if (!date) return date;
  return new Intl.DateTimeFormat(process.env.lang_code, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour:'2-digit',
    // minute: '2-digit',
  }).format(new Date(date));
}

if ('Intl' in window) {
  window.addEventListener('load', () => {
    for(const span of [...document.querySelectorAll('.localizable-date')]) {
      var persianDate = formatDate(span.getAttribute('title'));
      if (persianDate) {
        span.innerHTML = persianDate;
      }
    }
  });
}