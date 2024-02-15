-- Cria a tabela `cliente`
CREATE TABLE cliente (
  CPF VARCHAR(11) NOT NULL,
  primeiroNome VARCHAR(100) NOT NULL,
  meioNome VARCHAR(100) NOT NULL,
  ultimoNome VARCHAR(100) NOT NULL,
  nascimento DATE NOT NULL,
  telefone VARCHAR(255) NOT NULL,
  PRIMARY KEY (CPF)
);

-- Cria a tabela `endereco`
CREATE TABLE endereco (
  id INT NOT NULL AUTO_INCREMENT,
  numero INT NOT NULL,
  rua VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(100) NOT NULL,
  cliente_cpf VARCHAR(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_cpf) REFERENCES cliente (CPF)
);

-- Cria a tabela `categoria`
CREATE TABLE categoria (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Cria a tabela `subcategoria`
CREATE TABLE subcategoria (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  categoria_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);

-- Cria a tabela `produto`
CREATE TABLE produto (
  id INT NOT NULL AUTO_INCREMENT,
  modelo VARCHAR(100) NOT NULL,
  fabricante VARCHAR(100) NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  quantidade INT NOT NULL,
  subcategoria_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (subcategoria_id) REFERENCES subcategoria (id)
);

-- Cria a tabela `compra`
CREATE TABLE compra (
  id INT NOT NULL AUTO_INCREMENT,
  totalCompra DECIMAL(10,2) NOT NULL,
  hora TIME NOT NULL,
  dia DATE NOT NULL,
  desconto DECIMAL(10,2) NOT NULL,
  cliente_cpf VARCHAR(11) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (cliente_cpf) REFERENCES cliente (cpf)
);

-- Cria a tabela `lista`
CREATE TABLE lista (
  id INT NOT NULL AUTO_INCREMENT,
  produto_id INT NOT NULL,
  compra_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (produto_id) REFERENCES produto (id),
  FOREIGN KEY (compra_id) REFERENCES compra (id)
);

-- Cria a tabela `serie`
CREATE TABLE serie (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  produto_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (produto_id) REFERENCES produto (id)
);