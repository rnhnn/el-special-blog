export function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const utcDate = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(utcDate);
}