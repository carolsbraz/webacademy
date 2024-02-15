let turmas: Array<Turma> = new Array<Turma>();

let numTurmas: number = 0;
let numAlunos: number = 0;

class Aluno {
  private id: number;
  private nome: string;
  private idade: number;
  private altura: number;
  private peso: number;

  constructor(
    id: number,
    nome: string,
    idade: number,
    altura: number,
    peso: number
  ) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }

  public get getId(): number {
    return this.id;
  }
  public set setId(id: number) {
    this.id = id;
  }

  public get getNome(): string {
    return this.nome;
  }
  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getIdade(): number {
    return this.idade;
  }
  public set setIdade(idade: number) {
    this.idade = idade;
  }

  public get getAltura(): number {
    return this.altura;
  }
  public set setAltura(altura: number) {
    this.altura = altura;
  }

  public get getPeso(): number {
    return this.peso;
  }
  public set setPeso(peso: number) {
    this.peso = peso;
  }
}

class Turma {
  private id: number;
  private nome: string;
  private listaAlunos: Array<Aluno>;

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
    this.listaAlunos = new Array<Aluno>();
  }

  public get getId(): number {
    return this.id;
  }
  public set setId(id: number) {
    this.id = id;
  }

  public get getNome(): string {
    return this.nome;
  }
  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getListaAlunos(): Array<Aluno> {
    return this.listaAlunos;
  }

  public adicionarAluno(aluno: Aluno): void {
    this.listaAlunos.push(aluno);
  }

  public get getNumAlunos(): number {
    return this.listaAlunos.length;
  }

  public get getMediaIdades(): number {
    let soma: number = 0;

    this.listaAlunos.forEach((aluno) => {
      soma += aluno.getIdade;
    });

    let media = soma / this.getNumAlunos;

    if (isNaN(media)) {
      return 0;
    } else {
      return media;
    }
  }

  public get getMediaAlturas(): number {
    let soma: number = 0;

    this.listaAlunos.forEach((aluno) => {
      soma += aluno.getAltura;
    });

    let media = soma / this.getNumAlunos;

    if (isNaN(media)) {
      return 0;
    } else {
      return media;
    }
  }

  public get getMediaPesos(): number {
    let soma: number = 0;

    this.listaAlunos.forEach((aluno) => {
      soma += aluno.getPeso;
    });

    let media = soma / this.getNumAlunos;

    if (isNaN(media)) {
      return 0;
    } else {
      return media;
    }
  }
}

function listaAlunos(aluno: Aluno): HTMLElement {
  const tr = document.createElement("tr");

  const id = document.createElement("td");
  id.innerText = aluno.getId + "";

  const nome = document.createElement("td");
  nome.innerText = aluno.getNome + "";

  const idade = document.createElement("td");
  idade.innerText = aluno.getIdade + "";

  const altura = document.createElement("td");
  altura.innerText = aluno.getAltura + "";

  const peso = document.createElement("td");
  peso.innerText = aluno.getPeso + "";

  tr.appendChild(id);
  tr.appendChild(nome);
  tr.appendChild(idade);
  tr.appendChild(altura);
  tr.appendChild(peso);

  return tr;
}

function listaTurmas(): void {
  const div = document.createElement("div");
  div.classList.add("turma");

  const listTurmas = <HTMLInputElement>document.getElementById("turmas");

  listTurmas.innerHTML = "";

  turmas.forEach((turma) => {
    const nomeTurma = document.createElement("h4");
    nomeTurma.innerHTML = turma.getNome;

    const qtdeAlunos = document.createElement("p");
    qtdeAlunos.innerHTML = "<b>Quantidade de alunos: </b>" + turma.getNumAlunos;

    const mediaIdade = document.createElement("p");
    mediaIdade.innerHTML = "<b>Média de idades: </b>" + turma.getMediaIdades;

    const mediaAltura = document.createElement("p");
    mediaAltura.innerHTML = "<b>Média de altura: </b>" + turma.getMediaAlturas;

    const mediaPeso = document.createElement("p");
    mediaPeso.innerHTML = "<b>Média de peso: </b>" + turma.getMediaPesos;

    const table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");

    const thead = document.createElement("thead");

    const tr = document.createElement("tr");

    const id = document.createElement("th");
    id.innerText = "#";

    const nome = document.createElement("th");
    nome.innerText = "Nome";

    const idade = document.createElement("th");
    idade.innerText = "Idade";

    const altura = document.createElement("th");
    altura.innerText = "Altura";

    const peso = document.createElement("th");
    peso.innerText = "Peso";

    tr.appendChild(id);
    tr.appendChild(nome);
    tr.appendChild(idade);
    tr.appendChild(altura);
    tr.appendChild(peso);

    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    turma.getListaAlunos.forEach((aluno) => {
      tbody.appendChild(listaAlunos(aluno));
    });

    table.appendChild(tbody);
    const br = document.createElement("br");

    div.appendChild(nomeTurma);
    div.appendChild(qtdeAlunos);
    div.appendChild(mediaIdade);
    div.appendChild(mediaAltura);
    div.appendChild(mediaPeso);
    div.appendChild(table);
    div.appendChild(br);

    listTurmas?.appendChild(div);
  });
}

const addTurma = document.getElementById("btn-add-turma");

addTurma?.addEventListener("click", () => {
  const nome = <HTMLInputElement>document.getElementById("in-nome-turma");

  const turma: Turma = new Turma(numTurmas++, nome.value);

  turmas.push(turma);

  const selectTurmas = <HTMLInputElement>(
    document.getElementById("select-turmas")
  );

  selectTurmas.innerHTML = "";

  turmas.forEach((turma) => {
    const opt = document.createElement("option");
    opt.setAttribute("value", turma.getId + "");
    opt.innerText = turma.getNome;

    selectTurmas.appendChild(opt);
  });

  nome.value = "";

  listaTurmas();
});

const addAluno = document.getElementById("btn-add-aluno");

addAluno?.addEventListener("click", () => {
  const selectTurmas = <HTMLInputElement>(
    document.getElementById("select-turmas")
  );
  const nome = <HTMLInputElement>document.getElementById("in-nome-aluno");
  const idade = <HTMLInputElement>document.getElementById("in-idade-aluno");
  const altura = <HTMLInputElement>document.getElementById("in-altura-aluno");
  const peso = <HTMLInputElement>document.getElementById("in-peso-aluno");

  const idadeNumber: number = +idade.value;
  const alturaNumber: number = +altura.value;
  const pesoNumber: number = +peso.value;

  const aluno: Aluno = new Aluno(
    numAlunos++,
    nome.value,
    idadeNumber,
    alturaNumber,
    pesoNumber
  );

  turmas.forEach((turma) => {
    if (turma.getId == +selectTurmas.value) {
      turma.adicionarAluno(aluno);
    }
  });

  nome.value = "";
  idade.value = "";
  altura.value = "";
  peso.value = "";

  listaTurmas();
});

listaTurmas();
