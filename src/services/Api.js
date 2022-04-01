const fetchCurrencies = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const JSON = await response.json();
  return JSON;
};

// const teste = async () => {
//   const Obj = await fetchCurrencies();
//   //   const currencies = Obj.map((elem) => elem.code);
//   console.log(Object.keys(Obj));
// };

export default fetchCurrencies;
