// Immediatly invoked function Expresion (IIFI)

(function dataBase() {
  //named iifi
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Sanjay");
