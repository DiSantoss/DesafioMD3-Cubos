create table usuarios (
	id serial primary key,
  nome text,
  email text unique,
  senha text
)


create table categorias (
	id serial primary key,
  descricao text
)


create table transacoes (
	id serial primary key,
  descricao text,
  valor numeric,
  data date,
  categoria_id serial references categorias(id),
  usuario serial references usuarios(id),
  tipo text
)


insert into categorias (descricao) values 
('Alimentacao'),
('Assinaturas e Serviços'),
('Casa'),
('Mercado'),
('Cuidados Pessoais'),
('Educação'),
('Família'),
('Lazer'),
('Pets'),
('Presentes'),
('Roupas'),
('Saúde'),
('Transporte'),
('Salário'),
('Vendas'),
('Outras receitas'),
('Outras despesas')


