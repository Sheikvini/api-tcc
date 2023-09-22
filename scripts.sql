create database feira;

//terminar de arrumar

create table tb_usuario(
        id_usuario        int primary key auto_increment,
        nm_usuario         varchar(200),
        ds_telefone        varchar(200),
        ds_email        varchar(200),
        ds_sexo            varchar(200),
        ds_cpf            varchar(200),
        ds_rg            varchar(200),
        dt_nascimento    date,
        ds_rua            varchar(200),
        ds_bairro        varchar(200)
);
