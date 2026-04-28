const apiKey = "0c5beb76c34d1710a671424133a4f178";

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Entre une ville !");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.cod != 200) {
        alert("Ville non trouvée !");
        return;
      }

      cityName.textContent = data.name;
      temperature.textContent = `Température : ${data.main.temp}°C`;
      description.textContent = `Temps : ${data.weather[0].description}`;

      weatherResult.classList.remove("hidden");
    })
    .catch(error => {
      console.error(error);
      alert("Erreur API");
    });
});