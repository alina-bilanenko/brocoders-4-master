export const toHHMMSS = timeIsNow => {
  const dateIsNow = new Date(timeIsNow);
  return dateIsNow.toLocaleTimeString();
};

export const toHHMMSSTimer = timeIsNow => {
  const dateIsNow = new Date(timeIsNow);
  return dateIsNow.toISOString().substr(11, 8);
};