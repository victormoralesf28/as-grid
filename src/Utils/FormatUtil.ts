export const formatNumber = (number: string | undefined) =>
  number ? parseFloat(number) : null;

export const formatDate = (date: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date(date);
  const yyyy = today.getFullYear();
  const mm = today.getMonth();
  const dd = today.getDate().toString().padStart(2, "0");

  return `${months[mm]} ${dd}, ${yyyy}`;
};
