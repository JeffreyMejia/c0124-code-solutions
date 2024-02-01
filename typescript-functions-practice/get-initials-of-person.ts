/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: {
  firstName: string;
  lastName: string;
}): string {
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}
