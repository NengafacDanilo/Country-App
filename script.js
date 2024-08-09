let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");
let result = document.getElementById("result"); // Define the result element

searchBtn.addEventListener("click", () => {
  let countryName = searchInput.value || "India"; // Use input value or default to India
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  
  fetch(finalURL)
    .then((response) => response.json())
    .then((Data) => {
      console.log(Data[0]);
      console.log(Data[0].capital[0]);
      console.log(Data[0].flags.svg); // Corrected property name
      console.log(Data[0].name.common);
      console.log(Data[0].continents[0]);
      console.log(Data[0].population);
      console.log(Data[0].borders);
      console.log(Object.keys(Data[0].currencies)[0]);
      console.log(Data[0].currencies[Object.keys(Data[0].currencies)[0]].name); // Corrected indexing
      console.log(Object.values(Data[0].languages).join(", ")); // Fixed formatting

      // Display the fetched data on the webpage
      result.innerHTML = `
        <img src="${Data[0].flags.svg}" id="flag-img">
        <h3>${Data[0].name.common}</h3>
        <p>Capital: ${Data[0].capital[0]}</p>
        <p>Continent: ${Data[0].continents[0]}</p>
        <p>Population: ${Data[0].population}</p>
        <p>Borders: ${Data[0].borders.join(", ")}</p>
        <p>Currency: ${Data[0].currencies[Object.keys(Data[0].currencies)[0]].name}</p>
        <p>Languages: ${Object.values(Data[0].languages).join(", ")}</p>
      `;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      result.innerHTML = `<p>Could not fetch data for "${countryName}".</p>`;
    });
});