import {format, parse} from 'date-fns';

export const normalizeDate = (dateString: string) => {
  const parsedDate = parse(dateString, 'EEE, dd MMM yyyy HH:mm:ss xx', new Date());
  const normalizedDate = format(parsedDate, 'yyyy-MM-dd');
  return normalizedDate;
};
