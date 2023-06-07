type Period = {
  readonly start: string;
  readonly end: string | null;
};
export const formatPeriod = ({ start, end }: Period) => {
  const startPeriod = start.split("-")[0];
  const endPeriod = end ? end.split("-")[0] : "現在";
  return `${startPeriod} - ${endPeriod}`;
};
