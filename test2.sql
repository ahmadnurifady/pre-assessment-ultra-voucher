CREATE TABLE table_test(id INT, name VARCHAR(100), parent_id INT);

INSERT INTO table_test(id, name, parent_id) VALUES(1, 'Zaki', 2);
INSERT INTO table_test(id, name) VALUES(2, 'Ilham');
INSERT INTO table_test(id, name, parent_id) VALUES(3, 'Irwan', 2);
INSERT INTO table_test(id, name, parent_id) VALUES(4, 'Arka', 3);

create view parent as select id, name as parent_name from table_test;

select p.id, p.name, parent.parent_name from table_test p left join parent on parent.id = p.parent_id;