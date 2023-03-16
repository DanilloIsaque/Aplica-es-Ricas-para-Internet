

var registro= prompt("Entre com seu nome:");
localStorage.setItem("Nome",registro); //key do local storage,valor
var endereco = prompt("qual seu endereco:");
var cpf= prompt("qual seu cpf:");
var pretendentes = prompt("quantos pretendntes:");
// chamar o localstorage,ela vem do window(no caso vamos usar o setItem)

localStorage.setItem("Nome",registro); //key do local storage,valor
localStorage.setItem("Endereco",endereco);
localStorage.setItem("CPF",cpf);
localStorage.setItem("Pretendentes",pretendentes);
//para recuperar o valor armazenado em uma key do localStorage, usamos o getItem
//alert(localStorage.getItem("Nome"));
alert(localStorage.getItem("Nome"));
alert(localStorage.getItem("Endereco"));
alert(localStorage.getItem("CPF"));
alert(localStorage.getItem("Pretendentes"));

// para apresentar na pagina , podemos usar o document.write

/*document.write("o seu nome é: " +registro + " ,mora no endereço "+endereco
+", seu cpf é "+cpf + " e o numero de pretendentes: " + pretendentes);
*/


