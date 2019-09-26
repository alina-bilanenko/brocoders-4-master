export const formatTime = timeIsNow => {
  const dateIsNow = new Date(timeIsNow);
  return dateIsNow.toLocaleTimeString();
};

export const formatTimeTimer = timeIsNow => {
  const dateIsNow = new Date(timeIsNow);
  return dateIsNow.toISOString().substr(11, 8);
};
