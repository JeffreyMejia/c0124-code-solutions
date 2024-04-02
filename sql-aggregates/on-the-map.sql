select "countries"."name" as "country",
count(*) as "number of cities"
from "cities"
join "countries" using ("countryId")
group by "countries"."name"
