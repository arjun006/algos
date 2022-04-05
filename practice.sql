SELECT b.title, a.first_name + " " + a.last_name AS a.author
FROM books b JOIN authors
ON b.id = a.id