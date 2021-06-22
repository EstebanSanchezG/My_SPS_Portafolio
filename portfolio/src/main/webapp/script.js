

async function showGreet() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.json();

  const greetContainer = document.getElementById('greeting');
  greetContainer.innerHTML = textFromResponse;
}


let map;

function createMap() {
  map = new google.maps.Map(document.getElementById('map'),
      {center: {lat: 20.732606, lng: -103.455255}, zoom: 10});
}
