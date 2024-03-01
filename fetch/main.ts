async function logUsers(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('There was a problem with your fetch:', error);
  }
}

logUsers();
