
async function showGreet() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('greeting');
  dateContainer.innerText = textFromResponse;
}