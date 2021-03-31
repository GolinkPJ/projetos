function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; /*<b> coloca em negrite</b>*/
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}

function redirecionar(){
    //window.open("https://onepieceex.net/"); /*abre em uma nova aba*/
    window.location.href = "https://onepieceex.net/"; /*abre na mesma aba*/
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

let line = gets(11 7).split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = (A + B); // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);


/*function soma(n1,n2){
    return n1+n2;
}
//alert(soma(5,10));*/

/*function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}

var idade =prompt("Qual é a sua idade?");
console.log(validaIdade(idade));*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*var nome =  "Paulo José";
var idade = 30;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
// é um comentario
//alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade*idade2);
//console.log(frase.replace("Japão","Brasil"))
console.log(frase.toUpperCase());*/

/*var lista = ["maça", "pera", "laranja"];
console.log(lista);
lista.push("uva");
alert(lista[1])
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);*/

/*
//var idade = 18;
var idade = prompt("Qual a sua idade?");
if  (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    //count = count + 1;
    count++;
}
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
*/