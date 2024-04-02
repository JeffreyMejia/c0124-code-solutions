select "line1", "district", "cities"."name" as "city", "countries"."name" as "country"
from "addresses"
inner join "cities" on "addresses"."cityId" = "cities"."cityId"
inner join "countries" on "cities"."countryId" = "countries"."countryId"
