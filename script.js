let allCountriesData; // To store the fetched country data

// Fetch the country data and store it
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
    allCountriesData = data;
})
    .catch(error => console.log('error', error));

// Add an event listener for the "Search" button
document.querySelector("#searchCountry").addEventListener("click", () => {
  // Get the user's input from the input field
    const searchInput = document.querySelector("#searchInput").value.trim().toLowerCase();

    //modal
    const countryNotFound = new bootstrap.Modal(document.getElementById('countryNotFound'))

  // Find the corresponding country data based on the input
    const countryData = allCountriesData.find(country => country.name.common.toLowerCase() === searchInput);


  // Check if the country data was found
    if (countryData) {
    // Display information about the country
    document.querySelector("#mainArea").innerHTML = `
    <div class="container mt-3">
        <div class="card pt-5 pb-3 mb-3 text-white shadow" style="background-color: #232D3F; ">
            <div class="card-body">
                <div class="text-center">
                    <h2 class="text-uppercase fw-bold">${countryData.name.common}</h2>
                    <img class="img-fluid w-50 mx-auto" src="${countryData.flags.svg}" alt="">
                    <a href="${countryData.maps.googleMaps}"><p class="link fs-6 text-white"><em>${countryData.name.official}</em></p></a>
                </div>
            <hr>
            <div class="ms-5">
                <p><strong>Population: </strong>${countryData.population}</p>
                <p><strong>Capital: </strong>${countryData.capital}</p>
                <p><strong>Region: </strong>${countryData.region} (${countryData.subregion})</p>
                <p><strong>Demonyms: </strong>${countryData.demonyms.eng.f}</p>
                <p><strong>Currency: </strong>${countryData.currencies.name} (${countryData.currencies.symbol}) </p>
                <p><strong>Timezone: </strong>${countryData.timezones}</p>
                <p><strong>Driving Side: </strong>${countryData.car.side}</p>
                <p><strong>Internet TLD: </strong>${countryData.tld}</p>
                <p><strong>Calling Code: </strong>${countryData.idd.root}${countryData.idd.suffixes}</p>
                <p><strong>Start of Week: </strong>${countryData.startOfWeek}</p>
            </div>
            </div>
        </div>
    </div>
`;

} else {
    // Display a message if the country was not found
    countryNotFound.show();

}
searchInput.value = "";


});
