# Address

```sh
INSERT INTO address (cep, number, street, neighborhood, city, state, latitude, longitude)
VALUES
    ('45074-567', 59, 'Av. 9', 'Bate-pé', 'Vitória da conquista', 'BA', -14.870609, -41.127357),
    ('45843-335', 39, 'Rua cascavel', 'Dantilândia', 'Vitória da conquista', 'BA', -15.098517, -40.999351),
    ('45084-207', 89, 'Rua pereira', 'Inhobim', 'Vitória da conquista', 'BA', -15.271804, -40.953523),
    ('45101-017', 95, 'Av. josé', 'São Sebastião', 'Vitória da conquista', 'BA', -14.782593, -40.65733);
```

# Head Família

```sh
INSERT INTO head_family (name, birthday, address, email, cpf, cellphone)
VALUES
('João Carlos Silva', '1984-06-15', 1, 'joao.c.silva@gmail.com', '123.456.789-01', '557791234-5678'),
('Maria Fernanda Oliveira', '1992-03-22', 2, 'maria.f.oliveira@gmail.com', '234.567.890-12', '557792345-6789'),
('Lucas Henrique Pereira', '1987-11-09', 3, 'lucas.h.pereira@gmail.com', '345.678.901-23', '557793456-7890'),
('Ana Beatriz Costa', '1995-07-30', 4, 'ana.b.costa@gmail.com', '456.789.012-34', '557794567-8901'),
('Pedro Miguel Santos', '1981-01-18', 1, 'pedro.m.santos@gmail.com', '567.890.123-45', '557795678-9012'),
('Gabriela Martins Souza', '1999-05-05', 2, 'gabriela.m.souza@gmail.com', '678.901.234-56', '557796789-0123'),
('Ricardo José Almeida', '1994-09-13', 3, 'ricardo.j.almeida@gmail.com', '789.012.345-67', '557797890-1234'),
('Beatriz Regina Ferreira', '1989-12-01', 4, 'beatriz.r.ferreira@gmail.com', '890.123.456-78', '557798901-2345'),
('Gustavo Augusto Ramos', '1990-04-27', 1, 'gustavo.a.ramos@gmail.com', '901.234.567-89', '557799012-3456'),
('Larissa Camila Barbosa', '1997-10-08', 2, 'larissa.c.barbosa@gmail.com', '012.345.678-90', '557790123-4567');
```

# Usuário

```sh
INSERT INTO users (name, birthday, address, email, cpf, cellphone, password, privileges, active)
VALUES
    ('admin', '2000-10-19', 1, 'jefersonbrluz@gmail.com', '123.456.789-01', '557791234-5678', '123', 'admin', TRUE),
    ('Maria', '1992-03-22', 2, 'maria.f.oliveira@gmail.com', '234.567.890-12', '557792345-6789', '123', 'user', TRUE),
    ('Jeff', '1987-11-09', 3, 'lucas.h.pereira@gmail.com', '345.678.901-23', '557793456-7890', '123', 'user', FALSE);
``` 

# Familia

```sh
INSERT INTO familly (name, head_id, region, numberfamily, volume_actual, volume_need)
VALUES
('João Carlos Silva', 1, 'Bate-pé', 6, 5400, 5400),
('Maria Fernanda Oliveira', 2, 'Dantilândia', 4, 3240, 3600),
('Lucas Henrique Pereira', 3, 'Inhobim', 3, 1836, 2700),
('Ana Beatriz Costa', 4, 'São Sebastião', 5, 3825, 4500),
('Pedro Miguel Santos', 5, 'Bate-pé', 5, 2250, 4500),
('Gabriela Martins Souza', 6, 'Dantilândia', 4, 900, 3600),
('Ricardo José Almeida', 7, 'Inhobim', 6, 3780, 5400),
('Beatriz Regina Ferreira', 8, 'São Sebastião', 5, 2925, 4500),
('Gustavo Augusto Ramos', 9, 'Bate-pé', 8, 2160, 7200),
('Larissa Camila Barbosa', 10, 'Dantilândia', 7, 2520, 6300);
```

