
CREATE TABLE fornecedores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO fornecedores (nome, email) 
VALUES ('Amanda', 'amanda@gmail.com');

SELECT * FROM fornecedores;

SELECT nome, email FROM fornecedores;

