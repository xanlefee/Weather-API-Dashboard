
const apiKey = "947c7ef8f4775424300be7866e5163a0";
//let City = "london";

weatherArray = [];

// 5 days variable let Monday =


const buttonSub = $("#search-form");






buttonSub.on('click', 'button', function (event) {

    event.preventDefault();

    console.log("YH");

    let City = $("#search-input").val();


    const QueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + City + "&appid=" + apiKey;


    // do we need to push all the data points into the array then stringify and add to local storage? then parse?
    weatherArray.push(City);
    

    fetch(QueryURL)
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {


            console.log(JSON.stringify(data, null, 2));
            console.log(data);
            console.log(weatherArray);
            let Today = dayjs().format("DD/MM/YYYY");

            let CityContent1 = $('.weather-points-temp');
            let CityContent2 = $('.weather-points-wind');
            let CityContent3 = $('.weather-points-humidity');
            let weatherPic = $('.weather-pic');
            let BigCard = $("card-body-city");

            BigCard.attr("<h2>");
            BigCard.text("LALALA");

            // .attr("src","second.jpg")

            let CityTemp = data.list[0].main.temp - 273.15;
            let CityWind = data.list[0].wind.speed;
            let Humidity = data.list[0].main.humidity;
            let WeatherDate = data.list[0].dt_txt;
            let WeatherDateTrim = dayjs(WeatherDate).format("DD/MM/YYYY");
            let weatherIcon = "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
            weatherPic.attr("src", weatherIcon);

            CityContent1.text("Temp: " + Math.round(CityTemp * 100)/100 + " °C");
            CityContent2.text("Wind: " + CityWind + " KPH");
            CityContent3.text("Humidity: " + Humidity + " %");

            console.log(CityTemp);
            console.log(CityWind);
            console.log(Humidity);
            console.log(WeatherDate);
            console.log(WeatherDateTrim);

            let weatherList = data.list;
            //weatherList.concat(data.list);
            let weatherList2 = Array.from(weatherList);
            console.log(weatherList2);



            let cityTitle = $('.city-name');
            cityTitle.text(data.city.name + " (" + Today + ")");

            // let cardTitles = $('car')

            for (i = 0; i < weatherList2.length; i++) {

                $('.card-title-' + [i]).text(dayjs(weatherList2[i * 7].dt_txt).format("DD/MM/YY"));
                $('.temp-' + [i]).text("Temp: " + Math.round((weatherList2[i * 7].main.temp - 273.15) * 100) / 100 + "°C");
                $('.wind-' + [i]).text("Wind: " + weatherList2[i * 7].wind.speed + " KPH");
                $('.humidity-' + [i]).text("Humidity: " + weatherList2[i * 7].main.humidity + "%");
                $('.weather-pic-' + [i]).attr("src", "https://openweathermap.org/img/w/" + weatherList2[i*7].weather[0].icon + ".png")


            }







        });




});




/*To do:

1. When user searches for a city in the input, call weather API and show the result in HTML

a- add event listener to form submit yup
b)get the user input value (make it into variable(local storage) yup
c) build query URL based on user input value yup
d) call the API (inside event listener) and render the result in html yup
-get city name and show it in main weather forecast card yup
-get the first weather forecast item [0] and get the following values:
.date
.temperature
.wind speed
.humidity
.icon
yup

>render these values to the main card in html .attr()

loop through weather array and and get the values again:
.date
.temperature
.wind speed
.humidity
.icon


-render those values to the smaller card-
yup



2. When user searches for a city, store it in local storage.
(add to an array, styringify and display. use pop/push/shift/unshift to keep them at 5)

3. On initial page load, load the search history and show it as a list in HTML

- build the API query URL based on the history stored in local storage
call the API and render the result in the HTML


4. When user clicks on the search history, Call weather API and show the 
result in the HTML

fetch.(QueryURL)

ICON
https://openweathermap.org/img/w/" + weather[0].icon + ".png"

*/