# Membro de família
```sh
INSERT INTO family_member (name, birthday, cpf, address, head_id)
VALUES
('Carlos Eduardo Silva', '1993-02-14', '123.456.789-01', 1, 1),
('Juliana Souza Lima', '1987-09-30', '234.567.890-12', 1, 1),
('Felipe Rocha Costa', '1995-05-12', '345.678.901-23', 1, 1),
('Patrícia Alves Pereira', '1981-11-22', '456.789.012-34', 1, 1),
('Marcos Antônio Oliveira', '1998-08-05', '567.890.123-45', 1, 1),
('Camila Ferreira Souza', '1990-03-20', '678.901.234-56', 2, 2),
('Rafael Martins Oliveira', '1984-11-10', '789.012.345-67', 2, 2),
('Larissa Costa Pereira', '1997-07-25', '890.123.456-78', 2, 2),
('Thiago Souza Lima', '1985-06-17', '901.234.567-89', 3, 3),
('Vanessa Rocha Silva', '1992-12-03', '012.345.678-90', 3, 3),
('Eduardo Silva Costa', '1988-04-02', '112.233.445-56', 4, 4),
('Bruna Oliveira Santos', '1991-08-14', '223.344.556-67', 4, 4),
('Leandro Rodrigues Alves', '1994-09-09', '334.455.667-78', 4, 4),
('Mariana Pereira da Silva', '1983-01-29', '445.566.778-89', 4, 4),
('Aline Martins Souza', '1990-03-11', '556.677.889-90', 1, 5),
('Daniel Costa Rocha', '1986-07-22', '667.788.990-12', 1, 5),
('Roberta Lima Pereira', '1992-12-05', '778.899.001-23', 1, 5),
('Gustavo Ferreira Silva', '1995-10-17', '889.900.112-34', 1, 5),
('João Carlos Silva', '1984-06-15', '990.011.223-45', 2, 6),
('Maria Fernanda Oliveira', '1992-03-22', '100.111.222-56', 2, 6),
('Lucas Henrique Pereira', '1987-11-09', '211.322.433-67', 2, 6),
('Ana Beatriz Costa', '1995-07-30', '322.433.544-78', 3, 7),
('Pedro Miguel Santos', '1981-01-18', '433.544.655-89', 3, 7),
('Gabriela Martins Souza', '1999-05-05', '544.655.766-90', 3, 7),
('Ricardo José Almeida', '1994-09-13', '655.766.877-01', 3, 7),
('Beatriz Regina Ferreira', '1989-12-01', '766.877.988-12', 3, 7),
('Gustavo Augusto Ramos', '1990-04-27', '877.988.099-23', 4, 8),
('Larissa Camila Barbosa', '1997-10-08', '988.099.110-34', 4, 8),
('Carlos Eduardo Silva', '1993-02-14', '099.110.221-45', 4, 8),
('Juliana Souza Lima', '1987-09-30', '210.221.332-56', 4, 8),
('Felipe Rocha Costa', '1995-05-12', '321.332.443-67', 1, 9),
('Patrícia Alves Pereira', '1981-11-22', '432.443.554-78', 1, 9),
('Marcos Antônio Oliveira', '1998-08-05', '543.554.665-89', 1, 9),
('Camila Ferreira Souza', '1990-03-20', '654.665.776-90', 1, 9),
('Rafael Martins Oliveira', '1984-11-10', '765.776.887-01', 1, 9),
('Larissa Costa Pereira', '1997-07-25', '876.887.998-12', 1, 9),
('Thiago Souza Lima', '1985-06-17', '987.998.109-23', 1, 9),
('Vanessa Rocha Silva', '1992-12-03', '098.109.220-34', 2, 10),
('Eduardo Silva Costa', '1988-04-02', '209.220.331-45', 2, 10),
('Bruna Oliveira Santos', '1991-08-14', '320.331.442-56', 2, 10),
('Leandro Rodrigues Alves', '1994-09-09', '431.442.553-67', 2, 10),
('Mariana Pereira da Silva', '1983-01-29', '542.553.664-78', 2, 10),
('Aline Martins Souza', '1990-03-11', '653.664.775-89', 2, 10);
```