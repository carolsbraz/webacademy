# Aula sobre controle de versões

Criar pasta com o nome **wacad-005**

Dentro da pasta criar duas novas pasta

```jsx
wacad-005
├─── docs
└─── src
```

Criar dois arquivos para o projeto

```jsx
wacad-005
├─── docs
│   └─── readme.md
└─── src
    └─── validadores.js
```

Dentro do arquivo ************validadores.js************, adicionar o código de exemplo

```jsx
function validar_email(email){
    // exemplo de código
}

function validar_cep(cep){
    // exemplo de código
}

function validar_cpf(cpf){
    // exemplo de código
}

function validar_telefone(telefone){
    // exemplo de código
}
```

![image](https://github.com/UFAM-ICOMP-WACAD/comandos-git-carolsbraz/assets/48094755/33cdf3c6-61db-4b4c-8eae-f003e202f2b0)


Iniciar repositório

```jsx
git init
```

Configurar usuário global

```jsx
git config --global user.email "[carolinesoares47@gmail.com](mailto:carolinesoares47@gmail.com)"
git config --global [user.name](http://user.name/) "carolsbraz"
```

Se utilizar o comando *—global* o usuário será responsável por todos os repositórios da máquina, caso seja necessário ser responsável apenas pelo repositório atual, retirar o comando

Criar commit

```jsx
git commit -m "mensagem commit"
```

Retorna o status do repositório, mudanças feitas, a brach

```jsx
git status
```

Criar nova branch

```jsx
git branch validadores
```

Mudar para a branch nova

```jsx
git checkout validadores
```

Listar arquivos do projeto

```jsx
ls
```

Listar arquivos de uma pasta

```jsx
ls src
```

Enviar arquivo editado para a ************staging area************

```jsx
git add src/validadores,js
```

Novo commit para as alterações

```jsx
git commit -m "validador cep"
```

Retorna o histórico de commits

```jsx
git log
```
![image](https://github.com/UFAM-ICOMP-WACAD/comandos-git-carolsbraz/assets/48094755/7a495e5d-2eb6-41ae-b351-315515e0545e)


Retornar para a branch principal

```jsx
git checkout master
```

Enviar alterações da branch validadores para a branch principal

```jsx
git merge validadores
```

## Github

```jsx
git fetch origin
git checkout 2-desenvolver-validador-de-cep
```
Gerenciamento de issues
![image](https://github.com/UFAM-ICOMP-WACAD/comandos-git-carolsbraz/assets/48094755/9058ebd6-724b-47fb-8cc2-ba8621503ba0)

