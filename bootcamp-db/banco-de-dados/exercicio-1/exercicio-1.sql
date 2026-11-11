CREATE TABLE cursos (
    id INT PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    curso_id INT,
    CONSTRAINT fk_curso FOREIGN KEY (curso_id) REFERENCES cursos(id)
);


INSERT INTO cursos (id, nome_curso) VALUES 
(1, 'Ciência da computação'),
(2, 'Matemática'),
(3, 'Psicologia');

INSERT INTO alunos (id, nome, email, curso_id) VALUES 
(1, 'Amanda Crystina', 'amanda@email.com', 1),
(2, 'Daniel Silva', 'daniel@email.com', 1),
(3, 'Matheus Oliveira', 'matheus@email.com', 2),
(4, 'Rose Costa', 'rose@email.com', 3);

SELECT * FROM alunos;
