/* exported getFullNameOfPerson */
function getFullNameOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  const result: string = person.firstName + ' ' + person.lastName;
  return result;
}
