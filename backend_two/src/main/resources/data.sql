insert into hero(name) values('Black Widow');
insert into hero(name) values('Superman');
insert into hero(name) values('Rogue');
insert into hero(name) values('Batman');

INSERT INTO USER ( USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES ('admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 'admin', 'admin@admin.com', 1, PARSEDATETIME('01-01-2016', 'dd-MM-yyyy'));
INSERT INTO USER ( USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES ('user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'enabled@user.com', 1, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));
INSERT INTO USER ( USERNAME, PASSWORD, FIRSTNAME, LASTNAME, EMAIL, ENABLED, LASTPASSWORDRESETDATE) VALUES ('disabled', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 'user', 'disabled@user.com', 0, PARSEDATETIME('01-01-2016','dd-MM-yyyy'));

INSERT INTO AUTHORITY (ID, NAME) VALUES (001, 'R_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (002, 'R_ADMIN');
INSERT INTO AUTHORITY (ID, NAME) VALUES (003, 'R_REPORT');
INSERT INTO AUTHORITY (ID, NAME) VALUES (004, 'G_PASSWORD_CHANGE');
INSERT INTO AUTHORITY (ID, NAME) VALUES (005, 'G_PASSWORD_CHANGE_ALL');
INSERT INTO AUTHORITY (ID, NAME) VALUES (006, 'G_USER');
INSERT INTO AUTHORITY (ID, NAME) VALUES (007, 'G_USER_CREATE');
INSERT INTO AUTHORITY (ID, NAME) VALUES (008, 'G_USER_UPDATE');
INSERT INTO AUTHORITY (ID, NAME) VALUES (009, 'G_USER_DELETE');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 1);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 2);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 3);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 4);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 5);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 6);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 7);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 8);
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (1, 9);

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (2, 1);

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_ID) VALUES (3, 1);
 
INSERT INTO USER_GROUP (NAME,ENABLED) VALUES ('GROUP 1', 1);
INSERT INTO USER_GROUP (NAME,ENABLED) VALUES ('GROUP 2', 1);
INSERT INTO USER_GROUP (NAME,ENABLED) VALUES ('GROUP 3', 1);