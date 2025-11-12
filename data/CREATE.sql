drop database tcc;


create database tcc;


use tcc;


create table tb_usuario (
    id_usuario int primary key auto_increment,
    email varchar(200),
    cpf varchar(200),
    senha varchar(200)
);

create table tb_hospital (
    id_hospital int primary key auto_increment,
    nome varchar(200)
);

create table tb_medico (
    id_medico int primary key auto_increment,
    nome varchar(200),
    especialidade varchar(200),
    id_hospital int,
    foreign key (id_hospital) references tb_hospital(id_hospital)
);

create table tb_agenda (
    id_consulta int primary key auto_increment,
    motivo varchar(200),
    especialidade varchar(200),
    id_medico int,
    id_hospital int,
    id_usuario int,
    data_consulta date,
    hora time,
    foreign key (id_medico) references tb_medico(id_medico),
    foreign key (id_hospital) references tb_hospital(id_hospital),
    foreign key (id_usuario) references tb_usuario(id_usuario)
);


insert into tb_hospital (nome) values
('hospital são paulo'),
('hospital geral grajaú'),
('hospital municipal integrado santo amaro');


insert into tb_medico (nome, especialidade, id_hospital) values
('dr. joão silva', 'clínico geral', 1),
('dr. ricardo alves', 'clínico geral', 1),
('dra. paula mendes', 'clínico geral', 1),

('dra. marina costa', 'pediatria', 1),
('dra. letícia brandão', 'pediatria', 1),
('dr. thiago lopes', 'pediatria', 1),

('dr. carlos nunes', 'cardiologia', 1),
('dra. juliana duarte', 'cardiologia', 1),
('dr. rodrigo santana', 'cardiologia', 1),

('dra. helena souza', 'dermatologia', 1),
('dra. aline ribeiro', 'dermatologia', 1),
('dr. vinícius amaral', 'dermatologia', 1),

('dr. felipe ramos', 'ortopedia', 1),
('dr. mateus pinheiro', 'ortopedia', 1),
('dra. clara ferreira', 'ortopedia', 1),

('dra. ana beatriz', 'ginecologia', 1),
('dra. daniela vieira', 'ginecologia', 1),
('dra. sofia lima', 'ginecologia', 1),

('dr. pedro lima', 'neurologia', 1),
('dra. isabela machado', 'neurologia', 1),
('dr. rafael leal', 'neurologia', 1),

('dra. camila torres', 'endocrinologia', 1),
('dr. marcus teixeira', 'endocrinologia', 1),
('dra. sabrina silva', 'endocrinologia', 1),

('dr. andré moura', 'oftalmologia', 1),
('dra. renata pereira', 'oftalmologia', 1),
('dr. luan cardoso', 'oftalmologia', 1),

('dra. luiza farias', 'psiquiatria', 1),
('dr. gustavo correia', 'psiquiatria', 1),
('dra. fabiana monteiro', 'psiquiatria', 1);


insert into tb_medico (nome, especialidade, id_hospital) values
('dr. marcelo alves', 'clínico geral', 2),
('dra. natalia gomes', 'clínico geral', 2),
('dr. eduardo silva', 'clínico geral', 2),

('dra. roberta dias', 'cardiologia', 2),
('dr. vinicius brito', 'cardiologia', 2),
('dra. larissa fernandes', 'cardiologia', 2),

('dr. tiago barbosa', 'ortopedia', 2),
('dr. mauricio alencar', 'ortopedia', 2),
('dra. julia freitas', 'ortopedia', 2),

('dra. fernanda reis', 'pediatria', 2),
('dr. caio figueiredo', 'pediatria', 2),
('dra. helena dias', 'pediatria', 2),

('dr. eduardo pires', 'dermatologia', 2),
('dra. patricia carvalho', 'dermatologia', 2),
('dr. otavio sousa', 'dermatologia', 2),

('dra. aline mendes', 'ginecologia', 2),
('dra. melissa cardoso', 'ginecologia', 2),
('dra. leticia morais', 'ginecologia', 2),

('dr. rodrigo moura', 'neurologia', 2),
('dra. tainá lopes', 'neurologia', 2),
('dr. bruno ferreira', 'neurologia', 2),

('dra. renata nogueira', 'endocrinologia', 2),
('dr. marcos vinícius', 'endocrinologia', 2),
('dra. amanda coelho', 'endocrinologia', 2);


insert into tb_medico (nome, especialidade, id_hospital) values
('dr. gustavo lima', 'clínico geral', 3),
('dra. viviane costa', 'clínico geral', 3),
('dr. ronaldo pinto', 'clínico geral', 3),

('dra. patrícia gomes', 'cardiologia', 3),
('dr. alexandre pereira', 'cardiologia', 3),
('dra. carolina matos', 'cardiologia', 3),

('dr. rafael almeida', 'neurologia', 3),
('dra. julia castro', 'neurologia', 3),
('dr. felipe melo', 'neurologia', 3),

('dra. isabela nogueira', 'ginecologia', 3),
('dra. amanda lopes', 'ginecologia', 3),
('dr. victor campos', 'ginecologia', 3),

('dr. bruno castro', 'pediatria', 3),
('dra. sofia oliveira', 'pediatria', 3),
('dr. matheus ribeiro', 'pediatria', 3),

('dra. juliana rocha', 'dermatologia', 3),
('dr. leonardo tavares', 'dermatologia', 3),
('dra. mariana silva', 'dermatologia', 3),

('dr. henrique tavares', 'ortopedia', 3),
('dra. letícia ferraz', 'ortopedia', 3),
('dr. pedro viana', 'ortopedia', 3),

('dra. aline rodrigues', 'endocrinologia', 3),
('dr. bruno matos', 'endocrinologia', 3),
('dra. tati lacerda', 'endocrinologia', 3),

('dr. ronaldo duarte', 'psiquiatria', 3),
('dra. manuela fonseca', 'psiquiatria', 3),
('dr. lucas menezes', 'psiquiatria', 3);


select * from tb_medico;
select * from tb_hospital;
select * from tb_agenda;
