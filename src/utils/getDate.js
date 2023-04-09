export const getDate = () => {

  const timestamp = Date.now();
  const date = new Date(timestamp);

  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export const getSimpleDate = () => {

  const timestamp = Date.now();
  const date = new Date(timestamp);

  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  return `${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `0${minutes}` : minutes}:${seconds.length === 1 ? `0${seconds}` : seconds}`;
};
