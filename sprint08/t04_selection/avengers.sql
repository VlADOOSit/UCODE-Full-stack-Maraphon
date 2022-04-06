USE ucode_web;

SELECT heroes.id, heroes.name, SUM(powers.points) AS points
FROM heroes
       INNER JOIN powers ON (powers.hero_id = heroes.id)
GROUP BY heroes.id
ORDER BY points DESC
LIMIT 1;

SELECT heroes.name, SUM(powers.points)
FROM heroes
       INNER JOIN powers on (powers.hero_id = heroes.id)
WHERE powers.type = 'defense'
GROUP BY heroes.id
ORDER BY SUM(powers.points) 
LIMIT 1;

SELECT heroes.name, SUM(powers.points) AS points
FROM heroes 
    LEFT JOIN powers  ON heroes.id = powers.hero_id
    LEFT JOIN teams  ON heroes.id = teams.hero_id
WHERE teams.name = 'Avengers'
GROUP BY heroes.id
ORDER BY SUM(powers.points) DESC;

SELECT teams.name, SUM(powers.points) AS points
FROM heroes
       INNER JOIN powers ON powers.hero_id = heroes.id
       INNER JOIN teams ON teams.hero_id = heroes.id
GROUP BY teams.name
ORDER BY points;