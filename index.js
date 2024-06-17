const dados = [{
    nome: "Jean",
    email: "jean@gmail.com",
    idade: 19,
},{
    nome: "Julia",
    email: "julia@gmail.com",
    idade: 23,
}, {
    nome: "Cleonice",
    email: "cleonice@gmail.com",
    idade: 58,
}]

let input 
let salvar

console.log("Bem vindo ao login, informe seu email para prosseguir")
process.stdin.on("data", function (data){
    input = data.toString().trim()
    for (let i = 0; i < dados.length; i++)
    if (dados[i].email === input) {
        salvar = dados[i]
    } if (salvar) {
        console.log("Bem vindo(a)")
        salvar = undefined
    } else {
        console.log("Pessoa não encontrada")
        salvar = undefined
    }
})