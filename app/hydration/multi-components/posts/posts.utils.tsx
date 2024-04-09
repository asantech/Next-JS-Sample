export async function getPosts() {
    const response = await fetch('https://swapi.dev/api/people');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}
