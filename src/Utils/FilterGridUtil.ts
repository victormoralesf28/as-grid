export const filterDate = (
  filterLocalDateAtMidnight: Date,
  cellValue: string
): number | undefined => {
  if (cellValue == null) return -1;

  const cellDate = new Date(cellValue);

  if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) return 0;

  if (cellDate < filterLocalDateAtMidnight) return -1;

  if (cellDate > filterLocalDateAtMidnight) return 1;
};
