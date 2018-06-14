CREATE TABLE API_USUARIO (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	login varchar(50) not null,
	senha varchar(50) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into API_USUARIO (login, senha) values ('admin', 'datapar@sa');