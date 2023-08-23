const caixa = document.querySelector("#caixa");
let cursos = [];

let resposta ="";

//incluindo curso na matriz
while(resposta !="N"){
let curso = prompt("Digite o nome do curso: ")    
cursos.push(curso.toUpperCase());
resposta = prompt("Cadastrar outro curso S/N?")
if(resposta.toUpperCase()=="N"){
    cursos.forEach((aula)=>{
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>---------------<br>";
        caixa.appendChild(p);
    })
    break;
    }
}
//excluir
resposta = prompt("Excluir curso S/N");
if(resposta.toUpperCase()=="S"){
    let curso = prompt("digite o nome do curso para excluir");
    // pegando a posição do elemento dentro da matriz
    let posicao = cursos.indexOf(curso.toUpperCase(),1)
    curso.splice(posicao);

}