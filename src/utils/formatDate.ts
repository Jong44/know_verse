
export const formatedDate = (date: string | undefined) => {
  if (!date) return "Unknown date";
  const d = new Date(date);
  const now = new Date();
  const diff = Math.abs(now.getTime() - d.getTime());
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else {
    return `${days} days ago`;
  }
}