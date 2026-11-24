export function formatPublishDate(publishDate: Date | string): string {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'America/Chicago',
  }).format(new Date(publishDate));

  return formattedDate;
}
