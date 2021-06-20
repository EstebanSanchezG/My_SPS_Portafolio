
async function showGreet() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.json();

  const greetContainer = document.getElementById('greeting');
  greetContainer.innerHTML = textFromResponse;
}