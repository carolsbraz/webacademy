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

    return soma / this.getNumAlunos;
  }

  public get getMediaAlturas(): number {
    let soma: number = 0;

    this.listaAlunos.forEach((aluno) => {
      soma += aluno.getAltura;
    });

    return soma / this.getNumAlunos;
  }

  public get getMediaPesos(): number {
    let soma: number = 0;

    this.listaAlunos.forEach((aluno) => {
      soma += aluno.getPeso;
    });

    return soma / this.getNumAlunos;
  }
}

const webacademy: Turma = new Turma(1, "WebAcademy");

const aluno1: Aluno = new Aluno(1, "Caroline", 21, 1.6, 40);
const aluno2: Aluno = new Aluno(2, "Caroline", 21, 1.6, 40);
const aluno3: Aluno = new Aluno(3, "Caroline", 21, 1.6, 40);
const aluno4: Aluno = new Aluno(4, "Caroline", 21, 1.6, 40);

webacademy.adicionarAluno(aluno1);
webacademy.adicionarAluno(aluno2);
webacademy.adicionarAluno(aluno3);
webacademy.adicionarAluno(aluno4);

console.log(webacademy.getListaAlunos);
console.log(webacademy.getMediaAlturas);
console.log(webacademy.getMediaIdades);
console.log(webacademy.getMediaPesos);
