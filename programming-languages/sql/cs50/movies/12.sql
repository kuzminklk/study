SELECT title FROM movies WHERE movies.id IN
(
    SELECT movie_id FROM stars
    WHERE person_id IN (SELECT id FROM people WHERE name = 'Bradley Cooper')
    AND
    person_id IN (SELECT id FROM people WHERE name = 'Jennifer Lawrence')
);
