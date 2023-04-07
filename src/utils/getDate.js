export const getDate = () => {

  const timestamp = Date.now();
  const date = new Date(timestamp);

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export const getSimpleDate = () => {

  const timestamp = Date.now();
  const date = new Date(timestamp);

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
