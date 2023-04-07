export const genId = () => {
  const id = "1234567890";

  let newId = "";

  for(let i=0; i<8; i++){
    newId += `${id.charAt(Math.round(Math.random() * id.length))}`;
  }

  return newId;
}
