export const timeConvertions = (utcTime) => {
  const now = new Date();
  const utc = new Date(utcTime);
  // console.log(now, utc);
  const timeDifference = now.getTime() - utc.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference >= 24) {
    const daysDifference = Math.floor(hoursDifference / 24);
    return `${daysDifference}d`;
  }

  return `${hoursDifference}h`;
};
