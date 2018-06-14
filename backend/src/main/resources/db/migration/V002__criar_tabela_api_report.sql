CREATE TABLE API_REPORT (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(100) not null,
	descricao varchar(100) not null,
	data_registro DATETIME DEFAULT NOW(),
	created_date DATETIME ,
	updated_date DATETIME ,
	created_by VARCHAR(50) ,
	updated_by VARCHAR(50) ,
	situacao varchar(1) not null,
	xml BLOB  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;