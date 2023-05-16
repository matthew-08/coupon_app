const convertDate = (
  unixDate: number | string,
  options?: {
    redeemdAt: boolean;
  },
) => {
  let date;
  if (options && options.redeemdAt) {
    date = new Date(Number(unixDate));
  } else {
    date = new Date(Number(unixDate) * 1000);
  }
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

export { convertDate };
