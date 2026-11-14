-- 1
SELECT 
    alunos.nome AS aluno, 
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id;



-- 2
SELECT 
    alunos.nome AS aluno, 
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.nome_curso = 'Ciência da computação';



-- 3
UPDATE alunos 
SET curso_id = 2 
WHERE nome = 'Rose Costa';

SELECT 
    alunos.nome AS aluno, 
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id;




-- extra
INSERT INTO cursos (id, nome_curso) VALUES (4, 'DevOps');

SELECT 
    cursos.nome_curso
FROM cursos
LEFT JOIN alunos ON cursos.id = alunos.curso_id
WHERE alunos.id IS NULL;
