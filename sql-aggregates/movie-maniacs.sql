select "firstName", "lastName", sum("amount") as "total paid"
from "payments"
join "customers" using ("customerId")
group by "customerId"
order by "total paid" desc
