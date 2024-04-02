select "genres"."name" as "genre", "films"."releaseYear"
from "genres"
join "filmGenre" on "genres"."genreId" = "filmGenre"."genreId"
join "films" on "filmGenre"."filmId" = "films"."filmId"
where "films"."title" = 'Boogie Amelie'
