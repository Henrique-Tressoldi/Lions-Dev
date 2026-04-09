const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let proximoId = 1;

let alunos = [];

function mostrarMenu(){
    console.log("\n=================================")
    console.log("SISTEMA ESCOLAR")
    console.log("=================================")
    console.log("1- Cadastrar Aluno")
    console.log("2- Listar Aluno")
    console.log("3- Buscar por Id")
    console.log("4- Atualizar Aluno")
    console.log("5- Remover Aluno")
    console.log("6- Mostrar Alunos Aprovados")
    console.log("7- Mostrar Alunos Reprovados")
    console.log("0- Sair")
    console.log("=================================")


    rl.question("Escolha uma opção: ", (opcao)=> {
        if(opcao === "1"){
            cadastrarAluno();
        }else if (opcao === "2"){
            listarAlunos();
        }else if (opcao === "3"){
            buscarAlunoPorId();
        }else if(opcao === "4"){
            atualizarAluno();
        }else if(opcao === "5"){
            removerAluno();
        }else if(opcao === "6"){
            MostrarAlunosAprovados();
        }else if(opcao === "7"){
            MostrarAlunosReprovados();
        }else if(opcao==="0"){
            console.log("Saindo...");
            rl.close();
        }
    }
    )

}


function MostrarAlunosReprovados(){
    console.log("Alunos reprovados");

    for(i = 0; i<alunos.length; i++){
        if(alunos[i].nota < 6){
            


            console.log("ID: " + alunos[i].id);
            console.log("Nome: " + alunos[i].nome)
            console.log("Idade: " + alunos[i].idade)
            console.log("Turma: " + alunos[i].turma)
            console.log("Nota: " + alunos[i].nota)
        
        }
    }
    mostrarMenu();
    
}

function listarAlunos(){
    console.log("Listar Alunos");

    if(alunos.length === 0){
        console.log("Nenhum aluno cadastrado");
        mostrarMenu();
        return;
    }else{
        for(let i = 0; i < alunos.length; i++){
                console.log("id: " + alunos[i].id);
                console.log("Nome: " + alunos[i].nome);
                console.log("Idade: " + alunos[i].idade);
                console.log("Turma: " + alunos[i].turma);
                console.log("Nota: " + alunos[i].nota);
            
        }
    mostrarMenu();
    
    }
}


function cadastrarAluno(){

    console.log("Cadastrar Aluno");

    rl.question("Digite o nome do aluno: ", (nome) => {
        rl.question("Digite a idade do aluno: ", (idade) => {
            rl.question("Digite o número da turma do aluno: ", (turma) => {
                rl.question("Digite a nota do aluno: ", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);
                    turma = Number(turma);

                    if(nome === "" || idade === "" || nota === "" || turma === ""){
                        console.log("ERRO: não preencheu tudo")
                        mostrarMenu();
                        return;
                    }
                    if(idade <= 0 || nota < 0 || nota > 10){
                    
                        console.log("ERRO: Idade ou nota invalida");
                        mostrarMenu();
                        return;
                    }

                    let aluno = {

                        id: proximoId++,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota

                    }

                    alunos.push(aluno);
                    //proximoId++;
                    console.log("Aluno Cadastrado(a) com sucesso");
                    mostrarMenu();




                })
            })
        })

    })
}


function buscarAlunoPorId(){
    console.log("Buscar aluno por id")

    rl.question("qual id voce quer buscar? ", (id) => {

        id = Number(id);

        const aluno = encontrarAlunoPorId(id);

        if (aluno === null) {
            console.log("Aluno não encontrado");
            mostrarMenu();
            return;
        }

        
        console.log("\nAluno Encontrado");
        console.log("ID: " + aluno.id);
        console.log("Nome: " + aluno.nome)
        console.log("Idade: " + aluno.idade)
        console.log("Turma: " + aluno.turma)
        console.log("Nota: " + aluno.nota)
        
        mostrarMenu();
    })

}

function encontrarAlunoPorId(id){
    return alunos.find((aluno) => aluno.id === id);
}


function atualizarAluno(){
    console.log("Atualizar aluno");

    rl.question("Digite o id do aluno: ", (id) => {
        id = Number(id);

        let aluno = encontrarAlunoPorId(id);

        if (aluno === null){
            console.log("aluno nao encontrado");
            mostrarMenu();
            return;
        }

        rl.question("Digite o novo nome: ", (novoNome) => {
            rl.question("Digite a nova idade: ", (novaIdade) => {
                rl.question("Digite a nova turma: ", (novaTurma) => {
                    rl.question("Digite a nova nota: ", (novaNota) => {

                        novaIdade= Number(novaIdade);
                        novaTurma = Number(novaTurma);
                        novaNota = Number(novaNota);

                        if(novoNome === "" || novaIdade === ""|| novaIdade === "" || novaTurma === ""){
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }

                        if(novaIdade <= 0 || novaNota < 0 || novaNota > 10){
                            console.log("Todos os dados precisam ser preenchidos");
                            mostrarMenu();
                            return;
                        }



                        aluno.nome = novoNome;
                        aluno.idade = novaIdade;
                        aluno.turma = novaTurma;
                        aluno.nota = novaNota;

                        mostrarMenu();

                    })
                })
            })
        })



    })
}

function removerAluno(){
    console.log("Remover aluno");

    rl.question("qual o id do aluno q deseja remover? ", (idRemovido) => {
        

        if(idRemovido === ""){
            console.log("Deve inserir o id do aluno.");
            mostrarMenu();
            return;

        }


        idRemovido = Number(idRemovido);

        let idd = 0;

        
       
        for(let i = 0; i < alunos.length; i++){
            if (alunos[i].id === idRemovido) {
                idd = i
            }



            
        }

        alunos.splice(idd,1)

        //for(let i = id-1; i < alunos.length; i++){
        //    alunos[i].id = i
        //}


        console.log("Aluno removido com sucesso! ")

        mostrarMenu();


    })

}


function MostrarAlunosAprovados(){
    console.log("Alunos aprovados");

    for(i = 0; i<alunos.length; i++){
        if(alunos[i].nota >= 6){
            


            console.log("ID: " + alunos[i].id);
            console.log("Nome: " + alunos[i].nome)
            console.log("Idade: " + alunos[i].idade)
            console.log("Turma: " + alunos[i].turma)
            console.log("Nota: " + alunos[i].nota)
        
        }
    }
    mostrarMenu();
}


mostrarMenu();