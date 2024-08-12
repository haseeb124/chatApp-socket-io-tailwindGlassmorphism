

export const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true})
}