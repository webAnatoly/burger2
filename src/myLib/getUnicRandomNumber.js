let counter = 0;

const getUnicRandomNumber = () => {
  const randomNumber = counter;
  counter += 1;
  return randomNumber;
};

export default getUnicRandomNumber;
