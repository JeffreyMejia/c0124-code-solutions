/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  return person.firstName.charAt(0);
}
