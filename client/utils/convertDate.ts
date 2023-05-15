const convertDate = (unixDate: number | string) => {
  const date = new Date(Number(unixDate) * 1000);
  return `${date.getMonth()}/${date.getDate()}`;
};

export { convertDate };
