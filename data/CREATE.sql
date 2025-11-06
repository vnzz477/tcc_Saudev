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
('dra. marina costa', 'pediatria', 1),
('dr. carlos nunes', 'cardiologia', 1),
('dra. helena souza', 'dermatologia', 1),
('dr. felipe ramos', 'ortopedia', 1),
('dra. ana beatriz', 'ginecologia', 1),
('dr. pedro lima', 'neurologia', 1),
('dra. camila torres', 'endocrinologia', 1),
('dr. andré moura', 'oftalmologia', 1),
('dra. luiza farias', 'psiquiatria', 1);

insert into tb_medico (nome, especialidade, id_hospital) values
('dr. marcelo alves', 'clínico geral', 2),
('dra. roberta dias', 'cardiologia', 2),
('dr. tiago barbosa', 'ortopedia', 2),
('dra. fernanda reis', 'pediatria', 2),
('dr. eduardo pires', 'dermatologia', 2);

insert into tb_medico (nome, especialidade, id_hospital) values
('dr. gustavo lima', 'clínico geral', 3),
('dra. patrícia gomes', 'cardiologia', 3),
('dr. rafael almeida', 'neurologia', 3),
('dra. isabela nogueira', 'ginecologia', 3),
('dr. bruno castro', 'pediatria', 3),
('dra. juliana rocha', 'dermatologia', 3),
('dr. henrique tavares', 'ortopedia', 3);

select * from tb_agenda;
