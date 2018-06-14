CREATE TABLE API_CONFIGURACAO (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	intervalo_checagem_recebimento varchar(50),
	intervalo_envio_emails varchar(50)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
-- cron = "0 15 9-17 * * MON-FRI"
-- 0 15 -> toda hora, primeiros 15 min
-- 9-17 -> de 9h as 17h
-- MON-FRI -> de segunda a sexta
insert into API_CONFIGURACAO (intervalo_checagem_recebimento, intervalo_envio_emails) values ('0 15 9-17 * * MON-FRI', '0 15 9-17 * * MON-FRI');