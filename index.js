console.log('** DINDIN ACADEMY **');
// comentários
let cursos = [{
    id: 1,
    titulo: 'Investimentos para Iniciantes',
    descricao: 'Esse curso é para quem não manja de investimento mas quer ficar rico',
    professor: 'Jane Doe',
    listaAulas: []
}, {
    id: 2,
    titulo: 'Renda Extra',
    descricao: 'Renda extra sem sair de casa',
    professor: 'Seu Madruga',
    listaAulas: []
}];


function listarCursos() {
    let htmlCursos = "";
    //criando lista de cursos em HTML
    for (let index = 0; index < cursos.length; index++) {
        // = atribuir novo valor 
        // += acrescentar novo valor
        htmlCursos += `
            <article class="card">
                <h2>${cursos[index].titulo}</h2>
                <p>${cursos[index].descricao}</p>
                <p>Professor: ${cursos[index].professor}</p>
            </article>
        `;
    }

    // selecionando elemento que vai englobar a lista
    let painelCursos = document.querySelector(".painel-cursos");
    // inserindo lista de cursos no html
    painelCursos.innerHTML = htmlCursos;
}

function adicionarAula(idCurso, linkAula) {
    // encontrando posição do curso
    let indexCurso = null;
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == idCurso) {
            indexCurso = i;
        }
    }
    // adicionando nova aula ao curso selecionado
    if (indexCurso != null) {
        cursos[indexCurso].listaAulas.push(linkAula);
        console.log(`Aula adicionada ao curso ${cursos[indexCurso].titulo}!`)

    } else {
        console.log('Curso não encontrado.')
    }
}

// cadastro de curso
let btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.onclick = function (evento) {
    // prevenindo comportamento padrão
    evento.preventDefault();

    // capturar campos do formulário
    let titulo_input = document.querySelector('#titulo');
    let descricao_input = document.querySelector('#descricao');
    let professor_input = document.querySelector('#professor');

    //criando o novo curso a partir dos dados do form
    let novoCurso = {
        id: cursos.length,
        titulo: titulo_input.value,
        descricao: descricao_input.value,
        professor: professor_input.value,
        listaAulas: []
    };

    // adicionando novo curso na lista
    cursos.push(novoCurso);
    // atualizar lista de cursos no HTML
    listarCursos();

}



listarCursos();