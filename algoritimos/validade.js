const validade = (data, validade) => {
  const splitValidade = validade.split("d");
  const validateInt = parseInt(splitValidade[0]);

  const dateReceived = new Date(data);
  dateReceived.setDate(dateReceived.getDate() + validateInt);
  const currentDate = new Date();
  return dateReceived > currentDate;
};

console.log(validade("2021-12-10T00:00:00.000Z", "180d"));
console.log(validade("2021-11-17T20:40:09.503Z", "10d"));
