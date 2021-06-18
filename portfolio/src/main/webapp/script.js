
async function showGreet() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('greeting');
  dateContainer.innerText = textFromResponse;
}