SELECT u2.id, u2.name, u1.name AS parent_name FROM users AS u1
RIGHT JOIN users AS u2 ON u1.id = u2.parent_id;