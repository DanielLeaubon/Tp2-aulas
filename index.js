
const idade = prompt("Qual é a sua idade?");


if (idade !== null) {

    const idadeInt = parseInt(idade, 10);

    if (!isNaN(idadeInt)) {
        console.log(`Você tem ${idadeInt} anos!`);
    } else {
        console.log("Por favor, insira um valor numérico válido.");
    }
} else {
    console.log("Você cancelou a entrada. Até mais!");
}
