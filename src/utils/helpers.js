export const formatDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date)) return dateString;

  const day = date.getDate();

  const getOrdinal = (day) => {
    if (day > 3 && day < 21) return `${day}th`;

    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  return `${getOrdinal(day)} ${date.toLocaleString("en-GB", {
    month: "long",
  })} ${date.getFullYear()}`;
};
