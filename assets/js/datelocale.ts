function formatDate(date: string | null) {
  if (!date) return date;
  return new Intl.DateTimeFormat(process.env.lang_code, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

if ('Intl' in window) {
  window.addEventListener('load', () => {
    for(const span of [...document.querySelectorAll('.localizable-date')]) {
      const localizedDate = formatDate(span.getAttribute('title'));
      if (localizedDate) {
        span.innerHTML = localizedDate;
      }
    }
  });
}
